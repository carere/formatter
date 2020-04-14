import Volume from "../models/Volume";

export default interface VolumeRepository {
  add(volume: Volume): void;
}
