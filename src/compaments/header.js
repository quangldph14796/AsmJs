const header = {
  render() {
    return /* html*/ `
        <div class="header mx-full">
        <div class="py-4 bg-blue-900 aspect">
          <a href="">
            <img src="../img/IMG_3701.JPG" alt="" class="mx-auto h-200 w-32" />
          </a>
        </div>
        <div class="bg-yellow-600 aspect flex flex-row">
          <div class="header-menu flex-1/2">
            <ul class="flex">
              <li
                class="inline-block text-white hover:bg-blue-900 aspect px-4 py-3"
              >
                <a href="/">Trang chủ</a>
              </li>
              <li
                class="inline-block text-white hover:bg-blue-900 aspect px-4 py-3"
              >
                <a href="/news">Tin tức</a>
              </li>
              <li
                class="inline-block text-white hover:bg-blue-900 aspect px-4 py-3"
              >
                <a href="/signin">Đăng Nhập</a>
              </li>
              <li
                class="inline-block text-white hover:bg-blue-900 aspect px-4 py-3"
              >
                <a href="/signup">Đăng Kí</a>
              </li>
            </ul>
          </div>
          <div class="header-search mx-auto">
            <input type="text" name="" id="" />
            <button type="button" class="text-white aspect px-4 py-3 flex:left">
              Search
            </button>
          </div>
        </div>
      </div>
        `;
  },
};
export default header;
