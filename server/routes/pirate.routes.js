const pirateController = require('../controller/pirate.controller');

module.exports = app => {
    app.get('/api/pirate', pirateController.getAllPirates);
    app.get('/api/pirate/:id', pirateController.getOnePirate);
    app.post('/api/pirate', pirateController.createPirate);
    app.put('/api/pirate/:id', pirateController.updatePirate);
    app.delete('/api/pirate/:id', pirateController.deletePirate)
}