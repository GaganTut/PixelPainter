  let pixelPainter = document.querySelector("#pixelPainter");

  let gridContainer = new GridContainer(1000, 1000);
  let grid = new Grid(100, 100, gridContainer.element);
  gridContainer.element.id = "mainGrid";
  let gridFuncs = gridFunctions();

  let colorContainer = new GridContainer(100, 100);
  let colorPal = new ColorPalette(colorContainer.element, "colorDivs");
  colorContainer.element.id = "colorGrid";
  let colorPicker = new ColorPicker();

  document.querySelector("#pixelPainter").appendChild(grid.container);
  document.querySelector("#pixelPainter").appendChild(colorPal.container);

  paletteStyle(".colorDivs");

  gridFuncs.style();

  let clearButton = new ClearButton(document.querySelectorAll(".gridDivs"), "Clear Grid");
  pixelPainter.appendChild(clearButton.element);

  let colorInput = new ColorInput(colorPicker, "Use Color");
  pixelPainter.appendChild(colorInput.element);


  let customPaletteBox = new GridContainer(100, 100);
  let customPalette = new ColorPalette(customPaletteBox.element, "customPal");
  customPaletteBox.element.id = "customGrid";
  document.querySelector("#pixelPainter").appendChild(customPaletteBox.element);
  paletteStyle(".customPal", ["white"]);

  inputColors();
  clearButton.clearGrid();
