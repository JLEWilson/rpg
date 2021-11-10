import Entity from "../src/entity";

describe('Entity', () => {
  test('should create an object which stores 4 stats in a map: AP, DP, HP, XP', () => {
    const entity = new Entity(1, 2, 3, 4);
    expect(entity.stats.get("AP")).toEqual(1);
    expect(entity.stats.get("DP")).toEqual(2);
    expect(entity.stats.get("HP")).toEqual(3);
    expect(entity.stats.get("XP")).toEqual(4);
  });
});