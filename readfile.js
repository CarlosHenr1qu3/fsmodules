import fs from "node:fs";

export function readFile(fiename){
  try {
    const data = fs.readFileSync(fiename, "utf8");
    console.log(data);
  } catch (error) {
    console.log("Erro ao escrever o arquivo");
  }
}