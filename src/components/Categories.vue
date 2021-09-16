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

const categories = [
  {
    id: 1,
    title: "Category 1",
    imgSrc: "https://picsum.photos/600/300/?image=25",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    id: 2,
    title: "Category 2",
    imgSrc: "https://picsum.photos/600/300/?image=25",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content."
  },
  {
    id: 3,
    title: "Category 3",
    imgSrc: "https://picsum.photos/600/300/?image=25",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content."
  }
];

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
