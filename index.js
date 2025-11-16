const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
app.use(express.static('public'));


let methodOverride = require('method-override');
app.use(methodOverride('_method'));



// auto refresh livereload
const path = require('path');
const livereload = require('livereload');
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));

const connectLivereload = require('connect-livereload');
app.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 100);
});


mongoose.connect('mongodb+srv://mahmoudalden125_db_user:lm4hHqrFBpq96NnN@cluster1.qnovwpw.mongodb.net/?appName=Cluster1', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000, // مهم جدًا
    socketTimeoutMS: 45000,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

app.use(express.urlencoded({ extended: true }));
// const { use } = require('react');
app.set('view engine', 'ejs');



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

const allroutes = require('./routes/allroutes');
app.use(allroutes);
const addUser = require('./routes/addUser');
app.use("/user/add.html", addUser);