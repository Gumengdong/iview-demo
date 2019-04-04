<template>
    <div class="layout">
      <Layout>
          <Sider :collapsed-width="64" v-model="isCollapsed">
            <div class="logo-con">
              <img v-show="!isCollapsed" src="../assets/img/header-logo.jpg" alt="logo">
              <img v-show="isCollapsed" src="../assets/img/header-logo-mini.jpg" alt="logo">
            </div>
            <Slid :urlRouter="$route.path" :isCollapsed="isCollapsed"></Slid>
          </Sider>
          <Layout>
              <Header>
                <Head @sliderToggle="sliderToggle"></Head>
              </Header>
              <Content>
                <router-view></router-view>
              </Content>
              <Footer>Copyright © 武智科技2017. All rights reserved.</Footer>
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
<style>
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
  .ivu-layout-sider {
    overflow: hidden;
  }
  .ivu-layout-sider .ivu-layout-sider-children > ul {
    height: 100%;
    overflow-y: scroll;
    margin-right: -20px;
    padding-bottom: 64px;
  }
  .ivu-layout-content {
    padding: 24px;
    height: calc(100% - 80px);
    overflow: auto;
  }
  .ivu-layout-header {
    position: relative;
    z-index: 2;
    background: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 3px 2px;
  }
  .ivu-layout-footer {
    position: relative;
    padding: 10px 20px;
    background: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.1) 0px -2px 3px 2px;
    text-align: center;
  }
</style>