import fs from "node:fs";

export function deleteFile(fileName){
  fs.unlink(fileName, (error)=> {
    if (error){
      console.log("Falha ao ler arquivo")
      return
    } 
    console.log("Arquivo excluido com sucesso")
  })
}

