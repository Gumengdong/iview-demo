<template>
  <Menu :active-name="menuitemSelect.subitem" :accordion="true" :open-names="[menuitemSelect.item]" theme="dark" width="auto" :class="menuitemClasses" v-show="!isCollapsed">
    <Submenu name="build">
      <template slot="title">
          <Icon type="ios-grid" size="18" />
          <span>基础数据</span>
      </template>
      <MenuItem name="build-user" to="/build/user">用户管理</MenuItem>
      <MenuItem name="build-role" to="/build/role">角色管理</MenuItem>
      <MenuItem name="build-company" to="/build/company">公司管理</MenuItem>
      <MenuItem name="build-auth" to="/build/auth">权限管理</MenuItem>
      <MenuItem name="build-module" to="/build/module">模块管理</MenuItem>
    </Submenu>
    <Submenu name="devices">
      <template slot="title">
          <Icon type="md-bulb" size="18" />
          <span>设备管理</span>
      </template>
      <MenuItem name="devices-Gateway">网关</MenuItem>
      <MenuItem name="devices-Device">飞比设备</MenuItem>
      <MenuItem name="devices-Aircondition">空调设备</MenuItem>
    </Submenu>
  </Menu>
</template>

<script>
export default {
  name: 'slide',
  data () {
    return {
      msg:"slide"
    }
  },
  props: ['isCollapsed','urlRouter'],
  computed: {
    menuitemClasses: function() {
      return [
        'menu-item',
        this.isCollapsed ? 'collapsed-menu' : ''
      ]
    },
    menuitemSelect: function() {
      let activeName = {
        "subitem": "",
        "item": ""
      };
      // console.log(this.$route.path);
      switch (this.$route.path){
        case '/build/user':
          activeName.subitem = "build-user";
          activeName.item = "build";
          break;
        case '/build/role':
          activeName.subitem = "build-role";
          activeName.item = "build";
          break;
        case '/build/company':
          activeName.subitem = "build-company";
          activeName.item = "build";
          break;
        case '/build/auth':
          activeName.subitem = "build-auth";
          activeName.item = "build";
          break;
        case '/build/module':
          activeName.subitem = "build-module";
          activeName.item = "build";
          break;
        default:
          activeName.subitem = "";
          activeName.item = "";
      }
      return activeName;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
</style>
