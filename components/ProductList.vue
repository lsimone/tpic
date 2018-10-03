<template>
  <div>

    <product-card
      v-for="p in products"
      :key="p.id"
      :title="p.name"
      :subtitle="p.shortDesc"
      :description="p.desc"
      :image="p.image"
      @update="$emit('update', {productId: p.id, quantity: $event})"
    />

  </div>
</template>

<script>
  import ProductCard from './ProductCard.vue'

  export default {
    components: { ProductCard },
    props: {
      products: {
        type: Array,
        default: () => []
      }
    },
    methods: {
      update(e) {
        console.warn(e)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
