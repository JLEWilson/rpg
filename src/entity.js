export default class Entity {
  constructor(att, def, health, exp) {
    this.stats = new Map(
      [
        ["AP", att],
        ["DP", def],
        ["HP", health],
        ["XP", exp]
      ]
    );
  }

  attack(entityToAttack) {
    let targetHP = entityToAttack.stats.get("HP");
    let targetDP = entityToAttack.stats.get("DP");
    
    entityToAttack.stats.set("HP", targetHP - (this.stats.get("AP") - targetDP));
  }
}