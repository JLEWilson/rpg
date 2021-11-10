import Entity from "../src/entity";

describe('Entity', () => {

  test('should create an object which stores 4 stats in a map: AP, DP, HP, XP', () => {
    const entity = new Entity();
    expect(entity.stats).toEqual(expect.anything());
    expect(entity.stats[AP]).toEqual(expect.anything());
    expect(entity.stats[DP]).toEqual(expect.anything());
    expect(entity.stats[HP]).toEqual(expect.anything());
    expect(entity.stats[XP]).toEqual(expect.anything());

  });


});