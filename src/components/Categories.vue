<template>
  <div>
    <Heading title="Major Categories" />
    <b-row>
      <b-col v-for="item in categories" :key="item.id">
        <Card :item="item" type="category" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Heading from "@/components/shared/Heading";
import Card from "@/components/shared/Card";
import { categories } from "@/utils/constants";

export default {
  name: "Categories",
  data() {
    return {
      categories
    };
  },
  computed: {},
  components: {
    Heading,
    Card
  }
};
</script>
