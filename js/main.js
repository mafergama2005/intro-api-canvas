/*******************************************************
 * Programa: Dibujo de un rectángulo usando Canvas
 * Descripción:
 * Este programa utiliza la API Canvas de HTML5 junto
 * con JavaScript para dibujar un rectángulo relleno
 * de color verde dentro de un elemento <canvas>.
 * 
 * El objetivo principal es demostrar el uso básico
 * del contexto gráfico 2D para la creación de gráficos
 * simples en una página web.
 * 
 * Autor: Maria Fernanda Gama Barron
 * Fecha: 16 de febrero de 2026
 *******************************************************/

/*
  Se obtiene el elemento <canvas> del documento HTML
  usando su identificador único "canvas". Este elemento
  representa el área donde se dibujarán los gráficos.
*/
var canvas = document.getElementById("canvas");

/*
  Se ajusta el tamaño del canvas para que ocupe
  el 50% del ancho y el 50% del alto de la pantalla.

  window.innerWidth  -> ancho total de la ventana
  window.innerHeight -> alto total de la ventana
*/
canvas.width  = window.innerWidth * 0.5;
canvas.height = window.innerHeight * 0.5;

/*
  Se obtiene el contexto de dibujo en dos dimensiones (2D).
  El contexto proporciona los métodos necesarios para
  dibujar formas, aplicar colores y renderizar gráficos
  dentro del lienzo.
*/
var ctx = canvas.getContext("2d");

/*
  Se establece el color de relleno que se usará para
  las figuras que se dibujen posteriormente.
*/
ctx.fillStyle = "rgba(255, 0, 0, 0.21)";

/*
  Se dibuja un rectángulo relleno dentro del canvas.

  En este caso, el rectángulo ocupará todo el tamaño
  del canvas, es decir, el 50% del ancho y del alto
  de la pantalla.
*/
ctx.fillRect(0, 0, canvas.width, canvas.height);