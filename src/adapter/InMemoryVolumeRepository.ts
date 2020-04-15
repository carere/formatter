import VolumeRepository from "../domain/repositories/VolumeRepository";
import Volume from "../domain/models/Volume";

export default class implements VolumeRepository {
  protected volumes: Array<Volume>;

  constructor() {
    this.volumes = [];
  }

  find(id: string): Volume {
    let candle = this.volumes.find((c: Volume) => c.getId() == id, this);

    if (candle === undefined)
      throw new Error(`Cannot find Volume with id: '${id}'`);

    return candle;
  }

  add(volume: Volume): void {
    this.volumes.push(volume);
  }
}
