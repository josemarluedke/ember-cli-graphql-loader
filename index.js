'use strict';

module.exports = {
  name: require('./package').name,

  setupPreprocessorRegistry(type, registry) {
    if (type === 'parent') {
      registry.add('js', {
        name: require('./package').name,
        ext: 'graphql',
        toTree(tree) {
          const GraphQLFilter = require('broccoli-graphql-filter');

          return new GraphQLFilter(tree, {
            keepExtension: true,
          });
        },
      });
    }
  },
};
