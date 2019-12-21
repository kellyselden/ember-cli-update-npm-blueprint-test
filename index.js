'use strict';

module.exports = {
  name: require('./package').name,

  locals() {
    return {
      blueprintVersion: require('./package').version
    };
  },

  includedCommands() {
    return {
      foo: require('./commands/foo'),
    };
  }
};
