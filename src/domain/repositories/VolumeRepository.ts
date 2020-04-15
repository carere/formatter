import Volume from "../models/Volume";

export default interface VolumeRepository {
  find(id: string): Volume;
  add(volume: Volume): void;
}
