<template>
    <div class="layout">
      <Layout>
          <Sider :collapsed-width="64" v-model="isCollapsed">
            <div class="logo-con">
              <img v-show="!isCollapsed" src="../assets/header-logo.jpg" alt="logo">
              <img v-show="isCollapsed" src="../assets/header-logo-mini.jpg" alt="logo">
            </div>
            <Slid :urlRouter="$route.path" :isCollapsed="isCollapsed"></Slid>
          </Sider>
          <Layout>
              <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}">
                <Head @sliderToggle="sliderToggle"></Head>
              </Header>
              <Content :style="{padding: '24px'}">
                <router-view></router-view>
              </Content>
              <Footer :style="{background: '#fff', boxShadow: '0 -2px 3px 2px rgba(0,0,0,.1)' , textAlign: 'center'}">Copyright © 武智科技2017. All rights reserved.</Footer>
          </Layout>
      </Layout>
    </div>
</template>
<script>
  import Head from '@/components/base/Head.vue';
  import Slid from '@/components/base/Slid.vue';
  export default {
    name: 'App',
    data() {
      return {
        msg: {
            title: "APP"
        },
        theme: 'light',
        isCollapsed: false
      }
    },
    components: {
      Head,
      Slid
    },
    methods: {
      sliderToggle: function(data){
        //this.hideTrigger = data;
        console.log("home " + data);
      }
    }
  };
</script>
<style scoped>
  .logo-con {
    overflow: hidden;
  }
  .logo-con img {
    display: block;
    margin: 0 auto;
  }
  .layout,
  .ivu-layout.ivu-layout-has-sider {
    height: 100%;
  }
  .ivu-layout .ivu-content {
    height: calc(100% - 80px);
  }
</style>