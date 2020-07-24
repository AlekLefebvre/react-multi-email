var rewireReactHotLoader = require('react-app-rewire-hot-loader');
var overrideTsLoader = require('./react-app-rewire-typescript-hmr');
var rewireCssModules = require('react-app-rewire-css-modules');
var rewireLess = require('react-app-rewire-less');
var path = require('path');
/* config-overrides.js */
module.exports = function override(config, env) {
    if (env === 'development') {
        // (config, env)
        config = rewireReactHotLoader(config, env);
        // (config, env, babelPlugins = [])
        config = overrideTsLoader(config, env);
    }
    // sass-loader
    config = rewireCssModules(config, env);
    // less-loader
    config = rewireLess.withLoaderOptions({
        javascriptEnabled: true,
    })(config, env);
    return config;
};
//# sourceMappingURL=config-overrides.js.map
//# sourceMappingURL=config-overrides.js.map