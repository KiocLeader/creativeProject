<template>
  <div class="layout">
      <form class="pure-form" @submit.prevent="upload">
        <legend>Upload your Run</legend>
        <fieldset>
          <input v-model="title" placeholder="Title">
        </fieldset>
        <fieldset>
          <textarea v-model="description" placeholder="Description"></textarea>
        </fieldset>
        <fieldset>
          <input placeholder="Distance" v-model="distance">
          <input placeholder="Time" v-model="time">
          <input placeholder="Average Pace" v-model="avgPace">
          <input placeholder="Average HR" v-model="avgHR">
        </fieldset>
        <fieldset class="buttons">
          <button type="submit" class="pure-button pure-button-primary right">Upload</button>
        </fieldset>
      </form>
      <div class="myRuns" v-for="run in runs" v-bind:key="run._id">
          <hr>
          <p>Title: {{run.title}}</p>
          <p>Description: {{run.description}}</p>
          <p>Time: {{run.time}} Distance: {{run.distance}} Miles</p>
          <p> Average Pace: {{run.avgPace}} Average HR: {{run.avgHR}}bpm</p>
          <p>{{formatDate(run.created)}}</p>
          <button type="submit" class="pure-button pure-button-primary right" @click.prevent="deleteRun(run._id)">Delete</button>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';
export default {
  name: 'Runs',
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
    async upload() {
      try {
        await axios.post("/api/runs", {
          title: this.title,
          description: this.description,
          distance: this.distance,
          time: this.time,
          avgPace: this.avgPace,
          avgHR: this.avgHR
        });
        this.title = "";
        this.description = "";
        this.distance = "";
        this.time = "";
        this.avgPace = "";
        this.avgHR = "";
        this.getRuns();
      } catch (error) {
        this.error = "Error: " + error.response.data.message;
      }
    },
    async deleteRun(runId) {
    console.log(runId);
      try {
          await axios.delete("/api/runs/" + runId);
          this.getRuns();
      } catch (error) {
          this.error = error.response.data.message;
      }
    },
    async getRuns() {
      try {
        this.response = await axios.get("/api/runs");
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
form {
  font-size: 11pt;
}

input {
  width: 100%;
  text-align: center;
}

legend {
  font-size: 18px;
  text-align: center;
}

textarea {
  width: 100%;
  height: 50px;
  text-align: center;
}

.placeholder {
  background: #F0F0F0;
  width: 200px;
  height: 125px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  font-size: 14px;
}

.myRuns {
  text-align: center;
}

.buttons {
  display: flex;
  justify-content: center;
}
</style>
