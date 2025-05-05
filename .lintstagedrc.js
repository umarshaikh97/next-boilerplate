/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('path');

const lintCheckCommand = (filenames) =>
  `yarn lint --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`;

const prettierFormatCommand = () => 'yarn format';

module.exports = {
  '*.{js,jsx,ts,tsx}': [prettierFormatCommand, lintCheckCommand],
  '*.{json,css,md,scss}': [prettierFormatCommand],
};
