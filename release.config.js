module.exports = {
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "angular",
        releaseRules: [
          { type: "build", scope: "deps", release: "patch" },
          { type: "lang", release: "minor" },
        ],
      },
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        preset: "conventionalcommits",
        presetConfig: {
          types: [
            {
              type: "feat",
              section: "Features",
              hidden: false,
            },
            {
              type: "fix",
              section: "Bug Fixes",
              hidden: false,
            },
            {
              type: "perf",
              section: "Performance Improvements",
              hidden: false,
            },
            {
              type: "lang",
              section: "Translation Updates",
              hidden: false,
            },
            {
              type: "build",
              scope: "deps",
              hidden: false,
              section: "Dependency updates",
            },
          ],
        },
      },
    ],
    "@semantic-release/github",
    [
      "@semantic-release/exec",
      {
        prepareCmd:
          // eslint-disable-next-line no-template-curly-in-string
          "yarn version --new-version ${nextRelease.version} --no-git-tag-version",
      },
    ],
    [
      "@semantic-release/git",
      {
        assets: [["**/package*.json", "!node_modules/**"]],
        // eslint-disable-next-line no-template-curly-in-string
        message: "release: ${nextRelease.version}",
      },
    ],
  ],
  branches: [
    "+([0-9])?(.{+([0-9]),x}).x",
    "main",
    "next",
    "next-major",
    { name: "beta", prerelease: true },
    { name: "alpha", prerelease: true },
  ],
};
