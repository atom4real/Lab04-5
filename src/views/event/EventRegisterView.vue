<template>
  <p>Airline name: {{ events.airline[0].name }}</p>
  <p>Airline slogan: {{ events.airline[0].slogan }}</p>
  <p>head_quaters: {{ events.airline[0].head_quaters }}</p>
</template>

<script>
export default {
  props: ["events"],
};
</script>
