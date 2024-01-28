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
## CI (continuous integration) con github actions
1. en nuestra carpeta raiz del proyecto crearemos un archivo en las siguientes carpetas de configuracion.
```bash
mkdir -p .github/workflows && touch .github/workflows/build-deploy.yml
```
2. en nuestro archivo `build-deploy.yml` ingresaremos las siguientes intruccion que nos permitira ejecutar de manera automatica el deploy en GitHub Pages una vez realisemos el `push ` o un `pull request` a nuestra rama `main`
```yml
#nombre de mi actions
name: React App Github Deploy
#configuramos que esta a la espera que ocurra un push o un pull_request para que se ejecute lo que tenemos configurado en jobs
on:
	push:
		branches:
			- "main"
	pull_request:
		branches:
			- "main"
#tareas que se ejcutara si realizamos un push o un pull requeest a nuestra rama main
jobs:
	#especificamos que SO usaremos
	build:
		runs-on: ubuntu-latest
	#configuramos los pasos que realizara
		steps:
			- name: Checkout
				uses: actions/Checkout@v3
			- name: Install & build
				run: npm i && npm run build
			- name: deploy
				uses: JamesIves/github-pages-deploy-action@4.1.1
				with:
					branch: gh-pages
					folder: dist

```




3. opcion `Pages`
4. en la seccion de `Buil and deploument` seleccioanaremos en `source` la opcion `GitHub Actions`
5. seleccionamos `GitHub Pages Jekyll` y lo configuramos
6. copiaremos el codigo de configuracion de la siguiente direccion https://vitejs.dev/guide/static-deploy
7. reemplazamos en el archivo de configuracion de jekyll, y guardamos
8. en la configuracion de vite configuraremos la ruta de nuestro git hub page en mi caso `https://hackanonimous.github.io/basic-calc-react` 
