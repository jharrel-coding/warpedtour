const mongoose = require('mongoose');

const VenueSchema = mongoose.Schema(
    {
        venueName: {
            type: String,
            required: [true, "Venue name is required."],
        },
        state: {
            type: String,
            required: [true, "Venue state is required."],
            enum: [
                'California',
                'Oregon',
                'Washington',
                'Nevada',
                'Texas',
                'Georgia',
            ],
        }
    }, { timestamps: true }
);

const Venue = mongoose.model("Venue", VenueSchema);

module.exports = Venue;