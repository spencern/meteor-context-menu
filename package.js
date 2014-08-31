Package.describe({
  name: 'spencern:context-menu',
  summary: 'Meteor package for Sudhanshu Yadav\'s contextMenu.js',
  version: '1.1.2',
  git: 'http://github.com/spencern/meteor-context-menu.git'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0.1');

  api.use('jquery');

  api.addFiles('contextMenu/contextMenu.min.js', 'client');
  api.addFiles('contextMenu/contextMenu.css', 'client');
});
