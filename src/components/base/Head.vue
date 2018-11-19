<template>
  <div>
    <Icon :class="['sider-trigger-a', 'collapsed']" type="md-menu" size="24" @click="sliderToggle"></Icon>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg:"Header",
      theme: 'dark',
      hideTrigger: true
    }
  },
  methods: {
    sliderToggle: function(){
      this.hideTrigger = !this.hideTrigger;
      this.$emit('sliderToggle', this.hideTrigger);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
