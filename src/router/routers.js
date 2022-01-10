let routes = [];
const routerContext = require.context("./model", true, /\.js$/)
routerContext.keys().forEach(route => {
    if (route.startsWith("./index")) return;
    const routerModule = routerContext(route);
    // 兼容 import export 和 require module.export 两种规范 Es modules commonjs
    routes = [...routes, ...(routerModule.default || routerModule)];
})

export default routes