Package.describe({
  summary: "jQuery.qrcode - a jQuery plugin for dynamically generating QR codes",
  version: "1.0.2",
  name: "dschulz:jquery-qrcode",
  git: "https://github.com/dschulz/jquery-qrcode.git",
});

Package.onUse(function (api) {
  api.versionsFrom('0.9.0');
  api.use('jquery', 'client');
  api.imply('jquery', 'client');
  api.addFiles('lib/jquery.qrcode.js', 'client');
});
