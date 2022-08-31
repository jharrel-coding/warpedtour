const venueController = require("../controllers/venue.controller")

module.exports = (app) => {
    app.get("/api/venues", venueController.getVenues);
    app.get("/api/venues/:id", venueController.getVenueById);
    app.post("/api/venues/", venueController.createVenue);
    app.put("/api/venues/:id", venueController.updateVenue);
    app.delete("/api/venues/:id", venueController.deleteVenue);
}