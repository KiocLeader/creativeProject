<template>
<div class="resource">
  <Training v-if="user" />
  <Login v-else />
</div>
</template>

<script>
import Login from  '@/components/Login.vue';
import Training from '@/components/Training.vue';
import axios from 'axios';
export default {
  name: 'resource',
  components: {
    Training,
    Login,
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
.resource {
  padding-top: 10px;
}

</style>
