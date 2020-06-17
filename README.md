## :rocket: Sobre o desafio
Simples componente com uma lista de *Repositories* recuperados da *API*, com funcionalidades para adicionar e remover um item da listagem.

### Funcionalidades da aplicação

- **`Listar os repositórios da sua API`**: Deve ser capaz de criar uma lista com o campo **title** de todos os repositórios que estão cadastrados na sua API.

- **`Adicionar um repositório a sua API`**: Deve ser capaz de adicionar um novo item na sua API através de um botão com o texto **Adicionar** e, após a criação, deve ser capaz de exibir o nome dele após o cadastro.

- **`Remover um repositório da sua API`**: Para cada item da sua lista, deve possuir um botão com o texto **Remover** que, ao clicar, irá chamar uma função para remover esse item da lista do seu frontend e da sua API.

### Específicação dos testes

Para esse desafio temos os seguintes testes:

- **`should be able to add new repository`**: Para que esse teste passe, sua aplicação deve permitir que um repositório seja adicionado ao seu backend e listado no seu frontend dentro de uma `LI`.

- **`should be able to remove repository`**: Para que esse teste passe, sua aplicação deve permitir que ao clicar no botão de remover que vai estar dentro da `LI` do repositório adicionado, o item seja removido da listagem.

## :blue_book: Principais conceitos
### Componentização
Dividir blocos da aplicação em componentes, um conjunto isolado de javascript, que podem ser reutilizados.
### Propriedade
Alguma informação que pode ser passada do componente pai para o componente filho.
As propriedades podem ser as *props* ou *children*

As *props* são passadas como parametros e podem ser desestruturadas.
```javascript
//props default
function func(props){}
//props desestruturada
function func({ title, name }){}
```
A *children* é todo o conteúdo que vem dentro do componente
```javascript
<Componente>
    //children
    <h1>Sou a children</h1>
</Componente>
```
### Estado e imutabilidade
Com o *estado* as informações exibidas na tela são atualizadas de acordo com as mudanças de valores das variáveis.

A *imutabilidade* não nos deixa alterar o formato de uma variável, excluir ou adicionar informações de uma maneira direta, precisamos sempre recriar as informações com as alterações necessárias.

## :carousel_horse: Como usar
## Pré requisitos
- API back-end [gostack-conceitos-nodejs](https://github.com/acfabiani/gostack-conceitos-nodejs)
## Iniciando o projeto
- Clone o repositório
- Baixe as dependências
    ```bash
    $ yarn
    ```
- Rode o aplicativo
    ```bash
    $ yarn start
    ```
- Para rodar os testes
    ```bash
    $ yarn test
    ```    
---
Feito com :hearts: by acfabiani :unicorn: