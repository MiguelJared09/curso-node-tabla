const fs = require('fs');

const colors = require('colors');

const crearArchivo = async( base = 5, listar = false, hasta = 10) => {
    try{
        // (listar) ? console.log('SI') : console.log('NO');
        if(listar){
            console.log('==============='.yellow);
            console.log(` Tabla del  ${colors.yellow(base)}`);
            console.log("===============".yellow);
        }
        let salida = ``;
        let consola = ``;
        for (let i = 1; i <= hasta; i++) {
            salida += ` ${base}  ${'x'}  ${i} ${'='} ${5*i}\n`;
            consola += ` ${base}  ${'x'.yellow}  ${i} ${'='.yellow} ${5*i}\n`;
        }
        if(listar){
            console.log(consola);
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        console.log(`tabla-${base}.txt creado en la raíz`);
        return `tabla-${base}.txt`;
    }
    catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}