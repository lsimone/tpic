<template>
  <div>
    list view
    <v-list two-line>
      <template v-for="(item, index) in shops">

        <v-divider
          :key="index"
        />

        <v-list-tile
          :key="item.title"
          avatar
          @click="$emit('selectShop', item.id)"
        >
          <v-list-tile-avatar>
            <img :src="item.image">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title v-html="item.name"/>
            <v-list-tile-sub-title v-html="item.description"/>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>

  </div>
</template>

<script>

  export default {
    components: {
    },
    props: {
      shops: {
        type: Array,
        default: () => []
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
