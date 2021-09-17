<template>
  <div>
    <Heading title="Products" />
    <b-row v-if="products.length">
      <b-col v-for="item in products" :key="item.id">
        <Card :item="item" type="product" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Heading from '@/components/shared/Heading'
import Card from '@/components/shared/Card'
import { getProducts } from '../utils/constants'

export default {
  name: 'Product',
  data () {
    return {
      products: [],
      categoryId: this.$route.params.id
    }
  },

  mounted () {
    this.fetchProducts()
  },
  methods: {
    fetchProducts () {
      this.products = getProducts(Number(this.categoryId))
    }
  },
  components: {
    Heading,
    Card
  }
}
</script>
