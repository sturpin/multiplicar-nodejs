const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base, listar=false, hasta=10 ) => {

    try {

        let salida = ''; // Lo que imprimimos en la salida no debe de llevar caracteres especiales
        let consola = ''; // Lo que se imprime en consola

        for (let i=1; i<=hasta; i++) {
            salida += `${base} x ${i} = ${ base*i }\n`;
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${ base*i }\n`;
        }

        if ( listar ) {

            console.log('===============');
            console.log('Tabla del', colors.blue(base));
            console.log('===============');
    
            console.log(consola);
        }

        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;

    } catch (err) {

        throw err;
    }



}

module.exports = { crearArchivo }