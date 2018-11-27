<template>
  <div class="login">

    <Row>
      <Col :xs="{ span: 16, offset: 4 }" :sm="{ span: 10, offset: 12 }" :md="{ span: 7, offset: 14 }" :lg="{ span: 6, offset: 16 }">
        <Card icon="log-in" title="欢迎登录" :bordered="false">
          <div class="form-con">
            <LoginForm></LoginForm>
            <p class="login-tip">输入任意用户名和密码即可</p>
          </div>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
  import LoginForm from '@/components/base/Login-Form.vue';
  export default {
    name: 'test',
    data () {
      return {
        msg: "test"
      }
    },
    components: {
      LoginForm
    }
  };
</script>

<style scoped>
  .login {
    width: 100%;
    height: 100%;
    background-color: #eee;
    position: relative;
  }
  .ivu-card {
    margin: 150px auto 0;
    min-width: 280px;
    max-width: 400px;
  }
  .login-con-header {
    font-size: 16px;
    font-weight: 300;
    text-align: center;
    padding: 30px 0;
  }
  .login-con .form-con {
    padding: 10px 0 0;
  }
  .login-con .login-tip {
    font-size: 10px;
    text-align: center;
    color: #c3c3c3;
  }
</style>
