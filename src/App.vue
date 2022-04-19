<template>
  <section class="app-container container">
    <logo />
    <rain-info :bugs="bugs" />
    <bug-list :bugs="bugs" />
    <pizza-meter :rainChance="bugs?.rainChance" />
  </section>
</template>

<script>
import bugList from "./components/bug-list.vue";
import pizzaMeter from "./components/pizza-meter.vue";
import logo from "./components/logo.vue";
import { bugService } from "./services/bugsService";
import rainInfo from "./components/rain-info.vue";

export default {
  name: "app",

  async created() {
    // load bugs
    const bugs = await bugService.getBugs();
    const { minsLeft, rainChance, DUE_HOUR, msg } =
      bugService.calcPizzaForecast(bugs);
    this.bugs = {
      bugsCount: bugs,
      minsLeft,
      rainChance,
      dueHour: DUE_HOUR,
      msg,
    };
  },
  data() {
    return {
      bugs: null,
    };
  },
  methods: {},
  components: {
    logo,
    rainInfo,
    bugList,
    pizzaMeter,
  },
};
</script>
