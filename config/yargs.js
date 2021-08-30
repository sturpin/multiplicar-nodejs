const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        describe: 'Base de la tabla de multiplicar',
        demandOption: true
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        describe: 'Lista la tabla en consola',
        default: false
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        describe: 'Hasta que número quieres multiplicar',
        default: 10
    })
    .check( (argv, options) => {
        if ( isNaN(argv.b) ) {
            throw 'ERROR: El argumento B debe de ser un número.'
        }
        return true; 
    })
    .check( (argv, options) => {
        if ( isNaN(argv.h) ) {
            throw 'ERROR: El argumento H debe de ser un número.'
        }
        return true; 
    })
    .argv

module.exports = argv;