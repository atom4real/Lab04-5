<template>
  <div v-for="passenger in events" :key="passenger.id">
    <div v-for="event in passenger.data" :key="event.id">
      <h3>ID: {{ event._id }}</h3>
      <h3>Name: {{ event.name }}</h3>
      <div v-for="airline in event.airline" :key="airline.id">
        <p>Airline ID: {{ airline.id }}</p>
        <p>Airline Name: {{ airline.name }}</p>
        <p>Country: {{ airline.country }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import EventService from "@/services/EventService.js";
import { watchEffect } from "@vue/runtime-core";
export default {
  data() {
    return {
      events: null,
    };
  },
  created() {
    watchEffect(() => {
      EventService.getEventsPassenger()
        .then((response) => {
          this.events = response.data;
          this.totalEvents = response.headers["x-total-count"]; // <--- Store it
        })
        .catch((error) => {
          console.log(error);
        });
    });
  },
  props: ["event"],
};
</script>
