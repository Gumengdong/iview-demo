<template>
  <div>
    <Crumbs :title="msg.title"></Crumbs>
    <Card>
      
    </Card>
  </div>
</template>

<script>
  import Crumbs from "@/components/base/Crumbs.vue";
  import { timestampToTime } from "@/utils/utils.js";
  export default {
    data() {
      return {
        msg: {
          title: document.title
        },
      };
    },
    components: {
      Crumbs
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
