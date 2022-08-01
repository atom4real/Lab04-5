<template>
  <div v-if="events">
    <div id="nav">
      <router-link :to="{ name: 'EventDetails', params: { id } }">
        Passenger
      </router-link>
      <router-link :to="{ name: 'EventRegister', params: { id } }">
        Airline
      </router-link>
    </div>
    <router-view :events="events" />
  </div>
</template>

<script>
import EventService from "@/services/EventService.js";
export default {
  props: ["id"],
  data() {
    return {
      event: null,
      events: null,
    };
  },
  created() {
    EventService.getEventsPass()
      .then((response) => {
        let pass = response.data;
        pass.forEach((element) => {
          element.data;
          this.event = element.data;
        });
        for (let index = 0; index < this.event.length; index++) {
          if (this.event[index]._id == this.id) {
            this.events = this.event[index];
          }
        }
        if (this.events == null) {
          this.$router.push({
            name: "404Resource",
            params: { resource: this.id },
          });
        }
      })
      .catch((error) => {
        if (error.response && error.response.status == 404) {
          this.$router.push({
            name: "404Resource",
            params: { resource: this.id },
          });
        } else {
          this.$router.push({ name: "NetworkError" });
        }
      });
  },
};
</script>
