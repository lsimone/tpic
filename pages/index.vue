<template>
  <v-layout
    column
    justify-center
    align-center>
    <v-flex
      xs12
      sm8
      md6>

      <div>

        <MerchantSearch
          v-if="!shop"
          :shops="shops"
          @selectShop="selectShop"
        />
        <div
          v-else>
          <button @click="selectShop()">back to shop selection</button>
          <ProductList
            :products="menu"
            @update="updateProductInCart"
          />
        </div>

      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import MerchantSearch from '~/components/MerchantSearch.vue'
import ProductList from '~/components/ProductList.vue'
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  components: {
    MerchantSearch,
    ProductList
  },
  data() {
    return {
      shop: null
    }
  },
  computed: {
    ...mapState(['cart', 'shops', 'menu'])
  },
  created() {
  },
  mounted() {
    console.error('hello tpic')
    this.loadShops()

  },
  methods: {
    ...mapActions(['loadShops', 'loadShopMenu']),
    ...mapMutations({
      updateCart: 'UPDATE_CART'
    }),
    selectShop (shopId) {
      this.shop = shopId
      this.loadShopMenu(shopId)
    },
    updateProductInCart (update) {
      this.updateCart(update)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
