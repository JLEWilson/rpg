import {Entity, Player} from "../src/entity";

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
  test('gain xp method should take in an xp value and add it to the players xp', () => {
    const player1 = new Player("Gary the Bloodless", 'wizard');
    player1.gainXP(5);
    expect(player1.stats.get("XP")).toEqual(5);
  });

});