<template>
  <Form ref="loginForm" :model="form">
    <FormItem prop="userName">
      <Input v-model="form.username" placeholder="请输入用户名">
        <span slot="prepend">
          <Icon :size="16" type="ios-person"></Icon>
        </span>
      </Input>
    </FormItem>
    <FormItem prop="password">
      <Input type="password" v-model="form.password" placeholder="请输入密码">
        <span slot="prepend">
          <Icon :size="14" type="md-lock"></Icon>
        </span>
      </Input>
    </FormItem>
    <FormItem>
      <Button @click="handleSubmit" type="primary" long>登录</Button>
    </FormItem>
  </Form>
</template>
<script>
  import {getCookie,setCookie} from '../../utils/utils.js';
  export default {
    name: 'LoginForm',
    data () {
      return {
        form: {
          username: 'super_admin',
          password: ''
        }
      }
    },
    /*beforeCreate() {
      if(this.$store.state.isLogin === 100){
        this.$router.push('/manage');
      }
    },*/
    methods: {
      handleSubmit () {
        var temp = this;
        if (this.form.username == undefined || this.form.username == "") {
          this.$Message.error('请输入账号');
          return false;
        }
        if (this.form.password == undefined || this.form.password == "") {
          this.$Message.error('请输入密码');
          return false;
        }
        var mydata = "username=" + this.form.username + "&password=" + this.form.password;
        this.axios.post('/company/companyLogin', mydata, {
          header: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }).then(function(response) {
          console.log(response);
          if (response.data.code == 200) {
            temp.$Message.success('登录成功');
            setCookie("token","super_admin");
            temp.$store.commit('changeLogin', '100');
            setTimeout(function() {
              temp.$router.push('/manage');
            }.bind(temp), 800);
          } else {
            temp.$Message.error(response.data.msg);
          }
        }).
        catch (function(response) {
          console.log(response);
        });
      }
    }
  }
</script>
