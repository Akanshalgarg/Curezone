const mongoose = require('mongoose');
//now connect  node to mongo db 
mongoose.connect('mongodb://0.0.0.0:27017/userDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(() => {
    console.log(`connection successful`);
}).catch((e) => {
    console.log(`error`);
});