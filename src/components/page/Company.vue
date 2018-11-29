<template>
  <div>
    <Button style="margin-bottom: 10px;" type="primary" @click="temp.modal1 = true">{{msg.buttonText}}</Button>
      <Table stripe editable :columns="columns1" :data="data1"></Table>
      <div style="margin: 10px;overflow: hidden">
        <div style="float: right;">
          <Page :total="100" :current="1" @on-change="changePage"></Page>
        </div>
      </div>
      <Modal v-model="temp.modal1" :title="msg.buttonText" :footer-hide="true">
        <Form ref="formInline" :model="formInline" :rules="ruleInline" label-position="top">
          <FormItem label="公司名称" prop="companyName">
            <Input v-model="formInline.companyName"></Input>
          </FormItem>
          <FormItem label="公司类型" prop="companyType">
            <Input v-model="formInline.companyType"></Input>
          </FormItem>
          <FormItem label="地址" prop="companyAddress">
            <Input v-model="formInline.companyAddress"></Input>
          </FormItem>
          <FormItem label="邮箱" prop="companyEmail">
            <Input v-model="formInline.companyEmail"></Input>
          </FormItem>
          <FormItem>
            <Button type="primary" @click="handleSubmit('formInline')">确定</Button>
            <Button @click="handleReset('formInline')" style="margin-left: 8px">重置</Button>
          </FormItem>
        </Form>
      </Modal>
  </div>
</template>
<script>
  import Crumbs from '@/components/base/Crumbs.vue';
  export default {
    data() {
      return {
        msg: {
          title: document.title,
          buttonText:"添加新公司"
        },
        temp: {
          modal1: false
        },
        formInline: {
          companyName: '',
          companyType: '',
          companyAddress: '',
          companyEmail: ''
        },
        ruleInline: {
          companyName: [{
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          }],
          companyType: [{
            required: true,
            message: '请选择类型',
            trigger: 'blur'
          }, {
            type: 'string',
            len: 11,
            message: '手机号11位',
            trigger: 'blur'
          }],
          companyAddress: [{
            required: true,
            message: '请输入地址',
            trigger: 'blur'
          }],
          companyEmail: [{
            required: true,
            message: '请输入邮箱',
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
            sortable: true,
            width: 80
          },
          {
            title: '公司名称',
            key: 'name',
            sortable: true,
            editable: true
          },
          {
            title: '公司类型',
            key: 'type',
            width: 90
          },
          {
            title: '地址',
            key: 'address'
          },
          {
            title: '公众号',
            key: 'wechatpub'
          },
          {
            title: '商户号',
            key: 'paymentnum'
          },
          {
            title: '邮箱',
            key: 'email'
          },
          {
            title: 'Logo',
            key: 'logo',
            sortable: true
          },
          {
            title: '创建时间',
            key: 'date',
            sortable: true,
            width: 200
          },
          {
            title: '操作',
            key: 'action',
            width: 340,
            render: (h, params) => {

              if(params.row.type == "B"){
                /* type of B */
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
                        console.log(params.index);
                      }
                    }
                  }, '设置管理员'),

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
                  }, '设置功能'),

                  h('Button', {
                    props: {
                      type: 'success',
                      size: 'small'
                    },
                    style: {
                      marginRight: '5px'
                    },
                    on: {
                      click: () => {
                        console.log(params.index);
                      }
                    }
                  }, '查看下级用户'),

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
              } else {

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
                        console.log(params.index);
                      }
                    }
                  }, '设置管理员'),

                  h('Button', {
                    props: {
                      type: 'success',
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
                  }, '查看用户'),

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
          title: 'User Info',
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
          let companyType = (Math.floor(Math.random() * 2 + 1) == 2 ? "B":"C");
          data.push({
            id: i,
            name: "公司 " + Math.floor(Math.random() * 100 + 1),
            type: companyType,
            address: "地址",
            wechatpub: "asdhakshk" + (Math.floor(Math.random() * 2 + 1) == 2 ? 'A':'B'),
            paymentnum: "131" + Math.floor(Math.random() * 100000000 + 1),
            email: (Math.floor(Math.random() * 2 + 1) == 2 ? true:false),
            logo: "logo",
            date: new Date()
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
  }
</script>
