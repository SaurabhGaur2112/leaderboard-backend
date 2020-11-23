module.exports = function getFileExtension(name) {
  const ext = /^.+\.([^.]+)$/.exec(name);
  return ext == null ? '' : ext[1];
};
