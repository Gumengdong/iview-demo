<template>
  <div class="ivu-content">
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
  </div>
</template>

<script>
export default {
  name: 'Role',
  data () {
    return {
      msg:"Role"
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
