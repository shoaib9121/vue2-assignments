import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Categories from "@/components/Categories";
import Products from "@/components/Products";
import ProductDetail from "@/components/ProductDetail";
import Cart from "@/components/Cart";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/categories",
      name: "Categories",
      component: Categories
    },
    {
      path: "/cart",
      name: "Cart",
      component: Cart
    },
    { path: "/products/:id", component: Products },
    { path: "/product-detail/:id", component: ProductDetail }
  ]
});
