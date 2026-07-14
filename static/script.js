import Home from './components/Home.js';
import Login from './components/Login.js';
import Register from './components/Register.js';
import AdminDeshboard from './components/AdminDeshboard.js';
import BookingTable from './components/BookingTable.js';

// 1. Define your routes correctly
const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login }, // Changed path to avoid overlapping with Flask backend endpoint /api/login
    { path: '/register', component: Register }, // Added route for registration page
    { path: '/admin/dashboard', component: AdminDeshboard }, // Added route for admin dashboard
    { path: '/treks', component: BookingTable }
];

// 2. Create the router using Vue Router 4 syntax
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
});

// 3. Define the root component
const App = {
    data() {
        return {
            title: "Welcome to TrackPedia"
        };
    },
    template: `
        <div class="container mt-4">
            <nav class="mb-4">
                <router-link to="/" class="btn btn-outline-primary me-2">Home</router-link>
                <router-link to="/login" class="btn btn-outline-success">Login</router-link>
                <router-link to="/register" class="btn btn-outline-warning ms-2">Register</router-link>
            </nav>
            <router-view></router-view>
        </div>
    `
};

// 4. Create the Vue app and mount the router plugin
const app = Vue.createApp(App);
app.use(router);
app.mount('#app');