<template>
  <div>
    <button @click.prevent="mapView = !mapView" >switch to {{ mapView? 'list' : 'map' }}</button>
    <merchant-list
      v-if="!mapView"
      :shops="shops"
      @selectShop="selectShop"
    />
    <merchant-map
      v-if="mapView"
      :shops="shops"
      @selectShop="selectShop"
    />
  </div>
</template>

<script>
  import MerchantList from './MerchantList.vue'
  import MerchantMap from './MerchantMap.vue'

  export default {
    components: {
      MerchantList,
      MerchantMap
    },
    props: {
      shops: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        mapView: false
      }
    },
    methods: {
      selectShop(shopId) {
        this.$emit('selectShop', shopId)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
