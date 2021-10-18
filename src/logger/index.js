const pino = require('pino')({
    prettyPrint: {
        levelFirst: true
    },
});

module.exports = pino ;