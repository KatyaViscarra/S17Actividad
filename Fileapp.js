var fs = require('fs');
var xlsx = require("xlsx");

const readLine = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
});

console.log("");

readLine.question("Bienvenido nwn ¿Qué desea hacer?-  1. Manejar archivo .pdf, 2. Manejar archivo .csv, 3. Manejar archivo .docx, 4. Cambiar el formato de un archivo, 5. Salir: ", (decision) => {
    console.log("");
    if (decision == "1") {
        readLine.question("Seleccione la acción a realizar-  1. Leer el documento .pdf, 2. Agregar texto al documento .pdf, 3. Salir ", (actionPdf) => {
            console.log("");
            if (actionPdf == "1") {
                console.log("El documento .pdf tiene como texto: ");
                fs.readFile('./Hola.pdf', 'utf-8', (err, data) => {
                    if(err) {
                        console.log('error', err);
                    }else{
                        console.log(data);
                    }
                });
            } else if (actionPdf == "2") {
                readLine.question("Digite el texto que desea agregar: ", (dataPdf) => {
                    const ExtraText = `\n${dataPdf}`;
                    fs.appendFile('./Hola.pdf', ExtraText, (err) => {
                        if(err) throw("Ha ocurrido un error, intente nuevamente.");
                        console.log("El texto ha sido agregado exitosamente.");
                    });
                });
            } else if (actionPdf == "3") {
                console.log("Gracias por usar nuestra aplicación.")
                process.exit();
            }
        })
    } else if (decision == "2") {
        readLine.question("Seleccione la acción a realizar-  1. Leer el documento .csv, 2. Agregar texto al documento .csv, 3. Salir ", (actionCsv) => {
            console.log("");
            if (actionCsv == "1") {
                console.log("El documento .csv tiene como texto: ");
                fs.readFile('./Hola.csv', 'utf-8', (err, data) => {
                    if(err) {
                        console.log('error', err);
                    }else{
                        console.log(data);
                    }
                });
            } else if (actionCsv == "2") {
                readLine.question("Digite el texto que desea agregar: ", (dataCsv) => {
                    const ExtraText = `\n${dataCsv}`;
        
                    fs.appendFile('./Hola.csv', ExtraText, (err) => {
                        if(err) throw("Ha ocurrido un error, intente nuevamente.");
                        console.log("El texto ha sido agregado exitosamente.");
                    });
                });
            } else if (actionCsv == "3") {
                console.log("Gracias por usar nuestra aplicación.")
                process.exit();
            }
        })
    } else if (decision == "3") {
        readLine.question("Seleccione la acción a realizar-  1. Leer el documento .docx, 2. Agregar texto al documento .docx, 3. Salir ", (actionDocx) => {
            console.log("");
            if (actionDocx == "1") {
                console.log("El documento .docx tiene como texto: ");
                fs.readFile('./Hola.docx', 'utf-8', (err, data) => {
                    if(err) {
                        console.log('error', err);
                    }else{
                        console.log(data);
                    }
                });
            } else if (actionDocx == "2") {
                readLine.question("Digite el texto que desea agregar: ", (dataDocx) => {
                    const ExtraText = `\n${dataDocx}`;

                    fs.appendFile('./Hola.docx', ExtraText, (err) => {
                        if(err) throw("Ha ocurrido un error, intente nuevamente.");
                        console.log("El texto ha sido agregado exitosamente.");
                    });
                });
            } else if (actionDocx == "3") {
                console.log("Gracias por usar nuestra aplicación.")
                process.exit();
            }
        });
    } else if (decision == "4") {
        readLine.question("Seleccione la acción a realizar-  1. Convertir archivo .pdf a .txt, 2. Convertir archivo .docx a .csv, 3. Salir ", (format) => {
            console.log("");
            if (format == "1") {
                readLine.question("Ingrese el nombre de el nuevo archivo convertido : ", (name) => {
                    const info = xlsx.readFile('./Hola.pdf');
                    xlsx.writeFile(info, `./${name}.txt`);
                    console.log(`El archivo ${name}.txt ha sido creado exitosamente`)   
                });
            } else if (format == "2") {
                readLine.question("Ingrese el nombre de el nuevo archivo convertido : ", (name) => {
                    const info = xlsx.readFile('./Hola.docx');
                    xlsx.writeFile(info, `./${name}.csv`);
                    console.log(`El archivo ${name}.csv ha sido creado exitosamente`)
                });
            } else if (format == "3") {
                console.log("Gracias por usar nuestra aplicación.")
                process.exit();
            }
        });
    } else if (decision == "5") {
        console.log("Gracias por usar nuestra aplicación.")
        process.exit();
    }
});