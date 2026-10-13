# Estudos

**Dia 23:**
Rodar o comando `run npm test:watch -- migrations.post` roda os testes só no código que eu quero testar na sessão atual

Estratégia do banco sujo e transactions
https://calpaterson.com/against-database-teardown.html
https://news.ycombinator.com/item?id=29764792

**Dia 24:**
Desafio 1
Provar que o jest está rodando no ambiente de teste e que não está pegando as variáveis de development
fez uma query no get test e deu erro no ssl. Alteramos pra só usar ssl em production. Os demais ficam sem ssl. Pra acessar certinho, fizemos um console.log nas variáveis que declaramos que retornaram undefined. Por fim, pra dar 100% certo, colocamos um dir no jest config

Desafio 2
Carregar as variáveis de development no jest
precisamos importar o dotenv e fazer ele apontar pro arquivo env.development

refatoração do migrations pra aglutinar as configurações em uma variável e aprimoramos o post.test pra rodar duas vezes e ser fidedigno. Ele faz uma requisição e depois outra. Assim, uma retorna uma migração pendente e a outra retorna vazio, pois já não está mais pendente.
