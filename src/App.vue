<template>
  <div id="app">
    <!-- Grid -->
    <container gutter-vertical="x-large">
      <h1>vue-layouts</h1>
    </container>
    <container margin-bottom="large">
      <row v-for="row in [1, 2, 3, 4, 6, 12]" :key="row">
        <column v-for="column in row" :key="column" margin-bottom>
          <div class="test"></div>
        </column>
      </row>
    </container>

    <container margin-bottom>
      <row v-for="row in [2, 3, 4]" :key="row">
        <column v-for="column in row" :sizes="{sm: 12}" :key="column" margin-bottom>
          <div class="test"></div>
        </column>
      </row>
    </container>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import Container from '@/components/Container';
import Row from '@/components/Row';
import Column from '@/components/Column';

export default {
  name: 'app',
  components: {
    Container,
    Row,
    Column
  },
  methods: {
    ...mapActions([
      'breakpoints/setViewport'
    ]),
    onResize () {
      this['breakpoints/setViewport']({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
  },
  created () {
    window.addEventListener('resize', this.onResize)
    this.onResize()
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResize)
  }
};
</script>

<style>
:root {
  --grid-gutter-base: 1.25em;
  --grid-gutter-multiplier-x-large: 4.5;
  --grid-gutter-multiplier-large: 2;
  --grid-gutter-multiplier-small: 0.25;
}
body {
  margin: 0;
  font-family: -apple-system, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.test {
  background-color: grey;
  height: 4em;
}
</style>
