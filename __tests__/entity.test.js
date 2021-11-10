import {Enemy, Entity, Player} from "../src/entity";

describe('Entity', () => {
  test('should create an object which stores 4 stats in a map: AP, DP, HP, XP', () => {
    const entity = new Entity(1, 2, 3, 4);
    expect(entity.stats.get("AP")).toEqual(1);
    expect(entity.stats.get("DP")).toEqual(2);
    expect(entity.stats.get("HP")).toEqual(3);
    expect(entity.stats.get("XP")).toEqual(4);
  });

  test('attack method should lower HP of another entity by AP-DP', () => {
    const playerEntity = new Entity(2, 2, 2, 2);
    const enemyEntity = new Entity(1, 1, 3, 1);
    playerEntity.attack(enemyEntity);
    expect(enemyEntity.stats.get("HP")).toEqual(2);
  });

  test('attack method should not add HP if targetDP > attack', () => {
    const playerEntity = new Entity(2, 2, 2, 2);
    const enemyEntity = new Entity(1, 3, 3, 1);
    playerEntity.attack(enemyEntity);
    expect(enemyEntity.stats.get("HP")).toEqual(3);
  });
  test("should set enemy.isAlive to false if target hp is below 1", () =>{
    const playerEntity = new Entity(2, 2, 2, 2);
    const enemyEntity = new Entity(1, 1, 1, 1);
    playerEntity.attack(enemyEntity);
    expect(enemyEntity.isAlive).toEqual(false);
  });
});

describe('Player (extends Entity)', () => {
  test('should take a name and class to create a player object with all the stats of entity as well as a class', () => {
    const player1 = new Player("Gary the Bloodless", 'wizard');
    expect(player1.name).toEqual("Gary the Bloodless");
    expect(player1.jobClass).toEqual("wizard");
    expect(player1.stats.get("AP")).toBeDefined();
    expect(player1.stats.get("DP")).toBeDefined();
    expect(player1.stats.get("HP")).toBeDefined();
    expect(player1.stats.get("XP")).toBeDefined();
  });
  test('gainXP method should take in an xp value and add it to the player\'s xp', () => {
    const player1 = new Player("Gary the Bloodless", 'wizard');
    player1.gainXP(5);
    expect(player1.stats.get("XP")).toEqual(5);
  });

  test('healHP method should take in a number and add it to the player\'s HP', () => {
    const player1 = new Player("Jeff Jeff the Dweeb", 'rogue');
    player1.stats.set("HP", 1);
    player1.healHP(3);
    expect(player1.stats.get("HP")).toEqual(4);
  })

  test('healHP method should not heal past maxHP', () => {
    const player1 = new Player("Jeff Jeff the Dweeb", 'rogue');
    player1.stats.set("HP", 1);
    player1.healHP(30);
    expect(player1.stats.get("HP")).toEqual(5);
  })
});

describe('Enemy (extends Entity', () => {
  test('should create an enemy object with stats defined by name', () => {
  const enemy = new Enemy("goblin");
  expect(enemy.stats.get("AP")).toBeDefined();
  expect(enemy.stats.get("DP")).toBeDefined();
  expect(enemy.stats.get("HP")).toBeDefined();
  expect(enemy.stats.get("XP")).toBeDefined();

  });
});