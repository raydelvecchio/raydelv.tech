const context = require.context('./', false, /\.json$/);

const galleries = context.keys().map((key) => ({
    slug: key.replace(/^\.\//, '').replace(/\.json$/, ''),
    ...context(key),
}));

export default galleries;
