import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/views/MainPage';
import AboutPage from '@/views/AboutPage';

// Define the routes for the app
const routes = [
    {
        path: '/',
        name: 'MainPage',
        component: MainPage, // Set the MainPage component as the default route
    },
    {
        path: '/about',
        name: 'AboutPage',
        component: AboutPage, // Set the AboutPage component as a separate route
    },
];

// Create a new router instance
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), // Use the HTML5 history API for clean URLs
    routes, // Set the routes for the router instance
});

export default router;