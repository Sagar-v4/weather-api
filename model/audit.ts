import mongoose from "mongoose"

const coordSchema = new mongoose.Schema({
    lon: {
        type: Number
    },
    lat: {
        type: Number
    }
})

const weatherSchema = new mongoose.Schema({
    id: {
        type: Number
    },
    main: {
        type: String
    },
    description: {
        type: String
    },
    icon: {
        type: String
    }
})

const mainSchema = new mongoose.Schema({
    temp: {
        type: Number
    },
    feels_like: {
        type: Number
    },
    temp_min: {
        type: Number
    },
    temp_max: {
        type: Number
    },
    pressure: {
        type: Number
    },
    humidity: {
        type: Number
    },
})

const windSchema = new mongoose.Schema({
    speed: {
        type: Number
    },
    deg: {
        type: Number
    },
})

const cloudsSchema = new mongoose.Schema({
    all: {
        type: Number
    },
})

const sysSchema = new mongoose.Schema({
    _type: {
        type: Number
    },
    id: {
        type: Number
    },
    country: {
        type: String
    },
    sunrise: {
        type: Number
    },
    sunset: {
        type: Number
    },
})

const auditSchema = new mongoose.Schema({

    coord: {
        type: coordSchema,
    },

    weather: {
        type: [weatherSchema],
    },

    base: {
        type: String
    },

    main: {
        type: mainSchema,
    },

    visibility: Number,

    wind: {
        type: windSchema,
    },

    clouds: {
        type: cloudsSchema,
    },

    dt: Number,

    sys: {
        type: sysSchema,
    },

    timezone: {
        type: Number
    },

    id: {
        type: Number
    },

    name: {
        type: String,
        unique: [true, "City name must be unique!"]
    },

    cod: {
        type: Number
    }
})

module.exports = mongoose.model('Audit', auditSchema);










