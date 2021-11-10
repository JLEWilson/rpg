import Entity from "../src/entity";

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
});