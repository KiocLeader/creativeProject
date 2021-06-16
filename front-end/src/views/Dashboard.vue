<template>
<div class="dashboard">
  <Profile v-if="user" />
  <Login v-else />
</div>
</template>

<script>
import Login from '@/components/Login.vue';
import Profile from '@/components/Profile.vue';
import axios from 'axios';
export default {
  name: 'dashboard',
  components: {
    Login,
    Profile,
  },
  async created() {
    try {
      let response = await axios.get('/api/users');
      this.$root.$data.user = response.data.user;
    } catch (error) {
      this.$root.$data.user = null;
    }
  },
  computed: {
    user() {
      return this.$root.$data.user;
    }
  }
}
</script>

<style scoped>
.dashboard {
  padding-top: 10px;
}

</style>
