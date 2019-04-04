<template>
  <div>
    <!-- <Crumbs :title="msg.title"></Crumbs> -->
    <Card>
      <p slot="title">
        <Icon type="ios-analytics"></Icon>
        {{msg.text}}
      </p>
      <Row type="flex" justify="center" align="middle" class="countto-page-row">
        <div class="count-to-con">
          <div>服务企业：{{msg.sum.company}}个，服务用户：{{msg.sum.user}}个，运行时间：{{msg.sum.worked}}</div>
        </div>
      </Row>
    </Card>
    <Card style="margin-top:20px;">
      <Row>
        <Col :xs="24" :sm="8" :md="8" :lg="8">
          <div>
            <p>网关设备20个</p>
            <p>电表设备18个</p>
          </div>
        </Col>
        <Col :xs="24" :sm="8" :md="8" :lg="8">
          <div>
            <p>开关设备120个</p>
            <p>插座设备30个</p>
          </div>
        </Col>
        <Col :xs="24" :sm="8" :md="8" :lg="8">
          <div>
            <p>空调设备90个</p>
          </div>
        </Col>
      </Row>
    </Card>
  </div>
</template>

<script>
  import Crumbs from '@/components/base/Crumbs.vue';
  export default {
    name: 'Welcome',
    data() {
      return {
        msg: {
          text: "Welcome to used LVYI platform",
          title: document.title,
          sum: {
            company: "20",
            user: "89",
            worked: "1年2月3天4小时5分钟6秒"
          }
        },
      }
    },
    components: {
      Crumbs
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
