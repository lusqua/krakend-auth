# Usa a imagem base do Node.js
FROM node:20

# Define o diretório de trabalho no contêiner
WORKDIR /app

# Copia o arquivo package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o arquivo index.js e outros arquivos necessários para o diretório de trabalho
COPY . .

# Expõe a porta que o aplicativo usará
EXPOSE 3000

# Comando para rodar o aplicativo
CMD ["node", "index.js"]
