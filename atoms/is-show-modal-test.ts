const { atom } = require('recoil');

const atomIsShowModalTest = atom({
  key: 'atom-is-show-modal-test',
  default: true,
});

export { atomIsShowModalTest };
