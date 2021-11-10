export class Entity {
  constructor(att, def, health, exp, name) {
    this.stats = new Map(
      [
        ["AP", att],
        ["DP", def],
        ["HP", health],
        ["XP", exp]
      ]
    );
    this.name = name;
  }

  attack(entityToAttack) {
    let targetHP = entityToAttack.stats.get("HP");
    let targetDP = entityToAttack.stats.get("DP");
    
    entityToAttack.stats.set("HP", targetHP - (this.stats.get("AP") - targetDP));
  }

}

export class Player extends Entity{
  constructor(name, jobClass) {
    switch(jobClass) {
      case "wizard":
        super(5,3,2,0,name);
        break;
      case "warrior":
        super(2,3,5,0,name);
        break;
      case "rogue":
        super(3,5,2,0,name);
        break;
    }
    this.jobClass = jobClass;
  }
}