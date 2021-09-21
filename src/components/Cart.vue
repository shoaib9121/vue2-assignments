<template>
  <div class="has-dropdown is-hoverable">
    <h3>Cart ({{ $store.state.cartCount }})</h3>
    <div
      v-if="$store.state.cart.length"
      class="navbar-dropdown is-boxed is-right"
    >
      <b-table
        striped
        hover
        bordered
        responsive
        sticky-header
        :items="$store.state.cart"
        :fields="['title', 'price', 'quantity', 'totalPrice']"
      >
        <template #cell(name)="data">
          <b class="text-info">{{ data.value.last.toUpperCase() }}</b
          >, <b>{{ data.value.first }}</b>
        </template>
      </b-table>
      <h4>Total: ${{ totalPrice }}</h4>
    </div>

    <div v-else class="navbar-dropdown is-boxed is-right">
      <p>
        Cart is empty
      </p>
    </div>
  </div>
</template>
<script>
import Heading from "@/components/shared/Heading";

export default {
  name: "Cart",
  data() {
    return {};
  },
  computed: {
    totalPrice() {
      let total = 0;

      for (let item of this.$store.state.cart) {
        total += item.totalPrice;
      }

      return total.toFixed(2);
    }
  },
  components: {}
};
</script>
