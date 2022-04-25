const fs = require("fs");

module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
  admin: {
    watchIgnoreFiles: ["/private/*"],
  },
  cron: {
    enabled: true,
    tasks: {
      "*/40 * * * * *": () => {
        console.log("evry 40 second");
      },
    },
  },
});
