# criando a aplicação 
npx create-next-app nomedoprojeto

# cd nomedoprojeto
## crie o arquivo tsconfig.json dentro da raiz

# adicionando typescript
yarn add --dev typescript @types/react
# ou 
npm add --dev typescript @types/react

# crie uma pasta src na raiz principal
## crie na raiz da src a pasta components
mova a pasta pages e styles para dentro de src

# instalando tawindim css
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest

# criando o configurador do tailwindcss
npx tailwindcss init -p

# adicionando primeira configuracao dentro do tailwind.config.js
purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
purge: ['./src/components/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],

# importa o tailwind dentro do _app.js
import 'tailwindcss/tailwind.css'

# iniciando a aplicacao em modo desenvolvimento
npm run dev 