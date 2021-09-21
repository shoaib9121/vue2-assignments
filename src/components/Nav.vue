<template>
  <b-navbar class="mb-5">
    <b-navbar-nav>
      <b-nav-item href="#"><router-link to="/">Home</router-link></b-nav-item>
      <b-nav-item href="#"
        ><router-link to="/categories">Categories</router-link></b-nav-item
      >
      <b-nav-item href="#"
        ><router-link to="/cart"
          >Cart
          <span v-if="$store.state.cartCount"
            >({{ $store.state.cartCount }})
          </span>
        </router-link></b-nav-item
      >
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: "Nav"
};
</script>

<style>
.navbar {
  background: #f7f7f7;
}
.navbar-expand .navbar-nav .nav-link {
  padding-right: 1rem;
  padding-left: 1rem;
}
</style>
