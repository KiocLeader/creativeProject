<template>
<div class="main">
  <div class="menu">
    <p><a @click="toggleUpload"><i class="fas fa-running"></i></a></p>
    <h2>{{user.firstName}} {{user.lastName}} <a @click="logout"><i class="fas fa-sign-out-alt"></i></a></h2>
    <Uploader :show="show" @close="close" @uploadFinished="uploadFinished" />
  </div>
  <div class="heroBox">
    <form class="pure-form">
      <fieldset>
        <legend>Profile</legend>
        <input placeholder="favorite Distance" v-model="favoriteDistance">
        <input placeholder="Bio" v-model="bio">
      </fieldset>
      <fieldset>
        <input placeholder="mile Time" v-model="mileTime">
        <input placeHolder="5K Time" v-model="fivekTime">
      </fieldset>
      <fieldset>
        <input placeholder="10K Time" v-model="tenkTime">
        <input placeHolder="Half Time" v-model="halfTime">
      </fieldset>
      <fieldset>
        <input placeholder="Marathon Time" v-model="marathonTime">
        <div class="imageInput" @click="chooseImage">
            <img v-if="url" :src="url" />
            <div v-if="!url" class="placeholder">
              Choose a Profile Picture
            </div>
            <input class="fileInput" ref="fileInput" type="file" @input="fileChanged">
          </div>
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
import Uploader from '@/components/Uploader.vue';
export default {
  name: 'Profile',
  components: {
    Uploader
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
      url: '',
      file: null,
    }
  },
  created() {
  },
  computed: {
    user() {
      return this.$root.$data.user;
    },
  },
  methods: {
    async logout() {
      try {
        await axios.delete("/api/users");
        this.$root.$data.user = null;
      } catch (error) {
        this.$root.$data.user = null;
      }
    },
    close() {
     this.show = false;
    },
    toggleUpload() {
     this.show = true;
    },
    async uploadFinished() {
      this.show = false;
      this.getPhotos();
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
          marathonTime: this.halfTime,
          completed: true
        });
        this.info = false;
      } catch (error) {
        this.error = error.response.data.message;
      }
    },
    fileChanged(event) {
      this.file = event.target.files[0];
      this.url = URL.createObjectURL(this.file);
    },
    chooseImage() {
      this.$refs.fileInput.click()
    },
  }
}
</script>

<style scoped>
.menu {
  display: flex;
  justify-content: space-between;
}

.hero {
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

.placeholder {
  background: #F0F0F0;
  width: 200px;
  height: 125px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  font-size: 14px;
  cursor: pointer;
}

.placeholder:hover {
  background: #E0E0E0;
}

.fileInput {
  display: none;
}

.imageInput {
  display: flex;
  justify-content: center;
}

img {
  width: 200px;

}


</style>
