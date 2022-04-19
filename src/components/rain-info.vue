<template>
  <section class="rain-info">
    <h2 v-if="!this.bugs">Calculating...</h2>
    <div v-else-if="!this.bugs?.msg">
      <h2>Rainy with {{ bugs?.rainChance }}% chance for Pizza</h2>
      <h4>
        {{ bugs?.bugsCount }} bugs found and {{ bugs?.minsLeft }} minutes until
        {{ bugs?.dueHour }}:00
      </h4>
    </div>
    <h2 v-else>{{ bugs?.msg }}</h2>
  </section>
</template>

<script>
export default {
  name: "rain-info",
  props: { bugs: Object },
};
</script>
