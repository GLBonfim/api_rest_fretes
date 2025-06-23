# API e Dashboard de Teste

API robusta para cálculo de frete e rastreamento de pedidos, pronta para integração com a plataforma.

---

## 👤 Autor
[Guilherme Bonfim](https://github.com/GLBonfim)

- 💡 Estudante de desenvolvimento Java focado em backend
- 📚 Atualmente aprendendo Java, Spring Boot e Bancos de Dados
- 💼 Buscando primeira oportunidade como Desenvolvedor Java Júnior

---

## 🚀 Tecnologias & Ferramentas
- Node.js
- Express
- SQLite
- Joi (validação)
- Swagger (documentação)
- Morgan (logs)

---

## 📦 Instalação

```bash
# Clone o repositório
$ git clone https://github.com/GLBonfim/api_rest_fretes.git
$ cd testes

# Instale as dependências
$ npm install
```

---

## ⚙️ Configuração

Crie um arquivo `.env` com base no exemplo abaixo:
```bash
cp .env.example .env
```

---

## ▶️ Executando o servidor

```bash
node index.js
```
O servidor estará disponível em: [http://localhost:3000](http://localhost:3000)

---

## 🧪 Testando a API

Utilize o Postman, Insomnia ou Swagger UI para testar os endpoints:
- Documentação interativa: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

### Endpoints principais
- `POST /api/v1/frete/calcular` — Calcula opções de frete
- `POST /api/v1/rastreamento` — Cria código de rastreamento
- `GET /api/v1/rastreamento/:codigo` — Consulta status
- `PATCH /api/v1/rastreamento/:codigo` — Atualiza status

Veja exemplos de uso na documentação Swagger.

---

## 📘 Aprendizado e Objetivos
- Praticar integração de APIs RESTful
- Aplicar validação, versionamento e documentação
- Preparar para integrações reais com grandes plataformas

---

## 📫 Contato
- [GitHub](https://github.com/GLBonfim)
- [LinkedIn](https://linkedin.com/in/glbonfim)
- [Instagram](https://instagram.com/onloreto13)

---

## Objetivo

Este projeto tem como objetivo principal **testar e demonstrar uma API REST de fretes** (Node.js/Express + SQLite) integrada a um frontend moderno (HTML/CSS/JS). O sistema simula o cálculo de frete, rastreamento de pedidos e oferece um dashboard administrativo para gestão dos pedidos.

## Funcionalidades
- Simulação de cálculo de frete (mock)
- Criação automática de rastreamento após pagamento
- Consulta de rastreamento por código/ID
- Dashboard administrativo protegido por login
- Atualização e exclusão de pedidos diretamente pelo dashboard
- Visual moderno, responsivo e fácil de usar

## Como usar
1. Instale as dependências com `npm install`
2. Inicie o backend com `node index.js`
3. Acesse `index.html` pelo navegador para usar o frontend
4. Use o dashboard para gerenciar pedidos (login: admin / senha: 1234)

## Observações
- O fluxo de criação de pedidos/rastreamentos é totalmente automatizado após o pagamento simulado.
- O projeto é ideal para testes, demonstrações e aprendizado sobre APIs REST de frete.

---

Desenvolvido para fins de teste e demonstração.
