//const cipher = {

var cipher = cipher || (function () {
  let proceso = function (txt, desp, action) {
    let replace = (function () {
      //matriz del alfabeto 
      let abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
        'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
      let l = abc.length;
      // mi funcion para recorrer mensaje por letra
      return function (recorrerT) {
        //el numero de posiicon de mi letra en abc
        let i = abc.indexOf(recorrerT.toUpperCase());
        //ddonde estamos en la matriz y como se recorrera y que pasa cuando llegue al final 
        if (i != -1) {
          //primero tenemos la posicion de mi desplazzamiento
          let pos = i;
          //quieres cifrar(true) o descifrar(false)
          if (action) {
            //cifrar para adelante
            pos += desp;
            //como se movera
            pos -= (pos >= l) ? l : 0;
          } else {
            //descifrar en reversa
            pos -= desp;
            pos += (pos < 0) ? l : 0;
          }
          return abc[pos];

        }
        return recorrerT;
      };

    })();
    let re = (/([A-Z])/ig);
    //una funcion que se encargue de intercambiar
    return String(txt).replace(re, function (match) {
      return replace(match);
    });

  };
  return {
    encode: function (txt, desp) {
      return proceso(txt, desp, true);
    },
    decode: function (txt, desp) {
      return proceso(txt, desp, false);
    }
  };
})();

function cifrar() {

  document.getElementById("resultado").innerHTML =
    cipher.encode(document.getElementById("cadena").value,
      parseInt(document.getElementById("offset").value));
}

function descifrar() {
  document.getElementById("resultado").innerHTML =
    cipher.decode(document.getElementById("cadena").value,
      parseInt(document.getElementById("offset").value));

}
export default cipher;

