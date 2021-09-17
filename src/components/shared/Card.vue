<template>
  <b-card
    :title="item.title"
    :img-src="images.sample"
    img-alt="Image"
    img-top
    tag="article"
    class="mb-2"
  >
    <b-card-text> {{ item.description }} </b-card-text>
    <div v-if="type === 'category'">
      <button class="btn btn-secondary buy-button">
        <router-link :to="`/products/${item.id}`">Show Products</router-link>
      </button>
    </div>
    <div v-else>
      <b-button href="#" variant="primary">Buy Product</b-button>
    </div>
  </b-card>
</template>

<script>
export default {
  name: 'Card',
  props: {
    type: String,
    item: Object
  },
  data () {
    return {
      images: {
        sample: require('@/assets/placeholder.jpeg')
      }
    }
  }
}
</script>

<style>
.card img {
  max-width: 250px;
  margin: auto;
}
.buy-button {
  padding: 0;
}
.buy-button a {
  color: white;
  text-decoration: none;
  display: inline-block;
  padding: 0.375rem 0.75rem;
}
</style>
