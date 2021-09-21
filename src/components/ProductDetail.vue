<template>
  <div v-if="product">
    <b-row>
      <b-col cols="4">
        <img :src="images.sample" />
      </b-col>
      <b-col cols="8">
        <div class="text-left">
          <h2>{{ product.title }}</h2>
          <label
            v-if="product.category && product.category.name"
            class="badge bg-info mb-3"
            >{{ product.category.name }}
          </label>
          <p>{{ product.description }}</p>
          <button class="btn btn-secondary" @click="addToCart(product)">
            Add to cart
          </button>
        </div>
      </b-col>
    </b-row>
    <b-alert
      v-model="showTop"
      class="position-fixed fixed-top m-0 rounded-0"
      style="z-index: 2000;"
      variant="success"
      dismissible
    >
      Product added successfully!
      <router-link to="/cart">View Cart </router-link>
    </b-alert>
  </div>
</template>

<script>
import Heading from "@/components/shared/Heading";
import Card from "@/components/shared/Card";
import { getProductById } from "../utils/global";

export default {
  name: "ProductDetail",
  data() {
    return {
      product: null,
      productId: this.$route.params.id,
      images: {
        sample: require("@/assets/placeholder.jpeg")
      },
      showBottom: false,
      showTop: false
    };
  },

  mounted() {
    this.fetchProduct();
  },
  methods: {
    fetchProduct() {
      this.product = getProductById(Number(this.productId));
    },
    addToCart(product) {
      this.showTop = !this.showTop;
      this.$store.dispatch("addToCart", product);
      setTimeout(() => {
        this.showTop = !this.showTop;
      }, 2000);
    }
  },
  components: {
    Heading,
    Card
  }
};
</script>
