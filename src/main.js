import Navigo from "navigo";
import HomePage from "./pages/home";
import ProductPage from "./pages/product";
import news from "./pages/news";
import detailNews from "./compaments/detailNews";
const router = new Navigo("/", { linkSelector: "a" });
const print = (content) => {
  document.getElementById("app").innerHTML = content;
};
router.on({
  "/": () => {
    print(HomePage.render());
  },
  "/news": () => {
    print(news.render());
  },
  "/news/:id": (value) => {
    print(detailNews.render(value.data.id));
  },
});
router.notFound(() => print(NotFoundPage));
router.resolve();
