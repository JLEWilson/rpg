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
    
  }
}