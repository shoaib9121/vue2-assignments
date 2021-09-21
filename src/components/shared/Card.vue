<template>
  <b-card
    :title="item.title"
    :img-src="images.sample"
    img-alt="Image"
    img-top
    tag="article"
    class="mb-2"
  >
    <label
      v-if="item.category && item.category.name"
      class="badge bg-info  mb-3"
      >{{ item.category.name }}
    </label>
    <b-card-text> {{ item.description }} </b-card-text>
    <div v-if="type === 'category'">
      <button class="btn btn-secondary buy-button">
        <router-link :to="`/products/${item.id}`">Show Products</router-link>
      </button>
    </div>
    <div v-else>
      <button class="btn btn-secondary buy-button">
        <router-link :to="`/product-detail/${item.id}`"
          >Buy Product</router-link
        >
      </button>
      <!-- <b-button href="#" variant="primary">Buy Product</b-button> -->
    </div>
  </b-card>
</template>

<script>
export default {
  name: "Card",
  props: {
    type: String,
    item: Object
  },
  data() {
    return {
      images: {
        sample: require("@/assets/placeholder.jpeg")
      }
    };
  }
};
</script>

<style>
.card img {
  max-width: 250px;
  margin: auto;
}
.card .buy-button {
  padding: 0;
}
.card .buy-button a {
  color: white;
  text-decoration: none;
  display: inline-block;
  padding: 0.375rem 0.75rem;
}
.card-body {
  background: #f7f7f7;
  padding: 2rem;
}
.card-body .card-text {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
