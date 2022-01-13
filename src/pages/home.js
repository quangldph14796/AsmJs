import news from "./news";

const HomePage = {
  render() {
    return `
    <div class="banner">
      <img src="./img/imager_106846.jpg" alt="" class="mx-auto" />
    </div>
    <div class="news">
      ${news.render()}
    </div>
    `;
  },
};
export default HomePage;
