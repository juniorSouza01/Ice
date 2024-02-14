const express = require("express");
const { Router } = require("express");
const bodyParser = require("body-parser");
const configRoutes = require("./routes/config");
const { logs } = require("./middleware/logs.middleware");


const start = async () => {
    try {
        const port = 3000;
        const app = express();
        const router = Router();
        const routes = configRoutes(router);

        app.use(bodyParser.json());
        app.use(logs);
        app.use(routes);

        app.listen(port, () => {
            console.log(`Server online on ${port}`);
        });
    } catch (err) {
        console.error("[Server Error] - " + err);
    }
};

start();
