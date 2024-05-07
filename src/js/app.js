import GameSavingLoader from './gamesavingloader';

(async () => {
  try {
    const gameSaving = await GameSavingLoader.load();
    return gameSaving;
  } catch (error) {
    console.error(error.message);
  }
})();