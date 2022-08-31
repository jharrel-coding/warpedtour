const mongoose = require('mongoose');
const venueDB = "venueDB"

mongoose.connect(`mongodb://localhost/${venueDB}`)
    .then(() => {
    console.log("connected to the db ${venueDB}");
    })
    .catch((err) => console.log(`Error in DB connection to ${venueDB}`, err));