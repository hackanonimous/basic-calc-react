# Calculadora basica con React
app responsiva de una calculadora basica trabajada con React y css
## Instalacion
para la instalacion de las dependencias
```bash
pnpm install
```
## Ejecucion
para ejecutar en nuestor navegador
```bash
pnpm run dev
```

## Deploy
- Configuramos el gh-pages en nuestro proyecto
- instalamos
```bash
pnpm i gh-pages --save-dev
```
- configuramos el `package.json`
```json
"predeploy":"npm run build",
"deploy":"gh-pages -d dist",
"build": "vite build --base=/basic-calc-react/",
```
- ejecutamos el deploy
```bash
npm run deploy
```
## realizaremos un CI (continuous integration) con github actions
1. nos dirigimos a nuestro repositorio
2. nos dirigimos a la pestaña `settings`
3. opcion `Pages`
4. en la seccion de `Buil and deploument` seleccioanaremos en `source` la opcion `GitHub Actions`
5. seleccionamos `GitHub Pages Jekyll` y lo configuramos
6. copiaremos el codigo de configuracion de la siguiente direccion https://vitejs.dev/guide/static-deploy
7. reemplazamos en el archivo de configuracion de jekyll, y guardamos
8. en la configuracion de vite configuraremos la ruta de nuestro git hub page en mi caso `https://hackanonimous.github.io/basic-calc-react` 
