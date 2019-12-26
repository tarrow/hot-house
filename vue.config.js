module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  publicPath: process.env.GITHUB_WORKFLOW
    ? '/hot-house/'
    : '/'
}