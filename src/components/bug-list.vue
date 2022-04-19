<template>
  <section v-for="(bug, idx) in bugs?.bugsCount" :key="idx">
      <bug-drop />
  </section>
</template>

<script>
import bugDrop from './bug-drop.vue';

export default {
  name: 'bug-list',
  props: ['bugs'],
  components: {
      bugDrop
  },
}
</script>