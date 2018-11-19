<template>
  <div>
    <Table :data="tableData1" :columns="tableColumns1" stripe></Table>
    <div style="margin: 10px;overflow: hidden">
      <div style="float: right;">
        <Page :total="100" :current="1" @on-change="changePage"></Page>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
        data () {
            return {
                tableData1: this.mockTableData1(),
                tableColumns1: [
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Status',
                        key: 'status'
                    },
                    {
                        title: 'Portrayal',
                        key: 'portrayal'
                    },
                    {
                        title: 'People',
                        key: 'people',
                    },
                    {
                        title: 'Sampling Time',
                        key: 'time'
                    },
                    {
                        title: 'Updated Time',
                        key: 'update'
                    }
                ]
            }
        },
        methods: {
            mockTableData1 () {
                let data = [];
                for (let i = 0; i < 10; i++) {
                    data.push({
                        name: 'Business' + Math.floor(Math.random () * 100 + 1),
                        status: Math.floor(Math.random () * 3 + 1),
                        portrayal: Math.floor(Math.random () * 5 + 1),
                        people: "131" + Math.floor(Math.random () * 100 + 1),
                        time: Math.floor(Math.random () * 7 + 1),
                        update: new Date()
                    })
                }
                return data;
            },
            changePage () {
                // The simulated data is changed directly here, and the actual usage scenario should fetch the data from the server
                this.tableData1 = this.mockTableData1();
            }
        }
    }
</script>
