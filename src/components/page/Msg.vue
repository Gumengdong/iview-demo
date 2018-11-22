<template>
  <div>
    <Breadcrumb style="margin-bottom:20px">
      <BreadcrumbItem to="/home">首页</BreadcrumbItem>
      <BreadcrumbItem>消息中心</BreadcrumbItem>
    </Breadcrumb>
    <Card>
      {{msg}}

      <Poptip
        confirm
        title="确定要删除该项目"
        @on-ok="ok"
        @on-cancel="cancel">
        <Button>删除</Button>
      </Poptip>
      <Poptip
        confirm
        title="Are you sure delete this task?"
        @on-ok="ok"
        @on-cancel="cancel"
        ok-text="yes"
        cancel-text="no">
        <Button>Internationalization</Button>
      </Poptip>
    </Card>
  </div>
</template>

<script>
export default {
  name: 'Msg',
  data () {
    return {
      msg:"Msg"
    }
  },
  methods: {
    ok() {
      this.$Message.info('You click ok');
    },
    cancel() {
      this.$Message.info('You click cancel');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
