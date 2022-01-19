import cipher from './cipher.js';
console.log(cipher)




document.getElementById("cifrar").addEventListener('click', function () {
    document.getElementById("resultado").innerHTML = cipher.encode(document.getElementById("cadena").value,
        parseInt(document.getElementById("offset").value))
});

document.getElementById("descifrar").addEventListener('click', function () {
    document.getElementById("resultado").innerHTML = cipher.decode(document.getElementById("cadena").value,
        parseInt(document.getElementById("offset").value))
});