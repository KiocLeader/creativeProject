<template>
<div class="main">
  <form class="profile">
  <br>
  <br>
  <br>
  <br>
  <br>
  <font size="+2"><p><strong>Profile</strong></p></font>
  <hr>
    <p>{{user.firstName}} {{user.lastName}}</p>
    <p> {{user.bio}}</p>
    <p>Favorite Distance: {{user.favoriteDistance}}</p>
    <p>Mile Time: {{user.mileTime}}</p>
    <p>5k Time: {{user.fivekTime}}</p>
    <p>10K Time: {{user.tenkTime}}</p>
    <p>Half Marathon Time: {{user.halfTime}}</p>
    <p>Marathon Time: {{user.marathonTime}}</p>
  </form>

  <div class="heroBox">
    <form class="pure-form">
      <fieldset>
        <input placeholder="Favorite Distance" v-model="favoriteDistance">
        <input placeholder="Bio" v-model="bio">
      </fieldset>
      <fieldset>
        <input placeholder="Mile Time" v-model="mileTime">
        <input placeHolder="5k Time" v-model="fivekTime">
      </fieldset>
      <fieldset>
        <input placeholder="10k Time" v-model="tenkTime">
        <input placeHolder="Half Marathon Time" v-model="halfTime">
      </fieldset>
      <fieldset>
        <input placeholder="Marathon Time" v-model="marathonTime">
      </fieldset>
      <fieldset>
        <button type="submit" class="pure-button pure-button-primary" @click.prevent="updateInfo">update Info</button>
      </fieldset>
    </form>
  </div>

  <p v-if="error">{{error}}</p>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Profile',
  components: {
 },
  data() {
    return {
      info: true,
      show: false,
      distances: [],
      runs: [],
      error: '',
      favoriteDistance: '',
      bio: '',
      mileTime: '',
      fivekTime: '',
      tenkTime: '',
      halfTime: '',
      marathonTime: '',
    }
  },
  created() {
  },
  computed: {
    user() {
      return this.$root.$data.user;
    }
  },
  methods: {

    close() {
     this.show = false;
    },
    toggleUpload() {
     this.show = true;
    },
    async uploadFinished() {
      this.show = false;
    },
    async updateInfo() {
      try {
      if (!this.favoriteDistance || !this.bio || !this.mileTime || !this.fivekTime || !this.tenkTime || !this.halfTime || !this.marathonTime)
        return;
        await axios.put('/api/users', {
          favoriteDistance: this.favoriteDistance,
          bio: this.bio,
          mileTime: this.mileTime,
          fivekTime: this.fivekTime,
          tenkTime: this.tenkTime,
          halfTime: this.halfTime,
          marathonTime: this.marathonTime,
        });
        this.info = false;
        this.$root.$data.user.bio = this.bio;
        this.$root.$data.user.favoriteDistance = this.favoriteDistance;
        this.$root.$data.user.mileTime = this.mileTime;
        this.$root.$data.user.fivekTime = this.fivekTime;
        this.$root.$data.user.tenkTime = this.tenkTime;
        this.$root.$data.user.halfTime = this.halfTime;
        this.$root.$data.user.marathonTime = this.marathonTime;
        return this.$root.$data.user;
      } catch (error) {
        this.error = error.response.data.message;
      }
    },
  }
}
</script>

<style scoped>

.hero  {
  display: flex;
  justify-content: center;
}

.heroBox {
  padding: 50px;
  text-align: center;
}

.hero form {
  font-size: 14px;
}

.hero form legend {
  font-size: 20px;
}

.menu h2 {
  font-size: 14px;
}

.profile {
  font-size: 18px;
  text-align: center;
}







</style>
