module.exports = {
  collectCoverage: true,
  moduleFileExtensions: ["js", "jsx", "json", "ts", "tsx"],
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
  moduleNameMapper: {
    "^.*[.](jpg|JPG|png|PNG|jpeg|JPEG|scss|SCSS|css|svg|SVG)$":
      "<rootDir>/src/__tests__",
  },
  modulePaths: ["<rootDir>", "<rootDir>/node_modules"],
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "<rootDir>/src/**/?(*.)+(spec|test).[jt]s?(x)",
  ],
  testPathIgnorePatterns: ["<rootDir>/node_modules"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
