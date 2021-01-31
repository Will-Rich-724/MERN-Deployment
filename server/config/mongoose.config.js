const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/piratetest", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Database connected"))
    .catch(err => console.log("Uh oh, something went wrong"));