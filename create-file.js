import fs from "node:fs";

export function createFile(message) {
  if (typeof message !== "string") {
    console.error("ERRO: O argumento passado não é uma string. Tente novamente.");
    return;  // Não retorna a mensagem, apenas exibe no console
  }

  fs.writeFile("./meuarquivo.txt", message, "utf-8", (error) => {
    if (error) {
      console.error("ERRO: Não foi possível criar o arquivo:", error.message);
      return;
    }
    console.log("Arquivo criado com sucesso!");
  });

  console.log("Arquivo criado com sucesso!"); // Exibe no console se não houver erro
}


