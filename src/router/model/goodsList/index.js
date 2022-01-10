export default [{
    path: '/goodsList',
    name: 'goodsList',
    component: () => import('@/views/goodsList.vue'),
    meta: {
        name: '列表',
        path: '/goodsList',
    },
}]