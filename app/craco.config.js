const path = require("path");
module.exports = {
  webpack: {
    alias: {
      '@node_modules': path.resolve(__dirname, "node_modules/"),
      '@services': path.resolve(__dirname, "src/services/"),
      '@components': path.resolve(__dirname, "src/components/"),
      '@config': path.resolve(__dirname, "src/config/"),
      '@views': path.resolve(__dirname, "src/views/"),
    }
  }
}