# Teste Tecnico Lexart Labs

## Algorithms and Data Structure

### Contexto

Parte dois do teste tecnico da Lexart Labs, dividida em três exercícios. O Primeiro é a criação de um algoritmo que realiza a separação entre números e strings de um array misto e além disso informa o maior dos números informados no array misto. O segundo exercício é pedido para criar uma HashMap(uma estrutura de dados que armazena valor na base CHAVE : VALOR, bem como uma DICT em Python), com funções elementares de Adição, Subtração, Multiplicação e Divisão, desta forma optei por criar a HashMap como uma classe com os métodos definidos segundo as funções elementares pedidas, além disso há dentro dela a opção do usuário acessar a Hash via HashMap.hashDict ou via método get que permite a visualização do valor de uma determinada chave caso ela exista (caso não exista é lançado um erro, no código há também outros lançamentos de erro que julguei necessários). Por fim o terceiro exercício foi pedido que cria-se um algoritmo que gere um ID seguindo padrão XXXX-AAAA-BBBB-CCCC alfanumérico aleatório. Este exercício optei por realizar utilizando Math.random com toString(16) utilizando assim o parâmetro numérico opcional para gerar uma string hexadecimal do número aleatório, em seguida para reduzir o tamanho da string a 4 caracteres por hífen, utilizei a função slice para assim limitar o tamanho.

### Executando exercícios

- Para rodar um dos exercícios:

1. Clone o repositório

```bash
cd Teste-Tecnico-Lexart-Labs-Algorithms/ && code .
```

2. Dentro do VSCODE abrir um dos arquivos .JS

3. Clicar em Run Code ou CTRL+ALT+N
