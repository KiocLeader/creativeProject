<template>
<div class="user">
  <Runs v-if="user" />
  <Login v-else />
</div>
</template>

<script>
import Login from '@/components/Login.vue';
import Runs from '@/components/Runs.vue';
import axios from 'axios';
export default {
  name: 'user',
  components: {
    Login,
    Runs,
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
.user {
  padding-top: 10px;
}

</style>
