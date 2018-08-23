var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change', cambiarColor);
  function cambiarColor(e) {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    $(this).css('background-color');
    $("#indicador-de-color").css("background-color", colorActual);



  };
//  FUNCIONES EJECUTABLES


// Guia 1
// Paso 1
var varPaleta = document.getElementById("paleta");
var varGrilla = document.getElementById("grilla-pixeles");

// Paso 2 creacion de paleta

function  nombresDeColores (){
  for (var i = 0; i < nombreColores.length; i++){
    var newList = document.createElement('div');
    newList.className = 'color-paleta';
    newList.style.backgroundColor = nombreColores[i];
    paleta.appendChild(newList);
  }
}
nombresDeColores();

// Paso 3 creacion de grilla

function grillaPixel(){
  for (var i  =0;  i < 1751;  i++){
    var newGrilla = document.createElement('div');
    varGrilla.appendChild(newGrilla);
  }
}
grillaPixel();

// Guia 2
// Paso 1 indicador colores

  $('.color-paleta').click(function(){
    var $indColor = $(this).css('background-color');
    $("#indicador-de-color").css("background-color", $indColor);
   });

  // Paso 2

varGrilla.addEventListener('mousedown', pintar);
varGrilla.addEventListener('mousemove', pintarMoviendo);

 var apretado = false;
  $(document).mousedown(function() {
      apretado = true;
  }).mouseup(function() {
      apretado = false;
  });

function pintar(e){
  e.target.style.backgroundColor = $("#indicador-de-color").css("background-color");
};

function pintarMoviendo(e){
  if(apretado){
    pintar(e);
  };
};

// Boton borrar

$('#borrar').click(function(){
  $("#grilla-pixeles div").animate({"background-color": "#ffff"}, 1300);
 });

$('#guardar').click(function(){
  guardarPixelArt();
});

$('#batman').click(function(){
  cargarSuperheroe(batman);
});
$('#wonder').click(function(){
  cargarSuperheroe(wonder);
});

$('#flash').click(function(){
  cargarSuperheroe(flash);
});

$('#invisible').click(function(){
  cargarSuperheroe(invisible);
});
