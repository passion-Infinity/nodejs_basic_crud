const mongoose = require('mongoose');

const connect = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        });
        console.log(`Connect successfully`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connect;