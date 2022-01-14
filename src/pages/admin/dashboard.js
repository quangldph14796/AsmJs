import navAdmin from "../../compaments/navAdmin";
const dashBoard = {
  render() {
    return /* html*/ `
    <div class="min-h-full">
      ${navAdmin.render()}
    </div>
    <header class="bg-white shadow">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold text-gray-900">
        Thống Kê
      </h1>
    </div>
  </header>
    `;
  },
};
export default dashBoard;
