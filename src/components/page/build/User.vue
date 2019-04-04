<template>
  <div>
    <Crumbs :title="msg.title"></Crumbs>
    <Card>
      <Button style="margin-bottom: 10px;" type="primary" @click="modalShow('add')">{{msg.buttonText}}</Button>
      <Table size="small" stripe editable :columns="columns1" :data="data1"></Table>
      <div style="margin: 10px;overflow: hidden">
        <div style="float: right;">
          <Page :total="pageMsg.total" :current="pageMsg.current" :page-size="pageMsg.size" @on-change="changePage"></Page>
        </div>
      </div>
      <Modal v-model="temp.modal1" :title="temp.title1" :footer-hide="true">
        <UserForm :TempUserFormData="UserFormData"></UserForm>
      </Modal>
    </Card>
  </div>
</template>

<script>
  import Crumbs from "@/components/base/Crumbs.vue";
  import UserForm from "@/components/page/template/UserForm.vue";
  import { timestampToTime, getCookie } from "@/utils/utils.js";
  export default {
    data() {
      return {
        msg: {
          title: document.title,
          buttonText: "添加新用户"
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
        UserFormData: {
          type: ""
        },
        columns1: [
          {
            type: "selection",
            align: "center",
            width: 60
          },
          {
            type: "index",
            align: "center",
            width: 60
          },
          {
            title: "ID",
            key: "id",
            sortable: true,
            width: 80
          },
          {
            title: "名称",
            key: "username",
            sortable: true,
            editable: true,
            minWidth: 120
          },
          {
            title: "角色",
            key: "role",
            minWidth: 80
          },
          {
            title: "头像",
            key: "headurl",
            minWidth: 100,
            render: (h, params) => {
              return h("div",
                {
                  style: {
                    textAlign: "center",
                    cursor: "pointer"
                  }
                }, [
                h("img", {
                  attrs: {
                    src: params.row.headurl
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
                        title: "头像",
                        content: '<img width="300" src=' + params.row.headurl + ">",
                        closable: true
                      });
                    }
                  }
                })
              ]);
            }
          },
          {
            title: "手机号",
            key: "phone",
            minWidth: 120,
            filters: [
              {
                label: "1311",
                value: "1311"
              },
              {
                label: "1312",
                value: "1312"
              }
            ],
            filterMethod(value, row) {
              return row.phone.indexOf(value) > -1;
            }
          },
          {
            title: "所属公司",
            key: "company",
            minWidth: 120
          },
          {
            title: "绑定微信",
            key: "bingwechat",
            minWidth: 120
          },
          {
            title: "创建时间",
            key: "date",
            sortable: true,
            minWidth: 160
          },
          {
            title: "操作",
            key: "action",
            minWidth: 180,
            render: (h, params) => {
              return h("div", [
                h(
                  "Button",
                  {
                    props: {
                      type: "primary",
                      size: "small"
                    },
                    style: {
                      marginRight: "5px"
                    },
                    on: {
                      click: () => {
                        this.show(params.index);
                      }
                    }
                  },
                  "查看"
                ),

                h(
                  "Button",
                  {
                    props: {
                      type: "info",
                      size: "small"
                    },
                    style: {
                      marginRight: "5px"
                    },
                    on: {
                      click: () => {
                        this.modalShow("edit", params.index);
                      }
                    }
                  },
                  "编辑"
                ),

                h(
                  "Poptip",
                  {
                    props: {
                      confirm: true,
                      title: "你确定要删除吗？",
                      placement: "left"
                    },
                    on: {
                      "on-ok": () => {
                        this.remove(params.index);
                        // vm.$emit('on-delete', params)
                        // vm.$emit('input', params.data1.filter((item, index) => index !== params.row.initRowIndex))
                      },
                      "on-cancel": () => {
                        console.log("cancel");
                      }
                    }
                  },
                  [
                    h(
                      "Button",
                      {
                        props: { type: "error", size: "small" },
                        style: { marginRight: "5px" }
                      },
                      "删除"
                    )
                  ]
                )
              ]);
            }
          }
        ],

        data1: []
      };
    },
    components: {
      Crumbs,
      UserForm
    },
    mounted: function(){
      this.mockTableData1();
    },
    methods: {
      modalShow(type, index) {
        this.temp.modal1 = true;
        if (type === "add") {
          this.temp.title1 = "添加新用户";
          this.UserFormData = {};
          this.UserFormData.type = "add";
        } else {
          this.temp.title1 = "编辑";
          this.UserFormData = this.data1[index];
          this.UserFormData.type = "edit";
        }
      },
      show(index) {
        let cont = "";
        cont += '<ul style="word-wrap: break-word;">';
        for (let i = 0; i < this.columns1.length; i++) {
          if (
            this.columns1[i].title != undefined &&
            this.columns1[i].key != "action"
          ) {
            cont +=
              "<li><span>" +
              this.columns1[i].title +
              "：</span><span>" +
              this.data1[index][this.columns1[i].key] +
              "</span></li>";
          }
        }
        cont += "</ul>";
        this.$Modal.warning({
          title: "用户信息",
          content: cont,
          closable: true
        });
      },
      remove(index) {
        this.data1.splice(index, 1);
      },
      mockTableData1() {
        let temp = this;
        let mydata = JSON.stringify({
          current: this.pageMsg.current
        });
        this.axios.get("/user/list", mydata,{
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
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
