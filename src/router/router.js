import Main from "@/pages/Main.vue"
import {createRouter, createWebHistory} from "vue-router"
import PostPage from "@/pages/PostPage.vue"
import About from "@/pages/About.vue"
import PostIdPage from "@/pages/PostIdPage.vue"
import PostPageWithVueX from "@/pages/PostPageWithVueX.vue"
import PostPageCompositionAPI from "@/pages/PostPageCompositionAPI"

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: PostPage
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/posts/:id',
        component: PostIdPage
    },
    {
        path: '/store',
        component: PostPageWithVueX
    },
    {
        path: '/composition',
        component: PostPageCompositionAPI
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router