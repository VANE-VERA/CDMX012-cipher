

`README.md`:
  

# Pre requisitos

1. Para ejecutar los comandos a continuación necesitarás una :shell:
   [UNIX Shell](https://curriculum.laboratoria.la/es/topics/shell),
   que es un programita que interpreta líneas de comando (command-line
   interpreter) así como tener [git](https://curriculum.laboratoria.la/es/topics/scm/01-git)
   instalado. Si usas un sistema operativo "UNIX-like", como GNU/Linux o MacOS,
   ya tienes una _shell_ (terminal) instalada por defecto (y probablemente `git`
   también). Si usas Windows puedes usar la versión completa de [Cmder](https://cmder.net/)
   que incluye [Git bash](https://git-scm.com/download/win) y si tienes Windows
   10 o superior puedes usar [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/install-win10).
2. Realizar un :fork
   https://github.com/VANE-VERA/CDMX012-cipher.git
   [configurar](https://gist.github.com/BCasal/026e4c7f5c71418485c1) un `remote`
   hacia el mismo.
3. :arrow_down: [Clona](https://help.github.com/articles/cloning-a-repository/)
   tu *fork* a tu computadora (copia local).
4. 📦 Instala las dependencias del proyecto con el comando `npm install`. Esto
   asume que has instalado [Node.js](https://nodejs.org/) (que incluye [npm](https://docs.npmjs.com/)).
5. Para ver la interfaz de tu programa en el navegador, usa el comando
   `npm start` para arrancar el servidor web y dirígete a
   `http://localhost:3000` en tu navegador.

En relación a las instalaciones te compartimos un par de videos:  
* [Instalación de herramientas en windows](https://youtu.be/wGQjTcVIoiE)  
* [Instalación de herramientas en macOs](https://youtu.be/57O77XxVtDE)



### Introducción a la aplicación

La aplicación ha sido diseñada para poder intercambiar mensajes cifrados y poder decodificarlos, con la finalidad de guardar el secreto que será el resultado de nuestro texto. Se necesitan solo 3 pasos.
(1) Ingresa tu texto
(2) Tu número de desplazamientos
(3) Guarda el secreto ¡SHHH...!


### Info sobre proceso y decisiones de diseño.

Para diseñarla, se pensó en una aplicación que nos ayudara a intercambiar mensajes de una forma misteriosa y divertida entre amigas, implementando un cifrado cesar, que es una forma simple de cifrar desplazando letras del abecedario.
La interfaz es intuitiva, y la paleta de colores fue elegida pensando en un diseño femenino, misterioso, y amable a la vista.

