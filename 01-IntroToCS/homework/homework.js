'use strict';

function BinarioADecimal(num){
   let elevado = 0;
   let suma = 0; 
   for (let i = num.length -1; i>=0; i--) {
      if(num[i] !=0){
         suma = suma + 2 ** elevado;
      }
      elevado++;
   }
   return suma;
}


function DecimalABinario(num) {
   let binary = "";
   while (num > 0) {
       binary = (num % 2) + binary;
       num = Math.floor(num / 2);
   }
   return binary
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
