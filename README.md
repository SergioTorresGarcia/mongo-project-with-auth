### Como hacer un proyecto desde cero:

```bash

$ npm init -y
```

```bash
npm i express
```

Creamos .gitignore y añadimos:
	/node.modules
	.env

```bash
npm i nodemon -D
```

```bash
npm i dotenv -E
```

creamos carpeta src:
    server.js

añadir script en package.json:

```bash
"dev": "nodemon ./src/server.js"
```

///////////////

añadimos linea (bajo "main" en package.json:
) 
```json
"type": "module",
```
Cambiamos el require por:
```bash
import express from "express";
import 'dotenv/config';
```
