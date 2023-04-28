'use strict';

require('../common');
const assert = require('assert');
const { platform } = require('process');

assert.strictEqual(navigator.platform, {
  aix: 'AIX',
  android: 'Android',
  darwin: 'MacIntel',
  freebsd: 'FreeBSD',
  linux: 'Linux',
  openbsd: 'OpenBSD',
  sunos: 'SunOS',
  win32: 'Win32',
}[platform]);
