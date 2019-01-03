<template>
  <div class="header-bar">
    <!-- <Icon :class="['sider-trigger-a', 'collapsed']" type="md-menu" size="24" @click="sliderToggle"></Icon> -->
    <div class="custom-content-con">
      
      <div class="user-avator-dropdown">
        <Dropdown @on-click="handleClick">
          <Badge :dot="!!messageUnreadCount">
            <Avatar :src="userAvator"/>
          </Badge>
          <Icon :size="18" type="md-arrow-dropdown"></Icon>
          <DropdownMenu slot="list">
            <DropdownItem name="userinfo">
              <Icon type="ios-person-outline" :size="18" />
              个人信息
            </DropdownItem>
            <DropdownItem name="message">
              <Icon type="ios-chatbubbles-outline" :size="18" />
              消息中心
              <Badge style="margin-left: 10px" :count="messageUnreadCount"></Badge>
            </DropdownItem>
            <DropdownItem name="logout">
              <Icon type="ios-log-out" :size="18" />
              退出登录
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>

      <div v-if="showFullScreenBtn" class="full-screen-btn-con">
        <Tooltip :content="value ? '退出全屏' : '全屏'" placement="bottom">
          <Icon @click.native="handleChange" :type="value ? 'md-contract' : 'md-expand'" :size="23"></Icon>
        </Tooltip>
      </div>

    </div>
  </div>
</template>

<script>
import '../../assets/css/head.less'
export default {
  name: 'Header',
  data () {
    return {
      msg:"Header",
      theme: 'dark',
      hideTrigger: true,
      value: false,
      userAvator: "https://file.iviewui.com/dist/a0e88e83800f138b94d2414621bd9704.png",
      messageUnreadCount: 3
    }
  },
  computed: {
    showFullScreenBtn () {
      return window.navigator.userAgent.indexOf('MSIE') < 0
    }
  },
  methods: {
    sliderToggle: function(){
      this.hideTrigger = !this.hideTrigger;
      this.$emit('sliderToggle', this.hideTrigger);
    },

    handleFullscreen () {
      let main = document.body
      if (this.value) {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen()
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen()
        }
      } else {
        if (main.requestFullscreen) {
          main.requestFullscreen()
        } else if (main.mozRequestFullScreen) {
          main.mozRequestFullScreen()
        } else if (main.webkitRequestFullScreen) {
          main.webkitRequestFullScreen()
        } else if (main.msRequestFullscreen) {
          main.msRequestFullscreen()
        }
      }
    },
    handleChange () {
      this.handleFullscreen()
    },

    logout() {
      this.$Modal.confirm({
        title: '提示',
        content: '<p>确定退出当前账号？</p>',
        closable: true,
        onOk: () => {
          this.$router.push({
            path: '/login'
          });
        }
      });
    },
    message () {
      this.$router.push({
        path: '/build/msg'
      });
    },
    userinfo () {
      this.$router.push({
        path: '/build/userinfo'
      });
    },
    handleClick (name) {
      switch (name) {
        case 'logout': this.logout()
          break;
        case 'message': this.message()
          break;
        case 'userinfo': this.userinfo()
          break;
        default:
      }
    }
  },

  mounted () {
    let isFullscreen = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen
    isFullscreen = !!isFullscreen
    document.addEventListener('fullscreenchange', () => {
      this.value = !this.value;
      // this.$emit('input', !this.value)
      // this.$emit('on-change', !this.value)
    })
    document.addEventListener('mozfullscreenchange', () => {
      this.value = !this.value;
      // this.$emit('input', !this.value)
      // this.$emit('on-change', !this.value)
    })
    document.addEventListener('webkitfullscreenchange', () => {
      this.value = !this.value;
      // this.$emit('input', !this.value)
      // this.$emit('on-change', !this.value)
    })
    document.addEventListener('msfullscreenchange', () => {
      this.value = !this.value;
      // this.$emit('input', !this.value)
      // this.$emit('on-change', !this.value)
    })
    // this.$emit('input', isFullscreen)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
