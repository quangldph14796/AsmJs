const navAdmin = {
  render() {
    return /*html*/ `
          <div class="min-h-full">
          <nav class="bg-gray-800">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="flex items-center justify-between h-16">  
                <div class="flex items-center">
                  <div class="flex-shrink-0">
                    <img class="h-8 w-8" src="../../../img/IMG_3701.JPG" alt="Workflow">
                  </div>
                  <div class="hidden md:block">
                    <div class="ml-10 flex items-baseline space-x-4">
                      <a href="/admin/dashboard" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Thống Kê</a>
                      <a href="/admin/news" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Tin Tức</a>
                      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sản Phẩm</a>
                      <a href="/" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Trang Chủ</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
          `;
  },
};
export default navAdmin;
