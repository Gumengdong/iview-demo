<template>
  <div>
    <Crumbs :title="msg.title"></Crumbs>
    <Card>
      <Button style="margin-bottom: 10px;" type="primary" @click="temp.modal1 = true">{{msg.buttonText}}</Button>
      <Table stripe editable :columns="columns1" :data="data1"></Table>
      <div style="margin: 10px;overflow: hidden">
        <div style="float: right;">
          <Page :total="20" :current="1" @on-change="changePage"></Page>
        </div>
      </div>
      <Modal v-model="temp.modal1" :title="msg.buttonText" :footer-hide="true">
      </Modal>

      <Modal v-model="temp.modal2" title="查看成员" :footer-hide="true" width="80">
        <UserTable></UserTable>
      </Modal>
    </Card>
  </div>
</template>

<script>
  import Crumbs from '@/components/base/Crumbs.vue';
  import UserTable from '@/components/page/template/UserTable.vue';
  import {timestampToTime} from '@/utils/utils.js';
  export default {
    name: 'Role',
    data () {
      return {
        msg: {
          title: document.title,
          buttonText: "添加新角色"
        },
        temp: {
          modal1: false,
          modal2: false
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
            title: '权限',
            key: 'auth'
          },
          {
            title: '描述',
            key: 'desc'
          },
          {
            title: '创建时间',
            key: 'date',
            sortable: true
          },
          {
            title: '操作',
            key: 'action',
            width: 240,
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
                      this.showInfo(params.index);
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

                h('Button', {
                  props: {
                    type: 'warning',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.temp.modal2 = true;
                    }
                  }
                }, '查看成员'),

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
                      props: { type: 'error', size: 'small' }
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
      Crumbs,
      UserTable
    },
    methods: {
      showInfo (index) {
        let cont = "";
        for (let i = 0; i < this.columns1.length; i++) {
          if (this.columns1[i].title != undefined && this.columns1[i].key != "action") {
            cont += this.columns1[i].title + "：" + this.data1[index][this.columns1[i].key] + "<br>";
          }
        }
        this.$Modal.info({
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
          data.push({
            id: i,
            name: "管理员 " + Math.floor(Math.random() * 100),
            auth: "权限" + Math.floor(Math.random() * 2),
            desc: "描述",
            date: timestampToTime(new Date())
          })
        }
        return data;
      },
      changePage() {
        this.data1 = this.mockTableData1();
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
