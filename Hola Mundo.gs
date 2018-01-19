//Aplicación para probar la extensión de GAS con GitHub
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  // Or DocumentApp or FormApp. -> Creamos el menu con submenu
  ui.createMenu('Actualizar datos')
      .addItem('Empezar ahora!!', 'menuItem1')
      .addItem('Funcion 2', 'menuItem2')
      .addToUi();
}

function menuItem1() {
  //Definimos una variable donde vamos a registrar un input:
  var input = Browser.inputBox("Por favor, introduce tu nombre:");
  //Esta linea muestra un mensaje de hola mundo!! al ejecutar el menuItem1
  Browser.msgBox('Bienvenido a tu primer Script '+input);
  //Añado este nuevo comentario sobre el código desde Github!!!
  //Para usar el log de GAS solo tenemos que hacer CTRL+Enter y añadir esta linea
  Logger.log("Es una prueba de Log");
}

function menuItem2(){
  //Obtenemos en una variable el nombre de la hoja de calculo
  var name = SpreadsheetApp.getActiveSpreadsheet().getName();
  //Mostramos en el log
  Logger.log("Nombre de la hoja de calcula: " + name);
}

function obtenerNombreSigHojaCalculo(){
  var name = SpreadsheetApp.openById("1ppO3n_Zm4o-s9hT0ZGVCE6nPmTUA3ogzCg9AWFq-BVA").getName();
  Logger.log(name);
}