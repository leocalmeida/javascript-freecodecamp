function spinalCase(str) {
  //Faz a separação das palavras
  var spinalStr = str;
  let reg = /([A-Z])|(\s+)|(\-+)|(\_+)/g;
  spinalStr = spinalStr.replace(reg, " $1");

  //Remover espaços duplos
  spinalStr = spinalStr.replace(/\s+/g, " ");

  //Remove espaços ao inicio e fim da string
  spinalStr = spinalStr.trim();

  //tudo lower case
  spinalStr = spinalStr.toLowerCase();

  //Separa as palavras
  spinalStr = spinalStr.split(/\W/);

  //une tudo criando a palavra separada por -
  spinalStr = spinalStr.join("-");

  return spinalStr;
}

console.log(spinalCase("AllThe-small_Things"));
