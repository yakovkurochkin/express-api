const mongoose = require("mongoose");
const mongodbUri = require("mongodb-uri");

const {
    MONGO_USER,
    MONGO_PASS,
    MONGO_HOST,
    MONGO_PORT,
    MONGO_DB
} = process.env;

const mongoUrl = mongodbUri.format(
    {
        username: MONGO_USER,
        password: MONGO_PASS,
        hosts: [
            {
                host: MONGO_HOST,
                port: MONGO_PORT,
            },
        ],
        database: MONGO_DB,
    },
);

exports.connect = () => {
    // Connecting to the database
    mongoose
        .connect(mongoUrl)
        .then(() => {
            console.log("Successfully connected to database");
        })
        .catch((error) => {
            console.log(`database connection to ${mongoUrl} failed. exiting now...`);
            console.error(error);
            process.exit(1);
        });
};