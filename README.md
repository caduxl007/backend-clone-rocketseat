<h1 align="center">backend-clone-rocketseat</h1>
<p align="center">Aplicação desenvolvida com NodeJS, aplicando conceitos SOLID, DDD e TDD.</p>


### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [NodeJs](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [TypeOrm](https://typeorm.io/#/)
- [Jest](https://jestjs.io/) 
- [Docker](https://www.docker.com/)
- [PostgreSql](https://www.postgresql.org/)

 
### 🛠 Solid, DDD e TDD

A aplicação foi desenvolvida aplicando os conceitos SOLID, DDD e TDD.

<h4>O que é SOLID?</h4>

SOLID é um acrônimo criado por Michael Feathers, após observar que cinco princípios da orientação a objetos e design de código — Criados por Robert C. Martin (a.k.a. Uncle Bob) e abordados no artigo The Principles of OOD — poderiam se encaixar nesta palavra.
S.O.L.I.D: Os 5 princípios da POO

S — Single Responsiblity Principle (Princípio da responsabilidade única)

O — Open-Closed Principle (Princípio Aberto-Fechado)

L — Liskov Substitution Principle (Princípio da substituição de Liskov)

I — Interface Segregation Principle (Princípio da Segregação da Interface)

D — Dependency Inversion Principle (Princípio da inversão da dependência)

<br>

<h4>O que é DDD? </h4>


O DDD (Domain-Driven Design) é a abordagem para o desenvolvimento de software que nos permite traduzir domínios de problemas complexos em software rico, expressivo e em evolução. É a maneira como projetamos aplicativos quando as necessidades de nossos usuários são complexas. Nela dividimos a aplicação entre a camada de domínio e a camada de infra.

<br>

<h4>O que é TDD?</h4>


TDD é o Desenvolvimento Orientado por Testes (Test Driven Development). Isso mesmo! Desenvolvemos o nosso software baseado em testes que são escritos antes do nosso código de produção! 
Basicamente o TDD se baseia em pequenos ciclos de repetições, onde para cada funcionalidade do sistema um teste é criado antes. Este novo teste criado inicialmente como uma falha, já que ainda não temos a implementação da funcionalidade e em seguida, implementamos a funcionalidade para fazer o teste passar!

* A aplicação foi desenvolvida com base nos Testes Unitários, que testam partes do código isolado! O [Jest](https://jestjs.io/) foi a tecnologia usada nos testes.
<br>
<br>


<h1>📱 Como usar?</h1>

### Pré-requisitos

Primeiramente, você precisa ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), o instalador de pacotes [Yarn](https://yarnpkg.com/) e o [Docker](https://www.docker.com/). 
E lógico é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando a aplicação

```bash
# Clone este repositório
$ git clone <https://github.com/caduxl007/backend-clone-rocketseat.git>

# Após instalar o docker execute no terminal/cmd
$ docker run --name "nome-que-quiser" -e POSTGRES_PASSWORD=docker -p 5434:5432 -d postgres

# Use qualquer gerenciar de banco de dados e crie uma database no postgres:
$ nome da database: clone_rocketseat
$ port: 5434

# Acesse a pasta do projeto backend no terminal/cmd
$ cd backend-clone-rocketseat

Instale as dependências
$ yarn

# Execute o comando para instalar as tabelas
$ yarn typeorm migration:run

# Execute a aplicação
$ yarn dev:server

## Prontinho você terá acesso a aplicação!!!
```
