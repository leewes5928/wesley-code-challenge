require("dotenv").config();
const app = require("./app");
const db = require("./knex");

const PORT = process.env.port || 9000;

(async () => {
    try {
        console.log("Running migrations.");
        await db.migrate.latest();

        console.log("Starting express.");
        app.listen(PORT, () => {
            console.log(`App listening on port ${PORT}.`);
        });
    } catch (err) {
        console.error("Error starting database.", err);
        process.exit(-1);
    }
})();