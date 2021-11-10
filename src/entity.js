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

export class Player extends Entity{
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
    }
    this.jobClass = jobClass;
  }

  gainXP(xpAmount){
    this.stats.set("XP", this.stats.get("XP") + xpAmount);
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
    }
  }
}