import Navigo from "navigo";
import HomePage from "./HP";
import AboutPage from "./AP";
import ProductPage from "./PD.js"
const router = new Navigo("/", { linkSelector: "a" });
const print = (content) => {
  document.getElementById("app").innerHTML = content();
};
router.on({
  "/": () => {
    print(HomePage.render());
  },
  "/about": () => {
    print(AboutPage.render());
  },
  "/product": () => {
    print(ProductPage.render());
  },
});
router.notFound(("") = print(NotFoundPage));
router.resolve();
// <!-- <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <link rel="icon" type="image/svg+xml" href="favicon.svg" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Vite App</title>
//     <link rel="stylesheet" href="./style.css" />
//   </head>

//   <body>
//     <a href="/">Home Page</a>
//     <a href="/about">About </a>
//     <a href="/product">Product </a>
//     <ul id="menu"></ul>
//     <div id="app"></div>
//     <script type="module" src="./src/main.js"></script>
//   </body>
// </html> -->
