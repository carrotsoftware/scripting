// Docsify configuration
window.$docsify = {
    
    // Title
    title: 'Carrot Scripting Guide',

    // Sidebar (default docsify function)
    loadSidebar: true, 
    subMaxLevel: 4,
    auto2top: true,

    // Logo in Sidebar
    name: '<span>Carrot Scripts</span>',
    logo: '/assets/icons/carrot-scripts-logo.svg',

    // Navbar (default docsify function)
    loadNavbar: '_navbar.md',

    // Full text search
    search: {
        paths: 'auto',
        placeholder: 'Нужное ищем здесь',
        noData: 'Ничего не найдено, измени запрос!',
        pathNamespaces: true,
    },

    scrollToTop: {
        auto: true,
        text: '',
        right: 15,
        bottom: 15,
        offset: 200,
    },

};

window.$docsify = window.$docsify || {};
window.$docsify.plugins = (window.$docsify.plugins || []).concat(function (hook) {
    hook.doneEach(function () {
        document.title = 'Carrot Scripting Guide';
        });
    });