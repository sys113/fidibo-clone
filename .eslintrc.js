const { init } = require("@fullstacksjs/eslint-config/init");

module.exports = init({
  modules: {
    auto: true,
    react: true,
    next: true,
    typescript: { resolverProject: "./tsconfig.json" },
  },
});
