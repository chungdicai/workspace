// 設定路由
export const routes = [
    {
        path: '/validaten',
        name: 'validaten',
        meta: {
        },
        component: () => import('../view/vee-validate.vue')
    },
    {
        path: '/',
        name: 'def_layout',
        component: () =>  import('../view/default_layout.vue'),
        children: [
            {
            path: '',
            name: 'cata',
            component: () => import('../view/cata.vue')
            },
            {
                path: 'catb',
                name: 'catb',
                component: () => import('../view/catb.vue')
            },
            {
                path: 'catc',
                name: 'catc',
                component: () => import('../view/catc.vue')
            },
            {
                path: 'Login',
                name: 'Login',
                component: () => import('../view/Login.vue')
            },
            {
                path: 'singup',
                name: 'singup',
                component: () => import('../view/singup.vue')
            }

        ],
    },
    {
        path: '/cat_supplies',
        name: 'cat_supplies',
        component: () => import('../view/cat_supplies/index.vue')
    },
    {
        path: '/cat_supplies/:id',
        name: 'cat_supplies_id',
        component: () => import('../view/cat_supplies/_id.vue')
    },
]