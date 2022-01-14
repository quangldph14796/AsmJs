import Navigo from "navigo";
import HomePage from "./pages/home";
import news from "./pages/news";
import detailNews from "./compaments/detailNews";
import signin from "./pages/signin";
import signup from "./pages/signup";
import dashBoard from "./pages/admin/dashboard";
import adminAddNews from "./pages/admin/news/add";
import adminNews from "./pages/admin/news/index";
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
  "/signin": () => {
    print(signin.render());
  },
  "/signup": () => {
    print(signup.render());
  },
  "admin/dashboard": () => print(dashBoard.render()),
  "admin/news/add": () => print(adminAddNews.render()),
  "admin/news": () => print(adminNews.render()),
});
router.notFound(() => print(NotFoundPage));
router.resolve();
