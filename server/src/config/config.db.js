const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });

        console.log("\x1b[44m%s\x1b[0m", `[DB]: DONE`);
        console.log("\x1b[33m%s\x1b[0m", `URI: ${connection.connection.host}`);
        console.log(`___________________________________________`);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

module.exports = connectDB;