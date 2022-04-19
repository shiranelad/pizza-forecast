<template>
  <section class="pizza-meter">
      <img class="pizza-img" src="../assets/img/pizza.png" alt="">
      <div class="needle" :style="{transform: calcDeg}"></div>
  </section>
</template>

<script>

export default {
  name: "pizza-meter",
  props: ['rainChance'],
  computed: {
    calcDeg(){
      const deg =  'rotate(' + ((+this.rainChance/100 * 180)-90) + 'deg)'
      return deg
    }
  },
}
</script>