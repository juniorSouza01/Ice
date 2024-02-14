const crm = require("../controllers/api.controller");
const auth = require('../middleware/authentication.middleware');

/**
 *
 * @param {import('../index')} app
 */
exports.init = function(app) {
    app.get('/users', auth, crm.getUsers);
    app.post('/create-user', auth, crm.createUsers);
    app.get('/user/:id', auth, crm.getNewUser);
    app.put('/user/:id', auth, crm.updateUsers);
    app.delete('/user/:id', auth, crm.deleteUsers);
};