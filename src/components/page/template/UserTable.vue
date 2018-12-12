<template>
  <div>
    <Card>
      <Button style="margin-bottom: 10px;" type="primary" @click="temp.modal1 = true">{{msg.buttonText}}</Button>
      <Table stripe editable :columns="columns1" :data="data1"></Table>
      <div style="margin: 10px;overflow: hidden">
        <div style="float: right;">
          <Page :total="100" :current="1" @on-change="changePage"></Page>
        </div>
      </div>
      <Modal v-model="temp.modal1" :title="msg.buttonText" :footer-hide="true">
        <Form ref="formInline" :model="formInline" :rules="ruleInline" label-position="top">
          <FormItem label="名称" prop="username">
            <Input v-model="formInline.username"></Input>
          </FormItem>
          <FormItem label="手机号" prop="phone">
            <Input v-model="formInline.phone" :maxlength="11"></Input>
          </FormItem>
          <FormItem>
            <Button type="primary" @click="handleSubmit('formInline')">确定</Button>
            <Button @click="handleReset('formInline')" style="margin-left: 8px">重置</Button>
          </FormItem>
        </Form>
      </Modal>
    </Card>
  </div>
</template>

<script>
  import Crumbs from '@/components/base/Crumbs.vue';
  import {timestampToTime} from '@/utils/utils.js';
  export default {
    data() {
      return {
        msg: {
          title: document.title,
          buttonText:"添加新用户"
        },
        temp: {
          modal1: false
        },
        formInline: {
          username: '',
          phone: ''
        },
        ruleInline: {
          username: [{
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          }],
          phone: [{
            required: true,
            message: '请输入手机号',
            trigger: 'blur'
          }, {
            pattern: /^1[34578]\d{9}$/,
            message: '请输入正确格式',
            trigger: 'blur'
          }]
        },
        columns1: [
          {
            type: 'selection',
            width: 60,
            align: 'center'
          },
          {
            type: 'index',
            width: 60,
            align: 'center'
          },
          {
            title: 'ID',
            key: 'id',
            sortable: true
          },
          {
            title: '名称',
            key: 'name',
            sortable: true,
            editable: true
          },
          {
            title: '头像',
            key: 'headurl'
          },
          {
            title: '手机号',
            key: 'phone',
            filters: [
              {
                label: '1311',
                value: '1311'
              },
              {
                label: '1312',
                value: '1312'
              }
            ],
            filterMethod(value, row) {
              return row.phone.indexOf(value) > -1;
            }
          },
          {
            title: '所属公司',
            key: 'company'
          },
          {
            title: '绑定微信',
            key: 'bingwechat'
          },
          {
            title: '创建时间',
            key: 'date',
            sortable: true
          },
          {
            title: '操作',
            key: 'action',
            width: 180,
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.show(params.index);
                    }
                  }
                }, '查看'),

                h('Button', {
                  props: {
                    type: 'info',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      console.log(this.columns1);
                      console.log(this.data1[params.index]);
                    }
                  }
                }, '编辑'),

                h('Poptip', {
                  props: {
                    confirm: true,
                    title: '你确定要删除吗？',
                    placement: 'left'
                  },
                  on: {
                    'on-ok': () => {
                      this.remove(params.index)
                      // vm.$emit('on-delete', params)
                      // vm.$emit('input', params.data1.filter((item, index) => index !== params.row.initRowIndex))
                    },
                    'on-cancel': () => {
                      console.log("cancel");
                    }
                  }
                }, [
                    h('Button', {
                      props: { type: 'error', size: 'small' },
                      style: { marginRight: '5px' }
                    }, '删除')
                  ])
              ]);
            }
          }
        ],

        data1: this.mockTableData1()
      }
    },
    components: {
      Crumbs
    },
    methods: {
      show (index) {
        let cont = "";
        for (let i = 0; i < this.columns1.length; i++) {
          if (this.columns1[i].title != undefined && this.columns1[i].key != "action") {
            cont += this.columns1[i].title + "：" + this.data1[index][this.columns1[i].key] + "<br>";
          }
        }
        this.$Modal.warning({
          title: '用户信息',
          content: cont,
          closable: true
        })
      },
      remove (index) {
        this.data1.splice(index, 1);
      },
      mockTableData1() {
        let data = [];
        for (let i = 0; i < 10; i++) {
          data.push({
            id: i,
            name: "Mike " + Math.floor(Math.random() * 100 + 1),
            headurl: "url",
            phone: "131" + Math.floor(Math.random() * 100000000 + 1),
            company: "公司" + (Math.floor(Math.random() * 2 + 1) == 2 ? 'a':'b'),
            bingwechat: (Math.floor(Math.random() * 2 + 1) == 2 ? true:false),
            date: timestampToTime(new Date())
          })
        }
        return data;
      },
      changePage() {
        // The simulated data is changed directly here, and the actual usage scenario should fetch the data from the server
        this.data1 = this.mockTableData1();
      },
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('Success!');
            this.temp.modal1 = false;
          }
        })
      },
      handleReset(name) {
        this.$refs[name].resetFields();
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
