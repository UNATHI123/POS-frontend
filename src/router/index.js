import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../components/Register.vue'
import Login from '../components/Login.vue'
import Products from '../components/Products.vue'
import Cart from '../components/Cart.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component:Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },{
    path: '/products',
    name: 'Products',
    component:Products
  },{
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/home', '/register', '/login'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');
  // trying to access a restricted page + not logged in
  // redirect to login page


  if (to.path == '/cart' && !loggedIn) next({ name: 'Register' })
  else next()

  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});


export default router
