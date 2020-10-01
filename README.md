# filme-react

# Para rodar a aplicação em seu ambiente é necessario realizar o seguinte passos:
 - abrir o console > digitar npm install ou yarn install
 - Digitar yarn start ou npm start
 
# instação de desenvolvimento:
  - Caso não tem o ambiente de desenvolvimento e necessario seguir esse passo: https://www.devmedia.com.br/como-instalar-o-node-js-npm-e-o-react-no-windows/40329
  
# Premisa de projeto:
 - O Desenvilvimento do software foi em React + redux, com o tempo estimado de quadro 4 dias com requisitos de um layout simples e com os seguintes requisitos:
     
   - Filtro de busca de filmes por Nome (obrigatório) e Ano (opcional).
   - Lista   com   os   10   primeiros   filmes   retornados   na   pesquisa   (não   é   necessário   terpaginação).
   - Esta  lista  deve  ter  o  poster  do  filme,  o  título  e  a  média  de  todos  os  ratingsdele;
   - Função de ordenação do resultado por ordem alfabética (crescente ou decrescente) ounota média (crescente ou decrescente);
   - Tela com informações detalhadas do film
   - Teste unitario (Jest)
   - Uma boa estrutura de projeto
   - Integração de API
   
# Decisões de projeto
  - Foi derteminado o foco maior na estrutura do projeto e nas funções tais como (ordenaçãoPorNome, buca de livro por nome e ano implementação do redux com as funcionalidade do hooks), devido alguns contra-tempos ocorrido no projeto não foi possivel realizar o teste unitario por demandar um pouco mais de tempo para está estudando para entrega de uma melhor maneira, assim focamos entregar na minima funcionalidade solicita para a realização do projeto. 
  - Uma decisão importante foi não adicionar o type="movie" nas buscas de API devido que o servidor está retorno o erro 500 com esse paramentro, essa foi uma decisão dificil que pode mudar complemente os requisitos do projeto.
  
