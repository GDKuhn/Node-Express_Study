let fs = require("fs");

let args = process.argv.slice(2);

let fileName = args[0];

fs.readFile(fileName, "UTF8", (error, data) => {
  if (error) {
    throw error;
  }
  fs.writeFile(fileName + "_Uppercase.txt", data.toUpperCase(), (error) => {
    if (error) {
      throw error;
    }
    console.log("arquivo gerado com sucesso");
  });
});

// Criar arquivo
// fs.writeFile("text.txt", " - Olá Mundo", function (error) {
//   if (error) {
//     throw error;
//   }
//   console.log("Arquivo criado");
// });

// Adicionar ao Arquivo
// fs.appendFile("text.txt", " - Olá Mundo", function (error) {
//   if (error) {
//     throw error;
//   }
//   console.log("Arquivo criado");
// });

// Deletar Arquivo
// fs.unlink("text.txt", " - Olá Mundo", function (error) {
//   if (error) {
//     throw error;
//   }
//   console.log("Arquivo criado");
// });

//Rename File
// fs.rename("text.txt", " - Olá Mundo", function (error) {
//   if (error) {
//     throw error;
//   }
//   console.log("Arquivo criado");
// });

// fs.readFile("text.txt", "UTF8", function (error, data) {
//   if (error) {
//     throw error;
//   }
//   console.log(data);
// });
