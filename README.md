# Exercicio - Hello World

Replica a seguinte estrutura utilizando os metodos de React & ReactDOM (`createElement`, `createRoot`) em javascript para que seja representada na página:

```HTML
<div class="main-container">
    <h2 class="titulo">Hello Edit!</h2>
    <div class="cubo"></div>
    <div class="cubo"></div>
    <div class="cubo"></div>
    <div class="cubo"></div>
    <div class="cubo"></div>
    <div class="cubo"></div>
</div>
```

### Exemplo de criação:

```js
const button = React.createElement(
	"button",
	{
		class: "btn",
	},
	"Click this Button"
);

const elemento = React.createElement(
	"h1",
	{
		id: "cenas",
		title: "Cenas maradas",
	},
	"Conteudo do H1"
);

const div = React.createElement("div", null, elemento, button);

ReactDOM.createRoot(document.getElementById("root")).render(div);
```
