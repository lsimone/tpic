<!--TODO: schiacciare la card, mostrare titolo (bottoni e sottotitolo?) sull'immagine (con un layer dietro per migliorare leggibilità?)-->

<template>
  <v-card>
    <!--<v-img-->
    <!--src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"-->
    <!--height="200px"-->
    <!--/>-->
    <v-img
      :src="image"
    />

    <v-card-title primary-title>
      <div>
        <div class="headline">{{ title }}</div>
        <span class="grey--text">{{ subtitle }}</span>
      </div>
    </v-card-title>

    <v-card-actions>
      <!--<v-btn flat>Share</v-btn>-->
      <!--<v-btn-->
      <!--flat-->
      <!--color="purple">Explore-->
      <!--</v-btn>-->
      <v-spacer/>
      <v-btn
        icon
        @click="show = !show">
        <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="indigo"
        @click="remove"
      >
        <v-icon dark>remove</v-icon>
      </v-btn>
      <div>{{ quantity }}</div>
      <v-btn
        fab
        dark
        small
        color="indigo"
        @click="add"
      >
        <v-icon dark>add</v-icon>
      </v-btn>

    </v-card-actions>

    <v-slide-y-transition>
      <v-card-text v-show="show">
        {{ description }}
      </v-card-text>
    </v-slide-y-transition>
  </v-card>
</template>

<script>

  export default {
    components: {},
    props: {
      title: {
        type: String,
        default: ''
      },
      subtitle: {
        type: String,
        default: ''
      },
      description: {
        type: String,
        default: ''
      },
      image: {
        type: String,
        default: ''
      },
      initialQty: {
        type: Number,
        default: 0
      },
      maxQty: {
        type: Number,
        default: Infinity
      }
    },
    data () {
      return {
        show: false,
        quantity: this.initialQty
      }
    },
    watch: {
      quantity() {
        this.$emit('update', this.quantity)
      }
    },
    methods: {
      add() {
        if (this.quantity < this.maxQty) {
          this.quantity ++
        }
      },
      remove() {
        if (this.quantity > 0) {
          this.quantity --
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
