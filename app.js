const session = require('express-session')
const { append } = require('express/lib/response')

    append.use(
        session({
            secret: 'secret string',
            resave: false,
            saveUninitialized:false,
            cookie:{/* can add cookie related info here*/}
        })
    );

    