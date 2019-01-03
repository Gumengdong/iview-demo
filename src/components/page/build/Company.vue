<template>
  <div>
    <Crumbs :title="msg.title"></Crumbs>
    <Card>
      <Button style="margin-bottom: 10px;" type="primary" @click="modalShow('add')">{{msg.buttonText}}</Button>
      <Table stripe editable :columns="columns1" :data="data1"></Table>
      <div style="margin: 10px;overflow: hidden">
        <div style="float: right;">
          <Page :total="pageMsg.total" :current="pageMsg.current" :page-size="pageMsg.size" @on-change="changePage"></Page>
        </div>
      </div>
      <Modal v-model="temp.modal1" :title="msg.buttonText" :footer-hide="true">
        <CompanyForm :TempCompanyFormData="CompanyFormData"></CompanyForm>
      </Modal>
    </Card>
  </div>
</template>

<script>
  import Crumbs from '@/components/base/Crumbs.vue';
  import CompanyForm from "@/components/page/template/CompanyForm.vue";
  import {timestampToTime, getCookie} from '@/utils/utils.js';
  export default {
    data() {
      return {
        msg: {
          title: document.title,
          buttonText:"添加新公司"
        },
        temp: {
          modal1: false,
          title1: ""
        },
        pageMsg: {
          total: 0,
          current: 1,
          size: 10
        },
        CompanyFormData: {
          type: ""
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
            key: 'wechatId'
          },
          {
            title: '商户号',
            key: 'paymentnum'
          },
          {
            title: '邮箱',
            key: 'email',
            sortable: true
          },
          {
            title: 'Logo',
            key: 'logo',
            width: 90,
            render: (h, params) => {
              return h("div", [
                h("img", {
                  attrs: {
                    src: params.row.logo
                  },
                  style: {
                    maxWidth: "60px",
                    maxHeight: "60px",
                    marginTop: "5px",
                    marginBottom: "5px"
                  },
                  on: {
                    click: () => {
                      this.$Modal.info({
                        title: "Logo",
                        content: '<img width="300" src=' + params.row.logo + ">",
                        closable: true
                      });
                    }
                  }
                })
              ]);
            }
          },
          {
            title: '创建时间',
            key: 'date',
            sortable: true,
            width: 150
          },
          {
            title: '操作',
            key: 'action',
            width: 300,
            render: (h, params) => {

              if(params.row.type == "500"){
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
                  }, '下级企业'),

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

        data1: []
      }
    },
    components: {
      Crumbs,
      CompanyForm
    },
    mounted: function(){
      this.mockTableData1();
    },

    methods: {
      modalShow(type, index) {
        this.temp.modal1 = true;
        if (type === "add") {
          this.temp.title1 = "添加新用户";
          this.CompanyFormData = {};
          this.CompanyFormData.type = "add";
        } else {
          this.temp.title1 = "编辑";
          this.CompanyFormData = this.data1[index];
          this.CompanyFormData.type = "edit";
        }
      },
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
        let temp = this;
        let mydata = JSON.stringify({
          current: this.pageMsg.current
        });
        this.axios.get("/company/list", mydata,{
          headers: {
            token: getCookie("token")
          }
        }).then(function(response) {
          if (response.data.code == "200") {
            temp.data1 = response.data.data.records;
            temp.pageMsg.total = response.data.data.total
          }
        }).catch(function(response) {
          console.log(response);
        });
      },
      changePage() {
        // The simulated data is changed directly here, and the actual usage scenario should fetch the data from the server
        this.data1 = this.mockTableData1();
      }
    }
  }
</script>
