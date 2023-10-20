// Problem 4: Write a function to check if the char is a small case or not.

function checkChar(char)
{  
let smallCase = 'abcdefghijklmnopqrstuvwxyz';
// let bag = "";

for(let i=0; i<26; i++)
  {
    if(char == smallCase[i])
    {
      return 'is small case';
    }
  }
  return 'is not small case'

}

console.log(checkChar('N'))
console.log(checkChar('a'))
console.log(checkChar('N'))
console.log(checkChar('e'))
console.log(checkChar('F'))
console.log(checkChar('b'))
console.log(checkChar('c'))