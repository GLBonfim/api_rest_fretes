# Sistema de Frete Magalu

API robusta para cálculo de frete e rastreamento de pedidos, pronta para integração com a plataforma Magazine Luiza (Magalu).

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
$ git clone https://github.com/GLBonfim/seu-repo-aqui.git
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