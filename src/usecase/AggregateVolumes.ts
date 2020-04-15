import Volume from "../domain/models/Volume";

export default class {
  constructor(private volumes: Array<Volume>) {}

  handle(): Volume {
    return new Volume("aaa", 0);
  }
}
