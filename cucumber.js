let common = [
  "test/**/*.feature", // Specify our feature files
  "--require-module ts-node/register", // Load TypeScript module
  "--require test/**/*.steps.ts", // Load step definitions
  "--format progress-bar", // Load custom formatter
  "--format node_modules/cucumber-pretty", // Load custom formatter
  "--fail-fast",
].join(" ");

module.exports = {
  default: common,
};
