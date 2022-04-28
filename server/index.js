require("dotenv").config();
const app = require("./app");
const db = require("./knex");

const PORT = process.env.port || 9000;

(async () => {
    try {
        console.log("Starting express server.");
        app.listen(PORT, () => {
            console.log(`App listening on port ${PORT}.`);
        });
    } catch (err) {
        console.error("Error starting express server.", err);
        process.exit(-1);
    }
})();