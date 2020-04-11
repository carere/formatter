let common = [
  "test/**/*.feature",
  "--require-module ts-node/register",
  "--require test/**/*.steps.ts",
  "--format progress-bar",
  "--format node_modules/cucumber-pretty",
  "--fail-fast",
].join(" ");

module.exports = {
  default: common,
};
