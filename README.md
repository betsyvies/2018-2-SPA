# Contenido de pill sobre diseño de un router para aplicaciones SPA con vanillajs

[Aquí puedes ver la demo](https://betsyvies.github.io/2018-2-SPA/src)

## Getting started

- Instalar dependencias: `npm install`
- Servidor de desarrollo: `npm start`
- Deploy a gh-pages: `npm run deploy`

## Pasos de la demo
- Mostrar el producto terminado
- Extraer historias de usuarios
- Comenzar con el boilerplate listo en codesandbox

### Controlador
- Explorar las historias de usuario y determinar cuales serian las funciones de `controller`
  - `changeView`
  - `getView`
  - `changeView`
  - `changeHome`

### Modelo
- Discutir sobre las peticiones con fetch a la URL de la página.

### Vista
- Comenzar con el mock estatico ya listo, tanto html como css
- Identificar los "bloques de la interfaz"(aka componentes)
- Extraer el html estatico a 5 archivos, crear `view-controller`para hacer el `renderUI` on `window.load`

### Modelo
- Hacer peticion con fetch

### Vista-Controlador
- Crear event onhashchange para window
- Crear event load para regresar a la vista home