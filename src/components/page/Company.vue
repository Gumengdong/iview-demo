<template>
  <div>
    <Crumbs :title="msg.title"></Crumbs>
    <Card>
      <tree-table expand-key="name" :expand-type="false" :selectable="false" :columns="tableColumns1" :data="tableData1" :is-fold="true" >
      </tree-table>
    </Card>
  </div>
</template>
<script>
  import Crumbs from '@/components/base/Crumbs.vue';
  export default {
    data() {
      return {
        msg: {
          title: document.title
        },
        tableData1: [
          {
            name: 'Jack',
            sex: 'male',
            likes: ['football', 'basketball'],
            score: 10,
            children: [
              {
                name: 'Ashley',
                sex: 'female',
                likes: ['football', 'basketball'],
                score: 20
              },
              {
                name: 'Taki',
                sex: 'male',
                likes: ['football', 'basketball'],
                score: 10
              }
            ]
          },
          {
            name: 'Tom',
            sex: 'male',
            likes: ['football', 'basketball'],
            score: 20,
            children: [
              {
                name: 'Ashley',
                sex: 'female',
                likes: ['football', 'basketball'],
                score: 20
              }
            ]
          },
          {
            name: 'Tom',
            sex: 'male',
            likes: ['football', 'basketball'],
            score: 20
          },
          {
            name: 'Tom',
            sex: 'male',
            likes: ['football', 'basketball'],
            score: 20,
            children: [
              {
                name: 'Ashley',
                sex: 'female',
                likes: ['football', 'basketball'],
                score: 20
              },
              {
                name: 'Taki',
                sex: 'male',
                likes: ['football', 'basketball'],
                score: 10
              }
            ]
          }
        ],
        tableColumns1: [
          {
            type: 'index',
            width: 60,
            align: 'center'
          },
          {
            title: 'name',
            key: 'name',
            width: '400px'
          },
          {
            title: 'sex',
            key: 'sex',
            minWidth: '50px'
          },
          {
            title: 'score',
            key: 'score'
          },
          {
            title: 'likes',
            key: 'likes',
            minWidth: '200px'
          }
        ]
      }
    },
    components: {
      Crumbs
    }
  }
</script>
