import children from './routers'
//一级路由
export default[
    {
        path:'/',
        name:'home',
        component:()=>import('@/views/home.vue'),
        meta: {
            title: '首页',
            path: '/',
        },
        children,
    }
]