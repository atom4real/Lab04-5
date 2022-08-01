<template>
  <h1>Passenger</h1>
  <div class="events">
    <EventCard
      v-for="event in events[0].data"
      :key="event._id"
      :event="event"
    ></EventCard>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";
import EventService from "@/services/EventService.js";
import { watchEffect } from "@vue/runtime-core";
export default {
  name: "EventListView",
  props: {},
  components: {
    EventCard,
  },
  data() {
    return {
      events: null,
    };
  },
  created() {
    watchEffect(() => {
      EventService.getEventsPass()
        .then((response) => {
          this.events = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    });
  },
};
</script>
<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}
#page-prev {
  text-align: left;
}
#page-next {
  text-align: right;
}
</style>
