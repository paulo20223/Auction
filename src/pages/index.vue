<template>
  <div class="app">
    <div class="header">
      <div class="center">
        <vs-navbar v-model="active" :fixed="true" :shadow="true" center-collapsed>
          <template #left>
            <img src="/logo2.png" alt="">
          </template>
          <vs-navbar-item id="guide" :active="active === 'guide'">
            Guide
          </vs-navbar-item>
          <vs-navbar-item id="docs" :active="active === 'docs'">
            Documents
          </vs-navbar-item>
          <vs-navbar-item id="components" :active="active === 'components'">
            Components
          </vs-navbar-item>
          <vs-navbar-item id="license" :active="active === 'license'">
            license
          </vs-navbar-item>
          <template #right>
            <vs-button flat>
              Login
            </vs-button>
            <vs-button>Get Started</vs-button>
          </template>
        </vs-navbar>
      </div>
    </div>
    <div class="container">
      <vs-button @click="increment">
        Increment
      </vs-button>
      <p>Counter : {{ counter }}</p>
      <vs-button @click="decrement">
        Decrement
      </vs-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class ClassAPICounter extends Vue {
  counter = 0;
  active = 'guide'

  increment () {
    this.counter++
  }

  decrement () {
    this.counter--
  }
}
</script>

<style lang="scss">
@import 'assets/scss/home';
</style>
