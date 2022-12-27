const argv = require('yargs')
                .options({
                    'b': {
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'Base de la tabla de Multiplicar'
                    },
                    'l': {
                        alias: 'listar',
                        type: 'boolean',
                        demandOption: false,
                        default: false,
                        describe: 'Muestra la tabla en consola'
                    },
                    'h': {
                        alias: 'hasta',
                        type: 'number',
                        default: 10,
                        describe: 'Número multiplicador límite'
                    }
                })
                .check((argv, options)  => {
                    if(isNaN(argv.b)){
                        throw 'La base tiene que ser un número';
                    }
                    if(isNaN(argv.h)){
                        throw 'El límite tiene que ser un número';
                    }
                    return true;
                })
                .argv;

module.exports = argv;