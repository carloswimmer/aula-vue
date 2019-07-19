import Vue from 'vue'
import Router from 'vue-router'
import Tarefas from './views/Tarefas.vue'
import Agenda from './views/Agenda.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'tarefas',
            component: Tarefas
        },
        {
            path: '/agenda',
            name: 'agenda',
            component: Agenda
        }
    ]
})