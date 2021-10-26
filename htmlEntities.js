function convertHTML(str) {
  let innerStr = str;
  if (innerStr.includes("&")) {
    innerStr = innerStr.replaceAll("&", "&amp;");
  }
  if (innerStr.includes("<")) {
    console.log("less then");
    innerStr = innerStr.replaceAll("<", "&lt;");
  }
  if (innerStr.includes(">")) {
    console.log("great then");
    innerStr = innerStr.replaceAll(">", "&gt;");
  }
  if (innerStr.includes('"')) {
    innerStr = innerStr.replaceAll(/\"/g, "&quot;");
  }
  if (innerStr.includes("'")) {
    innerStr = innerStr.replaceAll(/\'/g, "&apos;");
  }
  return innerStr;
}

console.log(convertHTML("<>&"));
