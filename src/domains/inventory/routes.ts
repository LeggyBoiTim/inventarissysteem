import Create from './pages/Create.vue';
import Edit from './pages/Edit.vue';
import Overview from './pages/Overview.vue';
import Order from './pages/Order.vue';

export const routes = [
    { path: '/create', component: Create },
    { path: '/edit/:id', component: Edit },
    { path: '/overview', component: Overview, alias: '/' },
    { path: '/order', component: Order }
];
