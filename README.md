## Desafio - Frontend.

O desafio consiste em criar uma pequena aplicação web, seguindo os itens abaixo:

* Usar React JS.
* Consumir dados de uma API.
* Utilizar Internacionalização. (Adicionar algum botão para que possa alterar a linguagem).
* Utilizar tematização. (Adicionar algum botão para que possa escolher o tema: 
Dark ou Ligth).
* Layout/apresentação visual.
* Cuidados na estrutura da tela.
* Organização e clareza do código.
* Criar uma tela de login
   1. Somente usuário logado poder acessar a Main page.
   2. Não é necessário validar credênciais, pode utilizar login fixo.


Requisitos:
- git 2.20.1
- node v10.15.2
- yarn 1.21.1

Para executar o aplicativo localmente:

```bash
$ git clone https://github.com/engmsilva/DesafioReactEncontact.git
$ cd DesafioReactEncontact
$ yarn install
$ yarn start
$ open http://localhost:3000
```
Credenciais:

```bash
e-mail: admin@pantheon.com
senha: 12345678
```

Para executar a versão minificada do aplicativo localmente:

Instalação do servidor Node

```bash
$ yarn global add serve
```
Exportar caminho de instalação do servidor para variável de ambiente do sistema operacional.

```bash
$ export PATH="$PATH:$(yarn global bin)" // exemplo usado no Ubuntu
```
Execute o servidor

```bash
$ serve -s build
$ open http://localhost:5000
```
