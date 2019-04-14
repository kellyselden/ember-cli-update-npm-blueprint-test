'use strict';

module.exports = {
  description: 'ember-cli-update-npm-blueprint-test',

  locals(options) {
    let name = options.entity.name;
    let blueprintVersion = require('./package').version;

    return {
      name,
      blueprintVersion
    };
  }
};
