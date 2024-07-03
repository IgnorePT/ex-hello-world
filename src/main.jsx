import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Cria os teus elementos usando React.createElement

const Cubo = React.createElement("div", {
	className: "cubo",
});

const Title = React.createElement(
	"h2",
	{
		className: "titulo",
	},
	"Hello Edit!"
);

const mainContainer = React.createElement(
	"div",
	{
		class: "main-container",
	},
	Title,
	Cubo,
	Cubo,
	Cubo,
	Cubo,
	Cubo,
	Cubo
);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(mainContainer);
