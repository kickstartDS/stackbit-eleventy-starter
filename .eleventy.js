const kdsPlugin = require('@kickstartds/eleventy-plugin-kickstartds');

module.exports = function (eleventyConfig) {
    eleventyConfig.setServerOptions({ port: 3000, domDiff: false });
    eleventyConfig.addPlugin(kdsPlugin);
    eleventyConfig.addGlobalData('eleventyComputed', {
        layout: (data) => data.type + '.tsx',
    });
    eleventyConfig.addPassthroughCopy({ public: '.' });
    return {
        dir: {
            input: 'content/pages',
            layouts: '../../layouts',
            data: '../data'
        }
    };
};
