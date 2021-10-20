function truncateString(str, num) {
    if(str.length <= num){
      return str
    }else{
      var truncated=''
      for(let i = 0; i < num; i++){
        truncated+=str[i]
      }
      
      return truncated.trim()+'...'
    }
    
  }
  
console.log(truncateString("A-", 1))
