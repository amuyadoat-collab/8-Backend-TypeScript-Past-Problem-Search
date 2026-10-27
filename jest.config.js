export default {
  // 以前の 'ts-jest/defaults-esm' から、古いバージョン対応のパスに修正
  preset: 'ts-jest/presets/default-esm', 
  testEnvironment: 'node',
  moduleNameMapper: {
    '^(\\.\\.?\\/.+)\\.js$': '$1',
  },
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        useESM: true, // ts-jestにESMとして処理させる
      },
    ],
  },
};
