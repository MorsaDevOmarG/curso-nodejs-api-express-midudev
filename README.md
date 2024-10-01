# CURSO NODEJS API EXPRESS

- MIDUDEV

## Notas

- Iniciamos con:
  - **_npm init -y_**

- Podemos ejectuarlo con: 
  - **_node --watch (nombre archivo)_** 
    - El --watch hace que se reinicié con los cambios de manera manual
- **Errores**
  - 100/199: Respuestas informativas
  - 200-299: Respuestas satisfactorias
  - 300-399: Redirecciones
  - 400-499: Errores del cliente
  - 500-599: Errores del servidor

- En lapágina de: 
  - **_http.cat _**
    - encontraremos la definición de todos los errores

- **NODEMON**
    - Instalación
      - **_npm install nodemon_**
      - **_npm install -g nodemon_**
        -  Nota: en lugar de instalarlo de forma global (-g), lo instalamos como DEPENDENCIA de DESARROLLO
      - **_npm install nodemon -D_** 
  - Dentro del archivo:
    - **_package.json_**
  - Configuramos esta parte:
  - ```
        "scripts": {
        "dev": "nodemon js/02.statusCode.js"
    },
    ```
  - y una vez configurado, ejecutamos en consola:
    - **_npm run dev_**
  - Con ello, lograremos ejecutar el contenido del archivo, que en este caso es la configuración de un SERVER

## EXPRESS.JS

- **_Framework de Node.js_**

- Instalación
  - Dependencia de producción:
    - **_npm install express -E_** (-E, modo exacto)
  - 