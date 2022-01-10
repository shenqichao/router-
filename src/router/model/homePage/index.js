export default [{
    path: '/homePage',
    name: 'homePage',
    component: () => import('@/views/homePage.vue'),
    meta: {
        name: '首页',
        path: '/homePage',
    },
}]