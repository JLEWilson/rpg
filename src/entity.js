export class Entity {
  constructor(att, def, health, exp, name) {
    this.stats = new Map(
      [
        ["AP", att],
        ["DP", def],
        ["HP", health],
        ["MaxHP", health],
        ["XP", exp]
      ]
    );
    this.name = name;
    this.isAlive = true;
  }

  attack(entityToAttack) {
    let targetHP = entityToAttack.stats.get("HP");
    let targetDP = entityToAttack.stats.get("DP");
    let att = this.stats.get("AP");
    if (att > targetDP) {
      entityToAttack.stats.set("HP", targetHP - (att - targetDP));
    }
    if (entityToAttack.stats.get("HP") < 1) {
      entityToAttack.isAlive = false;
    }
  }

  
}

export class Player extends Entity {
  constructor(name, jobClass) {
    switch(jobClass) {
      case "wizard":
        super(5,1,5,0,name);
        break;
      case "warrior":
        super(3,2,8,0,name);
        break;
      case "rogue":
        super(4,3,5,0,name);
        break;
      default:
        super(0,0,0,0,name);
    }
    this.jobClass = jobClass;
    this.xpArray = [2, 5, 9, 14, 20];
  }

  gainXP(xpAmount) {
    this.stats.set("XP", this.stats.get("XP") + xpAmount);
    if (this.stats.get("XP") >= this.xpArray[0]){
      this.xpArray.shift();
      this.gainLevel();
    }
  }

  healHP(hpAmount) {
    let healedAmount = Math.min(this.stats.get("HP") + hpAmount, this.stats.get("MaxHP"))
    this.stats.set("HP", healedAmount);
  }

  gainLevel() {
    this.stats.set("AP", this.stats.get("AP") + 1);
    this.stats.set("DP", this.stats.get("DP") + 1);
    this.stats.set("MaxHP", this.stats.get("MaxHP") + 1);
    this.stats.set("HP", this.stats.get("MaxHP"));
  }
}

export class Enemy extends Entity{
  constructor(name){
    switch (name){
      case "goblin":
        super(5, 1, 4, 2, name);
        break;
      case "slime":
        super(3, 3, 4, 2, name);
        break;
      case "giant rat":
        super(4, 2, 4, 2, name);
        break;
      default:
        super(0, 0, 0, 0, name);
    }
  }
}