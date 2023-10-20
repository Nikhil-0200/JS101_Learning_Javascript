// Problem 1: Create a function to check if a number is Prime or Not


function CheckPrime(num)
{
  if(num < 2)
  {
    return false;
  }
  for(let i=2; i<num; i++)
    {
      if(num % i == 0)
      {
        return false;
      }
    }
   
    return true;
  
}
let num = 12

if(CheckPrime(num))
{
  console.log(num+ " " + 'Is a Prime No.')
}
else
{
  console.log(num +" "+ 'Is not a Prime No.')
}

