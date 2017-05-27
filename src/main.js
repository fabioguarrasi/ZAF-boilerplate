(function() {
  'use strict';

  var _ = require('underscore');
  var ES6Promise = require('es6-promise').Promise;

  var client = ZAFClient.init();
  client.on('app.registered', init);

  function init(data) {
    
  };
})();