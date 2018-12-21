<template>
  <div>
    <Crumbs :title="msg.title"></Crumbs>
    <Card>
      <Form :model="companyInfo" :label-width="80">
        <Row>
          <Col :xs="24" :sm="24" :md="24" :lg="8">
            <div class="head-img" style="text-align:center;">
              <img :src="companyInfo.logo" style="width:240px;height:240px;" alt="">
            </div>
          </Col>
          <Col :xs="24" :sm="24" :md="24" :lg="16">
            <Col :xs="24" :sm="24" :md="12" :lg="12">
              <FormItem label="公司名">
                <Input v-model="companyInfo.name" placeholder="请输入公司名"></Input>
              </FormItem>
            </Col>
            <Col :xs="24" :sm="24" :md="12" :lg="12">
              <FormItem label="手机号">
                <Input v-model="companyInfo.mobile" placeholder="请输入手机号" readonly></Input>
              </FormItem>
            </Col>
            <Col :xs="24" :sm="24" :md="12" :lg="12">
              <FormItem label="邮箱">
                <Input v-model="companyInfo.email" placeholder="请输入邮箱"></Input>
              </FormItem>
            </Col>
            <Col :xs="24" :sm="24" :md="12" :lg="12">
              <FormItem label="地址">
                <Input v-model="companyInfo.address" placeholder="请输入地址" readonly></Input>
              </FormItem>
            </Col>
            <Col :xs="24" :sm="24" :md="12" :lg="12">
              <FormItem label="用户级别">
                <Select v-model="companyInfo.type">
                  <Option value="1000" disabled="disabled">超级管理员</Option>
                  <Option value="500" disabled="disabled">管理员</Option>
                  <Option value="400" disabled="disabled">用户</Option>
                </Select>
              </FormItem>
            </Col>
            <Col :xs="24" :sm="24" :md="12" :lg="12">
              <FormItem label="创建时间">
                <Row>
                  <Col span="10">
                    <DatePicker type="date" :editable="false" placeholder="选择日期" v-model="createTime.date" readonly></DatePicker>
                  </Col>
                  <Col span="1" style="text-align: center">-</Col>
                  <Col span="10">
                    <TimePicker format="HH:mm:ss" :editable="false" type="time" placeholder="选择时间" v-model="createTime.time" readonly></TimePicker>
                  </Col>
                </Row>
              </FormItem>
            </Col>
            <Col :xs="24" :sm="24" :md="12" :lg="12">
              <FormItem label="性别">
                <RadioGroup v-model="companyInfo.gender">
                  <Radio :label="0" disabled="disabled">男</Radio>
                  <Radio :label="1" disabled="disabled">女</Radio>
                </RadioGroup>
              </FormItem>
            </Col>
            <Col :xs="24" :sm="24" :md="12" :lg="12">
              <FormItem label="绑定微信">
                <i-switch v-model="companyInfo.bindWechat" size="large" disabled="disabled">
                  <span slot="open">已绑</span>
                  <span slot="close">未绑</span>
                </i-switch>
              </FormItem>          
            </Col>
          </Col>
          
        </Row>
        <Row>
          <Col :xs="{ span: 24, offset: 0 }" :sm="{ span: 24, offset: 0 }" :md="{ span: 8, offset: 8 }" :lg="{ span: 8, offset: 8 }">
            <FormItem>
              <Button type="primary" @click="ok">确定</Button>
              <Button style="margin-left: 8px" @click="cancel">取消</Button>
            </FormItem>
          </Col>
        </Row>
      </Form>
      
    </Card>
  </div>
</template>
<script>
  import Crumbs from '@/components/base/Crumbs.vue';
  import {timestampToTime, getCookie} from '@/utils/utils.js';
  export default {
    data() {
      return {
        msg: {
          title: document.title
        },
        companyInfo: {},
        createTime: {
          "date": "",
          "time": ""
        }
      }
    },
    components: {
      Crumbs
    },
    mounted: function(){
      this.getInfo();
    },
    methods: {
      getInfo(){
        let temp = this;
        this.axios.get("/company/info", {
          headers: {
            token: getCookie("token")
          }
        }).then(function(response) {
          if (response.data.code == "200") {
            temp.companyInfo = response.data.data;
            temp.companyInfo.logo = "https://file.iviewui.com/dist/a0e88e83800f138b94d2414621bd9704.png";
            temp.createTime.date = timestampToTime(response.data.data.createTime).split(" ")[0];
            temp.createTime.time = timestampToTime(response.data.data.createTime).split(" ")[1];
          }
        }).catch(function(response) {
          console.log(response);
        });
      },
      ok(){
        this.$Message.success('提交成功');
        setTimeout(() => {
          this.$router.go(-1);
        }, 1000);
      },
      cancel(){
        // back
        this.$router.go(-1);
      }
    }
  };
</script>