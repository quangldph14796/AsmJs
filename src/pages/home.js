import news from "./news";
const HomePage = {
  render() {
    return `
    <main>
        <div class="banner mx-auto">
          <img src="./img/thumb-1920-1151373.png" alt="" class="mx-auto" />
        </div>
        <div class="news">
          ${news.render()}
        </div>
    </main>
    <div class="footer mt-4">
        <div class="h-20 w-100 bg-blue-900 aspect">
          <p class="text-white text-2xl text-center pt-5">Lê Duy Quang</p>
        </div>
    </div>
    `;
  },
};
export default HomePage;
