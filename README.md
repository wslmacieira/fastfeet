# Desfio final Fastfeet

### :fire: Sobre o Desafio 
Este é um projeto de um serviço de gestão e acompanhamento de encomendas para uma transportadora fictícia. Construído com as tecnologias mais populares do mundo Javascript, Node.js como backend, ReactJS como frontend e um app mobile em React Native.

### :pencil: Requisitos
1. Ter o **NodeJs** e o **Yarn** instalado
2. Ter instâncias do **Redis** e **PostgreSQL** em execução
3. Um dispositivo ou emulador **Android** conectado ao computador
4. **Reactotron** rodando na porta 9090 (**Opcional**)

### ⚡️ Começando
1. ``git clone https://github.com/wslmacieira/fastfeet.git``
2. ``cd fastfeet``
3. ``iniciando com Docker  para rodar os bancos de dados``

```bash
# Instale uma imagem do Postgres
docker run --name fastfeet -e POSTGRES_PASSWORD=docker -p

# Instale uma imagem do Redis
docker run --name redisfastfeet -p 6379:6379 -d -t redis:alpine

# Instale uma imagem do MongoDb
docker run --name mongofastfeet -p 27017:27017 -d -t mongo

# Inicie o Postgres
docker start fastfeet
# Inicie o Redis
docker start redisfastfeet
# Inicie o Mongo
docker start mongofastfeet

```

### :floppy_disk: Iniciando com o backend
1. ``cd backend``
2. ``yarn``
3. ``Criar o arquivo .env com base no .env.example``
4. ``yarn sequelize db:migrate``
5. ``yarn sequelize db:seed:all``
6. ``yarn dev``

### 💻 Iniciando com o Front-end 
1. ``cd frontend``
2. ``yarn``
3. ``yarn start``

Existe um usuário administrador padrão: admin@fastfeet.com / 123456

### 📱Iniciando com o Mobile (Apenas Android)
1. ``cd mobile``
2. ``yarn``
3. ``adb reverse tcp:9090 tcp:9090 (Reactotron)``
4. ``adb reverse tcp:3333 tcp:3333``
5. ``react-native start``
6. ``react-native run-android``

### :hammer:  Ferramentas utilizadas
-  :whale: **Docker** - Docker é um software contêiner.
- ⚛️ **ReactJs** - Biblioteca Javascript para criar interfaces de usuário.
- ⚛️ **React Native** - Framework para criar apps nativos usando React.
- 💅 **Styled Components** - Biblioteca Javascript pra estilizar componentes.
- 🔁 **Redux** - Biblioteca JavaScript de código aberto para gerenciar o estado do aplicativo.
- 🔂 **Redux Saga** - Biblioteca Javascript que torna os efeitos colaterais do aplicativo mais faceis de gerenciar.
- 📷 **React-Native-Camera** - Biblioteca React Native para manusear a camera dentro do app mobile. 
---
Feito   by [wslmacieira](https://github.com/wslmacieira) :wave: