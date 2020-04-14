import VolumeRepository from "../domain/repositories/VolumeRepository";
import Volume from "../domain/models/Volume";

export default class implements VolumeRepository {
  protected volumes: Array<Volume>;

  constructor() {
    this.volumes = [];
  }

  add(volume: Volume): void {
    this.volumes.push(volume);
  }
}
