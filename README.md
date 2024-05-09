Projeto desenvolvido como uma das etapas de aprendizado na disciplina de Mobile com intuito de construir do zero uma API utilizando as tecnologias Node.js e MongoDB

# 🎯  Projeto BackEnd - API com Node.js e MongoDB

## 📄 Descrição do Projeto
Projeto desenvolvido como uma das etapas de aprendizado na disciplina de Mobile com intuito de construir do zero miha primeira API utilizando as tecnologias Node.js e MongoDB. O sistema consiste em uma API para um aplicativo PWA de To Do List.

## 📖 Especificações Técnicas
- `Pasta model` - contém as estruturas dos documentos que serão armazenados no MongoDB. Eles encapsulam a lógica de dados da aplicação e são utilizados para interagir com o banco de dados por meio do Mongoose, facilitando operações como inserção, atualização e consulta de dados de acordo com a estrutura definida nos modelos.
    - `List.js` - este arquivo define o modelo List que representa a estrutura dos documentos armazenados na coleção list do MongoDB. O modelo possui um campo task, que representa a tarefa a ser armazenada.
    - `User.js` - este arquivo define o modelo User que possui os campos name, telephone, cpf, email e password, cada um com suas configurações de tipo e validações. Corresponde aos requisitos para cadastro de um usuário.
- `Pasta routes` - contém arquivos que definem as rotas da aplicação, ou seja, endpoints que podem ser acessados pelos clientes 
    - `user.route.js` - define rotas para manipular operações relacionadas aos usuários (User).
        - POST `/add`: Esta rota permite adicionar um novo usuário ao sistema. Ela espera um JSON contendo os detalhes do usuário no corpo da solicitação (req.body). Após salvar o novo usuário no banco de dados, retorna uma resposta com sucesso (status: 200) ou falha (status: 409).
        - GET `/`: Esta rota retorna todos os usuários existentes no banco de dados.
        - GET `/:id`: Esta rota retorna um usuário específico com base no ID fornecido na URL.
        - PUT `/update/`:id: Esta rota atualiza um usuário existente com o ID fornecido na URL. Ela espera os novos detalhes do usuário no corpo da solicitação e, após a atualização bem-sucedida, retorna uma resposta com sucesso (status: 200).
        - DELETE `/delete/:id`: Esta rota exclui um usuário com base no ID fornecido na URL.
    - `list.route.js` - define rotas para manipular operações relacionadas às listas de tarefas (List).
        - POST `/add`: Esta rota permite adicionar uma nova tarefa à lista. Ela espera um JSON contendo os detalhes da tarefa no corpo da solicitação (req.body). Após salvar a nova tarefa no banco de dados, retorna uma resposta com sucesso (status: 200) ou falha (status: 409).
        - GET `/`: Esta rota retorna todas as tarefas da lista existentes no banco de dados.
        - GET `/:id`: Esta rota retorna uma tarefa específica da lista com base no ID fornecido na URL.
        - PUT `/update/:id`: Esta rota atualiza uma tarefa existente com o ID fornecido na URL. Ela espera os novos detalhes da tarefa no corpo da solicitação e, após a atualização bem-sucedida, retorna uma resposta com sucesso (status: 200).
        - DELETE `/delete/:id`: Esta rota exclui uma tarefa da lista com base no ID fornecido na URL.
    - `Pasta postman` - contém capturas de tela dos testes de totas realizados para usuários e tarefas.

## 📦 Pacotes Utilizados
Os pacotes abaixo são do Node.js:
- `Express` -> é um framework web que fornece uma camada fina de recursos essenciais para aplicativos web e APIs. Facilitar a criação de servidores HTTP robustos e eficientes em Node.js, simplificando o gerenciamento de rotas, middlewares e requisições HTTP
- `Mongoose` -> biblioteca ODM (Object Data Modeling) que facilita a interação com o MongoDB, permitindo definir esquemas de dados e realizar operações de banco de dados de forma mais simples.
- `Body-parser` -> é um pacote Node.js que analisa o corpo das solicitações HTTP e disponibiliza os dados analisados no objeto req.body nas rotas do Express.
- `Cors` -> pacote Node.js que lida com a política de mesma origem (CORS - Cross-Origin Resource Sharing) para permitir ou bloquear solicitações HTTP de diferentes origens.
- `Nodemon` -> ferramenta que automatiza o processo de reinicialização do servidor sempre que detecta alterações nos arquivos do projeto

## 💻 Tecnologias Utilizadas

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)

![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)

![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
