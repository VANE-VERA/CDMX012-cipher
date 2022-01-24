import cipher from './cipher.js';


document.getElementById("cifrar").addEventListener('click', function () {
    document.getElementById("resultado").innerHTML = cipher.encode(parseInt(document.getElementById("offset").value), 
    document.getElementById("cadena").value)
});

document.getElementById("descifrar").addEventListener('click', function () {
    document.getElementById("resultado").innerHTML = cipher.decode(parseInt(document.getElementById("offset").value), 
    document.getElementById("cadena").value)
});