# MOD 04 - Animated Emoji Character Boxes


## Inicializamos proyecto

Por la terminal ejecutamos en orden los siguientes comandos:

```bash
# Creamos carpeta de proyecto del día y nos metemos en ella
mkdir animated-emoji-character-boxes && cd animated-emoji-character-boxes

# Agregamos contenido
echo "# MOD 04 - Animated Emoji Character Boxes" >> README.md

## Agregamos al repositorio
git add --all
git commit -m "🎉 Commit inicial. MOD 04 - Animated Emoji Character Boxes"

# Inicializamos el proyecto NodeJS
npm init

# Instalamos como dependencia de desarollo la librería
# que permite ejecutar en el navegador código en caliente
npm install -D browser-sync

# Excluímos node_modules generado por NodeJS
echo "node_modules" >> .gitignore

## Agregamos al repositorio
git add --all
git commit -m "📝 Init proyecto. MOD 04 - Animated Emoji Character Boxes"

# Arrancamos Visual Studio Code en esa carpeta
code .
```

Editamos el `package.json` para declarar en la sección `scripts` la ejecución `start` que nos permitirá levantar un servidor en caliente:

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "browser-sync start --server './' --files './'"
}
```

Y creamos archivos `index.html`, `main.js` y `styles.css` desde consola:

```bash
touch index.html
touch main.js
touch styles.css
```

Snippet mínimo para el `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Animated Emoji Character Boxes</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Animated Emoji Character Boxes</h1>
    <script type="module" src="main.js"></script>
</body>
</html>
```

Snippet mínimo para el `main.js`:

```javascript
'use strict';

console.log("Hello World!");
```

## Puesta en ejecución

Arrancamos el servidor en caliente con:

```bash
# Lanzamos la tarea que definimos anteriormente en el package.json
npm start
```

y se nos debería abrir nuestro navegador de internet. Si abrimos las devtools deberíamos ver el siguiente mensaje en la consola:

```
"Hello World!"
```

Para parar el servidor... `CTRL+C`.


## VS Code extensions

Es útil instalar:

🚧


## How to contribute

For information ℹ️ on adding any content, please see first the [CONTRIBUTING file](../CONTRIBUTING.md).


## License

The content of this project itself and the underlying source code used to format and display that content is licensed under the [The GNU Affero General Public License Version 3](../LICENSE).
