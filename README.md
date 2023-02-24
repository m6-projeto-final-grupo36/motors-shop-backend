# motors-shop-backend

---

## Documentação do projeto

## Tabela de conteúdos

- [motors-shop-backend](#motors-shop-backend)
  - [Documentação do projeto](#documentação-do-projeto)
  - [Tabela de conteúdos](#tabela-de-conteúdos)
  - [1. Descrição do projeto](#1-descrição-do-projeto)
    - [1.1 Diagrama ER](#11-diagrama-er)
    - [1.2 URL base da aplicação](#12-url-base-da-aplicação)
  - [2. Tecnologias utilizadas](#2-tecnologias-utilizadas)
  - [3. Passos de instalação e execução](#3-passos-de-instalação-e-execução)
    - [3.1 Instalando dependências](#31-instalando-dependências)
    - [3.2 Crie um arquivo .env na raiz do projeto](#32-crie-um-arquivo-env-na-raiz-do-projeto)
    - [3.3 Rode as migrations](#33-rode-as-migrations)
    - [3.4 Inicie o servidor localmente](#34-inicie-o-servidor-localmente)
  - [4. Autenticação](#4-autenticação)
  - [5. Endpoints](#5-endpoints)
    - [Índice](#índice)
  - [1. **Users**](#1-users)
    - [Endpoints](#endpoints)
    - [1.1. **Criação de Usuário**](#11-criação-de-usuário)
    - [`/users`](#users)
    - [Exemplo de Request:](#exemplo-de-request)
    - [Corpo da Requisição:](#corpo-da-requisição)
    - [Schema de Validação com Yup:](#schema-de-validação-com-yup)
    - [Exemplo de Response:](#exemplo-de-response)
    - [Possíveis Erros:](#possíveis-erros)
    - [1.2. **Login do usuário**](#12-login-do-usuário)
    - [Exemplo de Request:](#exemplo-de-request-1)
    - [Corpo da Requisição:](#corpo-da-requisição-1)
    - [Exemplo de Response:](#exemplo-de-response-1)
    - [Possíveis Erros:](#possíveis-erros-1)
    - [1.3. **Listando Usuário**](#13-listando-usuário)
    - [`/users`](#users-1)
    - [Exemplo de Request:](#exemplo-de-request-2)
    - [Corpo da Requisição:](#corpo-da-requisição-2)
    - [Exemplo de Response:](#exemplo-de-response-2)
    - [Possíveis Erros:](#possíveis-erros-2)
    - [1.4. **Atualização do usuário**](#14-atualização-do-usuário)
    - [`/users`](#users-2)
    - [Exemplo de Request:](#exemplo-de-request-3)
    - [Corpo da Requisição:](#corpo-da-requisição-3)
    - [Exemplo de Response:](#exemplo-de-response-3)
    - [Possíveis Erros:](#possíveis-erros-3)
    - [1.5 **Delete do usuário**](#15-delete-do-usuário)
    - [`/users`](#users-3)
    - [Exemplo de Request:](#exemplo-de-request-4)
    - [Corpo da Requisição:](#corpo-da-requisição-4)
    - [Exemplo de Response:](#exemplo-de-response-4)
    - [Possíveis Erros:](#possíveis-erros-4)
  - [2. **Announcements**](#2-announcements)
    - [Endpoints](#endpoints-1)
    - [2.1. **Criação de um anúncio**](#21-criação-de-um-anúncio)
    - [`/announcements`](#announcements)
    - [Exemplo de Request:](#exemplo-de-request-5)
    - [Corpo da Requisição:](#corpo-da-requisição-5)
    - [Exemplo de Response:](#exemplo-de-response-5)
    - [Possíveis Erros:](#possíveis-erros-5)
    - [2.2. **Listar todos os anúncios**](#22-listar-todos-os-anúncios)
    - [`/announcements`](#announcements-1)
    - [Exemplo de Request:](#exemplo-de-request-6)
    - [Corpo da Requisição:](#corpo-da-requisição-6)
    - [Exemplo de Response:](#exemplo-de-response-6)
    - [Possíveis Erros:](#possíveis-erros-6)
    - [2.3. **Atualizar dados do anúncio**](#23-atualizar-dados-do-anúncio)
    - [`/announcements`](#announcements-2)
    - [Exemplo de Request:](#exemplo-de-request-7)
    - [Corpo da Requisição:](#corpo-da-requisição-7)
    - [Schema de Validação com Yup:](#schema-de-validação-com-yup-1)
    - [Exemplo de Response:](#exemplo-de-response-7)
    - [Possíveis Erros:](#possíveis-erros-7)
    - [2.4. **Delete do anúncio**](#24-delete-do-anúncio)
    - [`/announcements`](#announcements-3)
    - [Exemplo de Request:](#exemplo-de-request-8)
    - [Corpo da Requisição:](#corpo-da-requisição-8)
    - [Exemplo de Response:](#exemplo-de-response-8)
    - [Possíveis Erros:](#possíveis-erros-8)

---

## 1. Descrição do projeto

[ Voltar para o topo ](#tabela-de-conteúdos)

(Projeto em desenvolvimento) O projeto possui um crud de usuário, que podem criar conta de comprador ou anunciante, onde anunciantes podem conter muitos anúncios associados.

### 1.1 Diagrama ER

Diagrama ER da API definindo bem as relações entre as tabelas do banco de dados.

![DER](src/assets/der.png)

### 1.2 URL base da aplicação

http://localhost:3333

---

## 2. Tecnologias utilizadas

[ Voltar para o topo ](#tabela-de-conteúdos)

- TypeScript
- NodeJs
- Express
- TypeORM
- PostgreSQL
- yup
- cors

---

## 3. Passos de instalação e execução

Certifique que você já criou uma database postgreSQL para o projeto

### 3.1 Instalando dependências

Clone o projeto em sua máquina e instale as dependências no projeto:

```
yarn
```

### 3.2 Crie um arquivo .env na raiz do projeto

Copie o formato do arquivo .env.example para o arquivo .env e preencha as variáveis, exemplo:

```
SECRET_KEY="sua_chave_secreta"
```

Preencha todas as variáveis

### 3.3 Rode as migrations

Crie as tabelas no banco de dados com o comando:

```
yarn typeorm migration:run -d src/data-source.ts
```

### 3.4 Inicie o servidor localmente

```
yarn dev
```

**Após iniciar o servidor localmente você pode testar algumas rotas no link do frontend da aplicação que está logo abaixo:**

[https://contact-book-lac.vercel.app/landingpage](https://contact-book-lac.vercel.app/landingpage)

**Ou testar no Insomnia fazendo o dowload da coleção:**
[Link da coleção](https://drive.google.com/file/d/1LT5LT5xpyszs8MuC09kiUxq31ZPRjoSF/view?usp=sharing)

---

## 4. Autenticação

[ Voltar para o topo ](#tabela-de-conteúdos)

```
Authorization: Bearer token
```

---

## 5. Endpoints

[ Voltar para o topo ](#tabela-de-conteúdos)

### Índice

- [Users](#1-users)
  - [POST - /users](#11-criação-de-usuário)
  - [POST - /login](#12-login-do-usuário)
  - [GET - /users](#13-listando-usuário)
  - [PATCH - /users](#14-atualização-do-usuário)
  - [DELETE - /users](#15-delete-do-usuário)
- [Announcements](#2-announcement)
  - [POST - /announcements](#21-criação-de-um-anúncio)
  - [GET - /announcements](#22-listar-todos-os-anúncios)
  - [PATCH - /announcements/:id](#23-atualizar-dados-do-anúncio)
  - [DELETE - /announcements/:id](#24-delete-do-anúncio)

## 1. **Users**

[ Voltar para os Endpoints ](#5-endpoints)

O objeto User é definido como:

| Campo        | Tipo   | Descrição                                 |
| ------------ | ------ | ----------------------------------------- |
| id           | string | Identificador único do usuário.           |
| first_name   | string | O nome do usuário.                        |
| last_name    | string | O sobrenome do usuário.                   |
| phone_number | string | O número do telefone do usuário.          |
| email        | string | O e-mail do usuário.                      |
| password     | string | A senha de acesso do usuário.             |
| created_at   | date   | Data de cadastro do usuário.              |
| updated_at   | date   | Data de atualização do perfil do usuário. |

### Endpoints

| Método | Rota   | Descrição                  |
| ------ | ------ | -------------------------- |
| POST   | /users | Criação de um usuário.     |
| POST   | /login | Login do usuário.          |
| GET    | /users | Lista o usuário.           |
| PATCH  | /users | Atualiza dados do usuário. |
| DELETE | /users | Delete o usuário.          |

---

### 1.1. **Criação de Usuário**

[ Voltar para os Endpoints ](#5-endpoints)

### `/users`

### Exemplo de Request:

```
POST /users
Host: http://localhost:3333
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "first_name": "José",
  "last_name": "Silva",
  "email": "jose@mail.com",
  "phone_number": "81992456735",
  "password": "1234"
}
```

### Schema de Validação com Yup:

```javascript
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  phone_number: yup.string().required().length(11),
  email: yup
    .string()
    .email()
    .required()
    .transform((value: string, originalValue: string) => {
      return originalValue.toLowerCase();
    }),
  password: yup
    .string()
    .required()
    .transform((value: string, originalValue: string) => {
      return bcrypt.hashSync(originalValue, 10);
    }),
```

OBS.: Chaves não presentes no schema serão removidas.

### Exemplo de Response:

```
201 Created
```

```json
{
  "id": "22f55f79-0a33-4af5-b7fb-f20e41c1ceed",
  "first_name": "José",
  "last_name": "Silva",
  "email": "adm@mail.com",
  "phone_number": "81992456735",
  "created_at": "2022-11-04T16:13:46.493Z",
  "updated_at": "2022-11-04T16:13:46.493Z"
}
```

### Possíveis Erros:

| Código do Erro  | Descrição             |
| --------------- | --------------------- |
| 400 Bad request | Email already exists. |

---

### 1.2. **Login do usuário**

[ Voltar aos Endpoints ](#5-endpoints)

### Exemplo de Request:

```
POST /login
Host: http://localhost:3333
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "email": "jose@mail.com",
  "password": "1234"
}
```

### Exemplo de Response:

```
200 OK
```

```json
[
  {
    "token": "token-de-login"
  }
]
```

### Possíveis Erros:

| Código do Erro  | Descrição                   |
| --------------- | --------------------------- |
| 400 Bad request | email/password is required. |
| 403 forbidden   | Wrong email/password.       |

---

### 1.3. **Listando Usuário**

[ Voltar aos Endpoints ](#5-endpoints)

### `/users`

### Exemplo de Request:

```

GET /users
Host: http://localhost:3333
Authorization: Bearer Token
Content-type: application/json

```

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "id": "22f55f79-0a33-4af5-b7fb-f20e41c1ceed",
  "first_name": "José",
  "last_name": "Silva",
  "email": "adm@mail.com",
  "phone_number": "81992456735",
  "created_at": "2022-11-04T16:13:46.493Z",
  "updated_at": "2022-11-04T16:13:46.493Z"
}
```

### Possíveis Erros:

Nenhum, o máximo que pode acontecer é retornar uma lista vazia.

---

### 1.4. **Atualização do usuário**

[ Voltar aos Endpoints ](#5-endpoints)

### `/users`

```
Pode ser atualizado o first_name, last_name, phone_number, email e password todos de uma vez ou parcialmente.
```

### Exemplo de Request:

```
PATCH /users
Host: http://localhost:3333
Authorization: Bearer token
Content-type: application/json

```

### Corpo da Requisição:

```json
{
  "first_name": "Marcos",
  "last_name": "Silva",
  "email": "marcos@mail.com",
  "password": "12345"
}
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "message": "User updated.",
  "user": {
    "id": "61771037-62c9-4d99-8e24-9d8daf46747f",
    "first_name": "Marcos",
    "last_name": "Silva",
    "email": "marcos@mail.com",
    "phone_number": "81992486026",
    "created_at": "2023-02-05T04:18:36.261Z",
    "updated_at": "2023-02-05T12:16:34.398Z"
  }
}
```

### Possíveis Erros:

| Código do Erro   | Descrição                    |
| ---------------- | ---------------------------- |
| 400 Bad request  | missing authorization token. |
| 400 unauthorized | Email already exists.        |
| 403 forbidden    | Invalid token.               |
| 404 not found    | User not found.              |

---

### 1.5 **Delete do usuário**

[ Voltar aos Endpoints ](#5-endpoints)

### `/users`

### Exemplo de Request:

```

DELETE /users
Host: http://localhost:3333
Authorization: Bearer token
Content-type: application/json

```

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
204 OK
```

```json
Vazio
```

### Possíveis Erros:

| Código do Erro  | Descrição                    |
| --------------- | ---------------------------- |
| 400 Bad request | missing authorization token. |
| 403 forbidden   | Invalid token.               |
| 404 not found   | User not found.              |

---

## 2. **Announcements**

[ Voltar para os Endpoints ](#5-endpoints)

O objeto Announcements é definido como:

| Campo        | Tipo    | Descrição                                                              |
| ------------ | ------- | ---------------------------------------------------------------------- |
| id           | string  | Identificador único do anúncio                                         |
| title        | string  | Título do anúncio                                                      |
| year         | string  | Ano do veículo (4 dígitos)                                             |
| mileage      | string  | Kms rodados                                                            |
| price        | number  | Preço em centavos                                                      |
| description  | string  | Descrição do anúncio                                                   |
| img_cape     | string  | Imagem da capa do anúncio                                              |
| is_active    | boolean | Indica se o anúncio está ativo (default true)                          |
| type_vehicle | string  | Carro ou moto (car, motorcycle) (default car)                          |
| type         | string  | Venda ou leilão (sales, auction) (default sales)                       |
| images       | string  | Imagens do veículo anunciado (Campo não origatório) (máximo 6 imagens) |
| created_at   | date    | Data de cadastro do anúncio                                            |
| updated_at   | date    | Data de atualização do anúncio                                         |

### Endpoints

| Método | Rota               | Descrição               |
| ------ | ------------------ | ----------------------- |
| POST   | /announcements     | Criação de um anúncio   |
| GET    | /announcements     | Lista todos os anúncios |
| PATCH  | /announcements/:id | Atualiza um anúncio     |
| DELETE | /announcements/:id | Deleta o anúncio        |

---

### 2.1. **Criação de um anúncio**

[ Voltar para os Endpoints ](#5-endpoints)

### `/announcements`

### Exemplo de Request:

```
POST /announcements
Host: http://localhost:3333
Authorization: Bearer token
Content-type: application/json
```

Os campos obrigatórios são:

- title
- year
- mileage
- price
- description
- img_cape

### Corpo da Requisição:

```json
{
  "title": "Um carro novo",
  "year": 2021,
  "mileage": 12345,
  "price": 1265438972,
  "description": "O carro está perfeito",
  "img_cape": "link_da_imagem",
  "images": ["link_1", "link_2"],
  "is_active": false,
  "type": "sales",
  "type_vehicle": "car"
}
```

### Exemplo de Response:

```
201 Created
```

```json
{
  "title": "Um carro novo",
  "year": "2021",
  "mileage": "12345",
  "price": 1265438972,
  "description": "O carro está perfeito",
  "img_cape": "link_da_imagem",
  "type_vehicle": "car",
  "type": "sales",
  "is_active": false,
  "id": "2cf7e3ba-cb72-4b02-a699-6bb0e62ea0ea",
  "created_at": "2023-02-24T00:40:08.954Z",
  "updated_at": "2023-02-24T00:40:08.954Z",
  "images": ["link_1", "link_2"]
}
```

### Possíveis Erros:

| Código do Erro  | Descrição                    |
| --------------- | ---------------------------- |
| 400 Bad request | missing authorization token. |
| 400 Bad request | Maximum 6 images.            |
| 404 Bad request | User not found.              |
| 403 forbidden   | Invalid token.               |

---

### 2.2. **Listar todos os anúncios**

[ Voltar para os Endpoints ](#5-endpoints)

### `/announcements`

### Exemplo de Request:

```
GET /announcements
Host: http://localhost:3333
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 Ok
```

```json
[
  {
    "id": "2cf7e3ba-cb72-4b02-a699-6bb0e62ea0ea",
    "title": "Um ótimo carro",
    "year": "2000",
    "mileage": "12345",
    "price": 1265438972,
    "description": "O carro está perfeito",
    "img_cape": "link_da_imagem",
    "is_active": false,
    "type_vehicle": "car",
    "type": "sales",
    "created_at": "2023-02-24T00:40:08.954Z",
    "updated_at": "2023-02-24T00:41:32.031Z"
  }
]
```

### Possíveis Erros:

Nenhum, o máximo que pode acontecer é retornar uma lista vazia.

---

### 2.3. **Atualizar dados do anúncio**

[ Voltar para os Endpoints ](#5-endpoints)

### `/announcements`

```
Pode ser atualizado o todos campos podem ser atualizados de uma vez ou parcialmente.
```

### Exemplo de Request:

```
PATCH /announcements/:id
Host: http://localhost:3333
Authorization: Bearer token
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "title": "Um carro em ótimo estado",
  "images": ["link_1", "link_2", "link3", "link4", "link5", "link6"]
}
```

### Schema de Validação com Yup:

```javascript
    title: string().notRequired(),
    year: string().notRequired().max(4),
    mileage: string().notRequired(),
    price: number().notRequired(),
    description: string().notRequired(),
    img_cape: string().notRequired(),
    type_vehicle: mixed().notRequired().oneOf(["car", "motorcycle"]),
    type: mixed().notRequired().oneOf(["sales", "auction"]),
    images: array().notRequired(),
    is_active: boolean().notRequired(),
```

OBS.: Chaves não presentes no schema serão removidas.

### Exemplo de Response:

```
200 Ok
```

```json
{
  "id": "2cf7e3ba-cb72-4b02-a699-6bb0e62ea0ea",
  "title": "Um carro em ótimo estado",
  "year": "2000",
  "mileage": "12345",
  "price": 1265438972,
  "description": "O carro está perfeito",
  "img_cape": "link_da_imagem",
  "is_active": false,
  "type_vehicle": "car",
  "type": "sales",
  "created_at": "2023-02-24T00:40:08.954Z",
  "updated_at": "2023-02-24T00:48:54.534Z",
  "images": ["link_1", "link_2", "link3", "link4", "link5", "link6"]
}
```

### Possíveis Erros:

| Código do Erro  | Descrição                    |
| --------------- | ---------------------------- |
| 400 Bad request | Missing authorization token. |
| 400 Bad request | Maximum 6 images.            |
| 403 forbidden   | Invalid token.               |
| 404 not found   | Invalid UUID                 |
| 404 not found   | Announcement not found.      |

---

### 2.4. **Delete do anúncio**

[ Voltar aos Endpoints ](#5-endpoints)

### `/announcements`

### Exemplo de Request:

```

DELETE /announcements/:id
Host: http://localhost:3333
Authorization: Bearer token
Content-type: application/json

```

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
204 OK
```

```json
Vazio
```

### Possíveis Erros:

| Código do Erro  | Descrição                    |
| --------------- | ---------------------------- |
| 400 Bad request | Missing authorization token. |
| 400 Bad request | Invalid UUID                 |
| 403 forbidden   | Invalid token.               |
| 404 not found   | Announcement not found.      |

---
