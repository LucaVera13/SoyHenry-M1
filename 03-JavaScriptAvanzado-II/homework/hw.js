function counter() {
    var contador = 0;
    contador++;
    return function(){
      return contador
    }
  }
  const nuevoContador = counter();
  console.log(nuevoContador())
  console.log(nuevoContador())
  
  const otroContador = counter()
  console.log(otroContador())     
  console.log(otroContador())
  