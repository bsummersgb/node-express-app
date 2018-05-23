const express = require('express');
// execute the express like a function so we can now use all kinds of utility methods:
const app = express(); 

/* use() sets up middleware:
    - an incoming request will go through app.use()
    - next is a function which you can execute to move the request to the 'next' middleware in line. It's optional
 */
app.use((request, response, next) => {
    response.status(200).json({
        message: 'It works'
    });
});

module.exports = app;