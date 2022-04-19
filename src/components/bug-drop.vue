<template>
  <section
    class="bug-drop"
    :style="{
      width: getWidth,
      height: getHeight,
      top: getTop,
      right: getRight,
      opacity: getOpacity,
    }"
  ></section>
</template>

<script>
export default {
  name: 'bug-drop',
  methods: {
    random(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min);
    },
  },
  computed: {
    getWidth() {
      return this.random(1, 20) + "px";
    },
    getHeight() {
      return this.random(20, 100) + "px";
    },

    getTop() {
      return this.random(10, 80) + "%";
    },
    getRight() {
      return this.random(10, 80) + "%";
    },
    getOpacity() {
      return this.random(1,10)/10;
    },
  },
};
</script>
