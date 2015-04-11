Package.describe({
  summary: "jQuery QR code plugin - a jQuery plugin for generating QR codes",
  // Version number.
  version: "1.0.0",
  // Optional.  Default is package directory name.
  name: "dschulz:jquery-qrcode",
  // Optional github URL to your source repository.
  git: "https://github.com/dschulz/jquery-qrcode.git",
});

Package.onUse(function (api) {
  api.versionsFrom('0.9.0');
  api.use('jquery', 'client');
  api.addFiles([
    'lib/jquery.qrcode-0.11.0.js',
  ], 'client'
  );
});
