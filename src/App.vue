<template>
  <div id="app">
    <container margin-top>
      <row gutter-vertical="x-large">
        <column :size="6">1</column>
        <column margin-top :offset="2">2</column>
      </row>
    </container>
  </div>
</template>

<script>
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
};
</script>

<style>
:root {
  --grid-gutter-base: 1.25em;
  --grid-gutter-multiplier-x-large: 4.5;
  --grid-gutter-multiplier-large: 2;
  --grid-gutter-multiplier-small: 0.25;
}

#app {
  font-family: -apple-system, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
