<template>
  <div class="layout">
    <h1>Running around the world</h1>
      <div class="allRuns" v-for="run in runs" v-bind:key="run._id">
          <hr>
          <p> {{run.user.firstName}} {{run.user.lastName}}</p>
          <p>Title: {{run.title}}</p>
          <p>Description: {{run.description}}</p>
          <p>Time: {{run.time}} Distance: {{run.distance}} Miles</p>
          <p> Average Pace: {{run.avgPace}} Average HR: {{run.avgHR}}bpm</p>
          <p>{{formatDate(run.created)}}</p>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';
export default {
  name: 'Global',
  data() {
    return {
      title: '',
      description: '',
      distance: '',
      time: '',
      avgPace: '',
      avgHR: '',
      runs:{},
    }
  },
  created() {
    this.getRuns();
  },
  computed: {
    user() {
      return this.$root.$data.user;
    }
  },
  methods: {
  formatDate(date) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a');
    },
    async getRuns() {
      try {
        this.response = await axios.get("/api/runs/all");
        this.runs = this.response.data;
      } catch (error) {
        this.error = error.response.data.message;
      }
    },
  }
}
</script>

<style scoped>

.layout {
  justify-content: center;
  align-items: center;
  padding: 135px 0px 50px 0px;
}

h1 {
  text-align: center;
}

.allRuns {
  text-align: center;
  justify-content: center;
  align-items: center;
}

</style>
