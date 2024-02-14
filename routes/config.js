
module.exports = function configRoutes(app) {

    require("./api.routes").init(app);

    return app;
};
