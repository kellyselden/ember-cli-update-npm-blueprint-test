'use strict';

module.exports = {
  name: require('./package').name,

  locals() {
    return {
      blueprintVersion: require('./package').version
    };
  }
};
