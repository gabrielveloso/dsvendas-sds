# DS VENDAS
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/gabrielveloso/dsvendas-sds/blob/main/LICENSE) 

<p align="center">
 <a href="#about-the-project">About</a> •
 <a href="#layout-web">Layout web</a> • 
 <a href="#modelo-conceitual">Modelo conceitual</a> • 
 <a href="#tecnologias-utilizadas">Tecnologias utilizadas</a> •
 <a href="#autor">Autor</a>
</p>

# About the project

https://dsvendas-gabriel.netlify.app/

DS Vendas é uma aplicação full stack web construída durante a 3ª edição da **Semana DevSuperior** (#sds3), evento organizado pela [DevSuperior](https://devsuperior.com "Site da DevSuperior").

A aplicação consiste em um aplicativo de delivery com tela de pedidos pelos cliente e aplicativo mobile para o entregador

## Layout web
![Web 1](https://github.com/gabrielveloso/dsvendas-sds/blob/main/screen.png)

## Modelo conceitual
![Modelo Conceitual](https://github.com/gabrielveloso/dsvendas-sds/blob/main/mc.png)

# Tecnologias utilizadas
## Back end
- Java
- Spring Boot
- JPA / Hibernate
- JPQL
- Maven
#### Endpoints backend
    * Heroku: https://gabriel-sdsvendas.herokuapp.com/
    - /sales (Pageable)
    - /sales/amount-by-seller (JPQL)
    - /sales/success-by-seller (JPQL)
    - /sellers (Pageable)


## Front end
- HTML / CSS / JS / TypeScript
- ReactJS
- libs: 
    - react-apexcharts (Graphics)
    - react-router-dom
    - @types/react-router-dom
    - axios (to make http request)
    - date-fns (to format date)
## Implantação em produção
- Back end: Heroku
    - Command used: <br> 
    <i>heroku login</i> <br>
    <i>git subtree --prefix backend heroku main</i>
- Front end web: Netlify
- Banco de dados: Postgresql

# Como executar o projeto

## Back end
Pré-requisitos: Java 11

```bash
# clonar repositório
git clone https://github.com/gabrielveloso/dsvendas-sds

# entrar na pasta do projeto back end
cd backend

# executar o projeto
./mvnw spring-boot:run
```

## Front end web
Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone https://github.com/gabrielveloso/dsvendas-sds

# entrar na pasta do projeto front end web
cd frontend

# instalar dependências
npm  install

# executar o projeto
npm start
```

# Autor

Gabriel Veloso

https://www.linkedin.com/in/gabriel-azuirson/