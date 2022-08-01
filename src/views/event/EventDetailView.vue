<template>
  <p>Name: {{ events.name }}</p>
  <p>PassengerID: {{ events._id }}</p>
</template>

<script>
export default {
  props: ["events"],
};
</script>
