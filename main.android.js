import Orientation from './android_js_src/Orientation';

export * from './android_js_src/hooks';

export default Orientation;

export const OrientationType = {
  'PORTRAIT': 'PORTRAIT',
  'PORTRAIT-UPSIDEDOWN': 'PORTRAIT-UPSIDEDOWN',
  'LANDSCAPE-LEFT': 'LANDSCAPE-LEFT',
  'LANDSCAPE-RIGHT': 'LANDSCAPE-RIGHT',
  'FACE-UP': 'FACE-UP',
  'FACE-DOWN': 'FACE-DOWN',
  'UNKNOWN': 'UNKNOWN',
};
