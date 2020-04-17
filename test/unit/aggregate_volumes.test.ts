import InMemoryVolumeRepository from "../../src/adapter/InMemoryVolumeRepository";
import Volume from "../../src/domain/models/Volume";
import AggregateVolumes from "../../src/usecase/AggregateVolumes";

let volumeRepository = new InMemoryVolumeRepository();

[
  new Volume("vwx", 10),
  new Volume("yza", 20),
  new Volume("fko", 30),
  new Volume("wxc", 44),
  new Volume("gfh", 60),
  new Volume("qsd", 84),
].map((v: Volume) => volumeRepository.add(v));

describe("Aggregate Volumes", function () {
  it("Should aggregate volumes [vwx, yza, fko] and get 'gfh'", function () {
    assertThatAggregatedVolumesEqualsToResultingVolume(
      ["vwx", "yza", "fko"],
      "gfh"
    );
  });

  it("Should aggregate volumes [wxc, fko, vwx] and get 'qsd'", function () {
    assertThatAggregatedVolumesEqualsToResultingVolume(
      ["wxc", "fko", "vwx"],
      "qsd"
    );
  });
});

function assertThatAggregatedVolumesEqualsToResultingVolume(
  list: Array<string>,
  id: string
) {
  assertTwoVolumeAreEqual(
    aggregateVolume(fetchVolumes(list)),
    volumeRepository.find(id)
  );
}

function fetchVolumes(list: Array<string>): Array<Volume> {
  return list.map((id: string) => volumeRepository.find(id));
}

function aggregateVolume(volumes: Volume[]): Volume {
  return new AggregateVolumes(volumes).handle();
}

function assertTwoVolumeAreEqual(volume: Volume, expected: Volume): void {
  expect(volume.getAmount()).toEqual(expected.getAmount());
}
