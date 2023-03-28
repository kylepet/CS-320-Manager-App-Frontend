const express = require('express');
const app = express();
const port = 3000;

// Load `public` directory
app.use(express.static('public'))

// Listen on [port].
app.listen(port, () => {
    console.log(`Started listening on port ${port}`)
});