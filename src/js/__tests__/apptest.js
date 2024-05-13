import GameSavingLoader from '../gamesavingloader'

test('GameSavingLoader.load() returns correct data', async () => {
    const result = await GameSavingLoader.load();
  
    expect(result).toEqual({
      id: 9,
      created: 1546300800,
      userInfo: {
        id: 1,
        name: "Hitman",
        level: 10,
        points: 2000,
      },
    });
  });

  test('GameSavingLoader.load() returns error', async () => {
    jest.spyOn(JSON, 'parse').mockImplementation(() => {
      throw new Error('Parsing error');
    });
  
    try {
      await GameSavingLoader.load();
    } catch (error) {
      expect(error.message).toBe('Parsing error');
    }
  });