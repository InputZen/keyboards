import path from 'path';
export function getDefinitionsPath(version = 'v2') {
  // glob >= 9 needs forward slashes, even on Windows
  return path
    .join(
      __dirname,
      '..',
      version === 'v2' ? 'src/**/*.json' : `${version}/**/*.json`,
    )
    .split(path.sep)
    .join('/');
}
export function getOutputPath() {
  return path.resolve(process.argv[2] || 'dist');
}
export function getRelativePath(f: string) {
  return path.relative(__dirname, f);
}
