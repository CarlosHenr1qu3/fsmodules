import fs from "node:fs";

export function rewritetext(fileName, newMessage) {
  if (typeof newMessage !== "string" || typeof fileName !== "string") {
    console.error("ERRO: O argumento passado não é uma string. Tente novamente.");
    return;
  }

  // Escreve ou sobrescreve o arquivo diretamente
  fs.writeFile(fileName, newMessage, "utf-8", (writeError) => {
    if (writeError) {
      console.error("ERRO: Não foi possível reescrever o conteúdo do arquivo:", writeError.message);
      return;
    }
    console.log("Arquivo modificado com sucesso!");
  });
}
