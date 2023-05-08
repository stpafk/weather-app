(()=>{"use strict";var __webpack_modules__={425:()=>{eval('\n;// CONCATENATED MODULE: ./src/createPage.js\nfunction landingPage() {\n  var content = document.querySelector("#content");\n  var nav = document.createElement(\'nav\');\n  nav.classList = "nav-bar";\n  var navH1 = document.createElement(\'h1\');\n  navH1.classList = "nav-bar title";\n  navH1.innerHTML = "Weather App";\n  nav.appendChild(navH1);\n  var main = document.createElement(\'main\');\n  var mainContainer = document.createElement(\'div\');\n  mainContainer.classList = "weather-container";\n  main.appendChild(mainContainer);\n  var innerContainer = document.createElement(\'div\');\n  innerContainer.classList = "inner-container";\n  mainContainer.appendChild(innerContainer);\n  var inputCity = document.createElement("input");\n  inputCity.type = "text";\n  inputCity.classList = "input-city";\n  inputCity.placeholder = "Which city?";\n  innerContainer.appendChild(inputCity);\n  var divSearch = document.createElement("div");\n  divSearch.classList = "search";\n  divSearch.style = "cursor: pointer";\n  divSearch.innerHTML = "";\n  innerContainer.appendChild(divSearch);\n\n  // add more features, for now keep only temperature and city\n\n  var displayCondition = document.createElement(\'p\');\n  displayCondition.classList = "condition";\n  innerContainer.appendChild(displayCondition);\n  var displayCity = document.createElement(\'h1\');\n  displayCity.classList = "city-name";\n  innerContainer.appendChild(displayCity);\n  var divDisplayTemperature = document.createElement(\'div\');\n  divDisplayTemperature.classList = "temperature-div";\n  innerContainer.appendChild(divDisplayTemperature);\n  var temperature = document.createElement(\'h1\');\n  temperature.classList = "temperature-display";\n  divDisplayTemperature.appendChild(temperature);\n  var footer = document.createElement(\'footer\');\n  content.appendChild(nav);\n  content.appendChild(main);\n  content.appendChild(footer);\n  return content;\n}\n/* harmony default export */ const createPage = (landingPage);\n;// CONCATENATED MODULE: ./src/index.js\n\ndocument.appendChild(createPage());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGlEQUFlRCxXQUFXLEU7O0FDdEVZO0FBSXRDRSxRQUFRLENBQUNPLFdBQVcsQ0FBQ1QsVUFBVyxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NyZWF0ZVBhZ2UuanM/ZjVkZiIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5mdW5jdGlvbiBsYW5kaW5nUGFnZSgpIHtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICBuYXYuY2xhc3NMaXN0ID0gXCJuYXYtYmFyXCI7XG5cbiAgICBjb25zdCBuYXZIMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgbmF2SDEuY2xhc3NMaXN0ID0gXCJuYXYtYmFyIHRpdGxlXCI7XG4gICAgbmF2SDEuaW5uZXJIVE1MID0gXCJXZWF0aGVyIEFwcFwiO1xuICAgIG5hdi5hcHBlbmRDaGlsZChuYXZIMSk7XG5cbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuXG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5Db250YWluZXIuY2xhc3NMaXN0ID0gXCJ3ZWF0aGVyLWNvbnRhaW5lclwiO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQobWFpbkNvbnRhaW5lcik7XG5cbiAgICBjb25zdCBpbm5lckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGlubmVyQ29udGFpbmVyLmNsYXNzTGlzdCA9IFwiaW5uZXItY29udGFpbmVyXCI7XG4gICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChpbm5lckNvbnRhaW5lcik7XG5cbiAgICBjb25zdCBpbnB1dENpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXRDaXR5LnR5cGUgPSBcInRleHRcIjtcbiAgICBpbnB1dENpdHkuY2xhc3NMaXN0ID0gXCJpbnB1dC1jaXR5XCI7XG4gICAgaW5wdXRDaXR5LnBsYWNlaG9sZGVyID0gXCJXaGljaCBjaXR5P1wiXG5cbiAgICBpbm5lckNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dENpdHkpO1xuXG4gICAgY29uc3QgZGl2U2VhcmNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZTZWFyY2guY2xhc3NMaXN0ID0gXCJzZWFyY2hcIjtcbiAgICBkaXZTZWFyY2guc3R5bGUgPSBcImN1cnNvcjogcG9pbnRlclwiO1xuICAgIGRpdlNlYXJjaC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgaW5uZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2U2VhcmNoKTtcblxuICAgIC8vIGFkZCBtb3JlIGZlYXR1cmVzLCBmb3Igbm93IGtlZXAgb25seSB0ZW1wZXJhdHVyZSBhbmQgY2l0eVxuXG4gICAgY29uc3QgZGlzcGxheUNvbmRpdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBkaXNwbGF5Q29uZGl0aW9uLmNsYXNzTGlzdCA9IFwiY29uZGl0aW9uXCI7XG4gICAgXG4gICAgaW5uZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZGlzcGxheUNvbmRpdGlvbik7XG5cbiAgICBjb25zdCBkaXNwbGF5Q2l0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgZGlzcGxheUNpdHkuY2xhc3NMaXN0ID0gXCJjaXR5LW5hbWVcIjtcblxuICAgIGlubmVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpc3BsYXlDaXR5KTtcblxuICAgIGNvbnN0IGRpdkRpc3BsYXlUZW1wZXJhdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdkRpc3BsYXlUZW1wZXJhdHVyZS5jbGFzc0xpc3QgPSBcInRlbXBlcmF0dXJlLWRpdlwiO1xuXG4gICAgaW5uZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2RGlzcGxheVRlbXBlcmF0dXJlKTtcblxuICAgIGNvbnN0IHRlbXBlcmF0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICB0ZW1wZXJhdHVyZS5jbGFzc0xpc3QgPSBcInRlbXBlcmF0dXJlLWRpc3BsYXlcIjtcblxuICAgIGRpdkRpc3BsYXlUZW1wZXJhdHVyZS5hcHBlbmRDaGlsZCh0ZW1wZXJhdHVyZSk7XG5cbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmF2KTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcblxuICAgIHJldHVybiBjb250ZW50XG4gICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IGxhbmRpbmdQYWdlOyIsImltcG9ydCBsYW5kaW5nUGFnZSBmcm9tIFwiLi9jcmVhdGVQYWdlXCJcblxuXG5cbmRvY3VtZW50LmFwcGVuZENoaWxkKGxhbmRpbmdQYWdlKCkpIl0sIm5hbWVzIjpbImxhbmRpbmdQYWdlIiwiY29udGVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm5hdiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJuYXZIMSIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwibWFpbiIsIm1haW5Db250YWluZXIiLCJpbm5lckNvbnRhaW5lciIsImlucHV0Q2l0eSIsInR5cGUiLCJwbGFjZWhvbGRlciIsImRpdlNlYXJjaCIsInN0eWxlIiwiZGlzcGxheUNvbmRpdGlvbiIsImRpc3BsYXlDaXR5IiwiZGl2RGlzcGxheVRlbXBlcmF0dXJlIiwidGVtcGVyYXR1cmUiLCJmb290ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///425\n')}},__webpack_exports__={};__webpack_modules__[425]()})();