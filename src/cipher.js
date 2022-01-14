//const cipher = {
 // ...
//};
//export default cipher;
//crerando variable cesar o la funcion anonima que regresara a 
//una funcion con 3 parametros
var cesar = cesar || (function(){
 let proceso=function (texto,desp,action) {
  let replace = (function () {
  //matriz del alfabeto 
  let alfabeto = ['a','b','c','d','e','f','g','h','i','j','k','l',
  'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let longitud= alfabeto.length; 
// obtener posicion de la llave privada
return function (c) {
  //vamos  saber la posicion
let i =alfabeto.indexOf(c.toLowerCase() );
//ddonde estamos en la matriz y como se recorrera y que pasa cuando llegue al final 
if (i!=-1){
//primero tenemos la posicion de mi desplazzamiento
let pos = i;
//que decifrare
if (action) {
  //cifrar para adelante
pos += desp;
//como se movera
pos-= (pos >= l )?l:0;
}else {
  //descifrar en reversa
  pos -= desp;
  pos+= (pos < 0)?l:0;
}
return texto   [pos];

}
return c;
};

})();
 //tenermos que ver que el texto este acode al abc
 let re = (/([a-z])/ig);
//una funcion que se encargue de intercambiar
return String(texto).replace(re, function (match) {
  return replace (match);
});

 };
  return{
    encode : function (texto,desp) {
      return proceso (texto,desp,true);
    },
      decode :function (texto,desp) {
  return proceso(texto,desp,false);
}
};
})();
//funcion cifrado
function cifrar () {
document.getElementById("resultado").innerHTML =
cesar.encode(document.getElementById("cadena").value,3);
}
//funcios descifrar
function descifrar() {
  document.getElementById("resultado").innerHTML =
  cesar.decode(document.getElementById("cadena").value,3);
}