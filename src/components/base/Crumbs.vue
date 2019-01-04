<template>
  <Breadcrumb style="margin-bottom:20px">
    <BreadcrumbItem to="/build">首页</BreadcrumbItem>
    <BreadcrumbItem>{{title}}</BreadcrumbItem>
  </Breadcrumb>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {

      }
    },
    props: ['title']
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
