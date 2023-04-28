'use strict';

const {
  ObjectDefineProperties,
} = primordials;

const {
  kEnumerableProperty,
} = require('internal/util');

const {
  getOSInformation,
} = internalBinding('os');

class Navigator {
  /**
   * Chromium: https://github.com/chromium/chromium/blob/main/ui/webui/resources/js/platform.ts
   * @return {string}
   */
  get platform() {
    switch (process.platform) {
      case 'win32': return 'Win32';
      case 'android': return 'Android';
      case 'darwin':
        // It should return MacIntel for both M1 and Intel mac devices.
        return 'MacIntel';
      default: return getOSInformation()[0];
    }
  }
}

ObjectDefineProperties(Navigator.prototype, {
  platform: kEnumerableProperty,
});

module.exports = new Navigator();
