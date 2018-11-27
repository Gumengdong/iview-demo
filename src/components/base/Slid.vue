<template>
  <Menu :active-name="menuitemSelect.subitem" :accordion="true" :open-names="[menuitemSelect.item]" theme="dark" width="auto" :class="menuitemClasses" v-show="!isCollapsed">
    <Submenu name="manage1">
      <template slot="title">
          <Icon type="ios-grid" size="18" />
          <span>基础数据</span>
      </template>
      <MenuItem name="manage1-user" to="/manage/user">用户管理</MenuItem>
      <MenuItem name="manage1-role" to="/manage/role">角色管理</MenuItem>
      <MenuItem name="manage1-company" to="/manage/company">公司管理</MenuItem>
    </Submenu>
    <Submenu name="home2">
      <template slot="title">
          <Icon type="md-bulb" size="18" />
          <span>设备管理</span>
      </template>
      <MenuItem name="home2-Gateway">网关</MenuItem>
      <MenuItem name="home2-Device">飞比设备</MenuItem>
      <MenuItem name="home2-Aircondition">空调设备</MenuItem>
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
      console.log(this.$route.path);
      switch (this.$route.path){
        case '/manage/user':
          activeName.subitem = "manage1-user";
          activeName.item = "manage1";
          break;
        case '/manage/role':
          activeName.subitem = "manage1-role";
          activeName.item = "manage1";
          break;
        case '/manage/company':
          activeName.subitem = "manage1-company";
          activeName.item = "manage1";
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
