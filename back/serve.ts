import express from 'express';

// use port 500
const PORT = process.env.PORT || 5000;

let app = express();
app.use(express.static('../front/dist'))
const server = app.listen(
    PORT,
    () => console.log(`gullbog server listening on port ${PORT}!`)
);