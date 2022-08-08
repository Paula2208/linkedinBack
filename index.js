const express = require('express');
const cors = require('cors')
const app = express();

const PORT = 4001;
app.use(cors());

function onStart(){
    console.log(`Server running on port ${PORT} - CORS-enabled`);
}

app.listen(PORT, onStart);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Routes
const authRouter = require('./src/routes/auth');
const postRouter = require('./src/routes/posts');
const userRouter = require('./src/routes/users');

app.use('/v1', authRouter);
app.use('/v1', postRouter);
app.use('/v1', userRouter);

module.exports = app;