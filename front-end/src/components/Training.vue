<template>
  <div class="layout">
  <hr>
  <div class="allResources" v-for="resource in resources" v-bind:key="resource._id">
      <a :href="resource.url">{{resource.title}}</a>
      <p>Description: {{resource.description}}</p>
      <p>{{resource.user.firstName}} {{resource.user.lastName}} -- {{formatDate(resource.created)}}</p>
      <hr>
  </div>
  <form class="pure-form" @submit.prevent="upload">
    <legend><strong>Add Your Favorite Running Resource</strong></legend>
    <fieldset>
      <input v-model="title" placeholder="Title">
      <input v-model="url" placeHolder="link">
      <textarea v-model="description" placeholder="Description"></textarea>
    </fieldset>
    <fieldset class="buttons">
      <button type="submit" class="pure-button pure-button-primary right">Upload</button>
    </fieldset>
  </form>
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
      url: '',
      resources:{},
    }
  },
  created() {
    this.getResources();
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
    async getResources() {
      try {
        this.response = await axios.get("/api/resources");
        this.resources = this.response.data;
      } catch (error) {
        this.error = error.response.data.message;
      }
    },
    async upload() {
      try {
        await axios.post("/api/resources", {
          title: this.title,
          description: this.description,
          url: this.url,
        });
        this.title = "";
        this.description = "";
        this.url = "";
        this.getResources();
      } catch (error) {
        this.error = "Error: " + error.response.data.message;
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
}

legend {
  font-size: 18px;
  text-align: center;
}

.allResources {
  text-align: center;
}

textarea {
  width: 100%;
  height: 70px;
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

.buttons {
  display: flex;
  justify-content: center;
}
</style>
