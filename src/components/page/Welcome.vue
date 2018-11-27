<template>
  <div>
    <!-- <Crumbs :title="msg.title"></Crumbs> -->
    {{msg.text}}
  </div>
</template>

<script>
  import Crumbs from '@/components/base/Crumbs.vue';
  export default {
    name: 'Welcome',
    data() {
      return {
        msg: {
          text: "Welcome to used lvyi platform",
          title: document.title
        },
      }
    },
    components: {
      Crumbs
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
