function permutation(n,r){

 n = document.getElementById('n').value;
 r = document.getElementById('r').value;

 function factorial(num){
   let product = 1;
 for(let i=2; i <= num; i++){
   product *= i;
 }
  return product;
 }
let ans = factorial(n)/factorial(n-r);
document.getElementById('ans').innerHTML = ans

}

  
function combination(n,r){
  
   n = document.getElementById('nC').value;
   r = document.getElementById('rC').value;
  
   function factorial(num){
     let product = 1;
   for(let i=2; i <= num; i++){
     product *= i;
   }
    return product;
   }

   let finalN = factorial(n);
   let finalR = factorial(n-r)*factorial(r);
  let ans = finalN/finalR;
  document.getElementById('ansC').innerHTML = ans
 
  
  }

  function displayPermutation(){
    let element = document.getElementById('permSol');
    element.classList.remove('d-none');
  }

  function displayCombination(){
    let element = document.getElementById('combSol');
    element.classList.remove('d-none');
  }


  function hidePermutation(){
    let element = document.getElementById('permSol');
    element.classList.add('d-none');
  }


  function hideCombination(){
    let element = document.getElementById('combSol');
    element.classList.add('d-none');
  }

  