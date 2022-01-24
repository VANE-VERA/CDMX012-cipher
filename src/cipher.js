
const cipher = (function () {
  // (x + n) % 26
  // (x - 65 + n) % 26 + 65

  //3
  let proceso = function (txt, desp) {
    //4 e inicia nuevamente el abc
    if (desp < 0 ) {
      desp += 26
    }

    let textoResultado = "";

    for (let contador = 0; contador < txt.length; contador++) {
      let letraIndividual = txt.charCodeAt(contador);

      if (letraIndividual >= 97 && letraIndividual <= 122) { //Minusculas
        textoResultado += String.fromCharCode((letraIndividual - 97 + desp) % 26 + 97);
      } else if (letraIndividual >= 65 && letraIndividual <= 90) { //Mayusculas
        textoResultado += String.fromCharCode((letraIndividual - 65 + desp) % 26 + 65);
      } else { //Otros caracteres
        textoResultado += String.fromCharCode(letraIndividual);
      }
    }

    return textoResultado;
  };
//2.1
  return {
    encode: function (desp, txt) {
      if (typeof (txt) === "string" && typeof (desp) === "number") {
        return proceso(txt, desp);
      }
      else {
        throw new TypeError('Parametros de tipo erroneo');
      }
    },
    //2.2
    decode: function (desp, txt) {
      if (typeof (txt) === "string" && typeof (desp) === "number") {
        return proceso(txt, 26 - desp);
      }
      else {
        throw new TypeError('Parametros de tipo erroneo');
      }
    }
  };

})();

export default cipher;

/* const cipher = (function () {

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
            while(pos >= l) {
              pos-=l
            }
          } else {
            //descifrar en reversa
            pos -= desp;
            while(pos < 0) {
              pos+=l
            }
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
    encode: function (desp, txt) {
      if (typeof (txt) === "string" && typeof (desp) === "number") {
        return proceso(txt, desp, true);
      }
      else {
        throw new TypeError('Parametros de tipo erroneo');
      }
    },
    decode: function (desp, txt) {
      if (typeof (txt) === "string" && typeof (desp) === "number") {
        return proceso(txt, desp, false);
      }
      else {
        throw new TypeError('Parametros de tipo erroneo');
      }
    }
  };

})();

export default cipher;
 */