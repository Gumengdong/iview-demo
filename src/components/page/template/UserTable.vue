<template>
  <div>
    <Table stripe editable :columns="columns1" :data="data1"></Table>
    <div style="margin: 10px;overflow: hidden">
      <div style="float: right;">
        <Page :total="100" :current="1" @on-change="changePage"></Page>
      </div>
    </div>
  </div>
</template>

<script>
  import {timestampToTime} from '@/utils/utils.js';
  export default {
    data() {
      return {
        msg: {
          title: document.title
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
          }
        ],

        data1: this.mockTableData1()
      }
    },
    methods: {
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
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
