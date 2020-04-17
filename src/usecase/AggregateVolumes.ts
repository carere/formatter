import Volume from "../domain/models/Volume";

export default class {
  constructor(private volumes: Array<Volume>) {}

  handle(): Volume {
    let volume = new Volume("aaa", 0);

    this.volumes.forEach((v: Volume) => {
      volume.setAmount(volume.getAmount() + v.getAmount());
    });

    return volume;
  }
}
