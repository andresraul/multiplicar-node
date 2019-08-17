// requireds
const fs = require('fs');
var colors = require('colors');

let listarTabla = (base, limite) => {


    if (!Number(base)) {
        console.log(`El valor ${base} no es un número.`);
        return;
    }

    if (!Number(limite)) {
        console.log(`El valor ${base} no es un número.`);
        return;
    }

    console.log('======================'.green);
    console.log(`tabla de ${base}`.green);
    console.log('======================'.green);

    let data = '';

    for (let i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${base * i}\n`;
    }

    console.log(data);

}


const crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor ${base} no es un número.`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor ${base} no es un número.`);
            return;
        }


        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)


            resolve(`tabla-${base}.txt`);
        });

    });

}

module.exports = {
    crearArchivo,
    listarTabla
}