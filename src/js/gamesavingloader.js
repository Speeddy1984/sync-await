import json from "./parser";
import read from "./reader";
import GameSaving from "./gamesaving";

export default class GameSavingLoader {
  static async load() {
    try {
      const data = await read();
      const parsedData = await json(data);
      const parsedJSON = JSON.parse(parsedData);
      return new GameSaving(parsedJSON);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
