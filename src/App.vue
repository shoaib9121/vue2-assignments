<template>
  <div id="app">
    <div class="container mt-5">
      <h1 class="text-center">Shoping Store</h1>
      <Nav />
      <router-view />
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";

export default {
  name: "App",
  components: {
    Nav
  }
};
</script>

<style>
a.btn a {
  color: #fff;
  text-decoration: none;
}
</style>
