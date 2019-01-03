<template>
  <Form ref="formInline" :model="formInline" :rules="ruleInline" label-position="top">
    <FormItem label="公司名称" prop="companyName">
      <Input v-model="formInline.companyName" placeholder="请输入公司名称"></Input>
    </FormItem>
    <FormItem label="地址" prop="companyAddress">
      <Input v-model="formInline.companyAddress" placeholder="请输入公司地址"></Input>
    </FormItem>
    <FormItem label="邮箱" prop="companyEmail">
      <Input v-model="formInline.companyEmail" placeholder="请输入公司邮箱"></Input>
    </FormItem>
    <Form-item label="公司类型" prop="companyType">
      <Select v-model="formInline.companyType" placeholder="请选择公司类型">
        <Option value="1">空间运营商</Option>
        <Option value="2">入驻企业</Option>
      </Select>
    </Form-item>
    <FormItem>
      <Button type="primary" @click="handleSubmit('formInline')">确定</Button>
      <Button @click="handleReset('formInline')" style="margin-left: 8px">重置</Button>
    </FormItem>
  </Form>
</template>

<script>
  export default {
    props: ['TempCompanyFormData'],
    data() {
      return {
        msg: {
          title: document.title
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
            trigger: 'change'
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
      };
    },
    methods: {
      handleSubmit(name) {
        this.$refs[name].validate(valid => {
          if (valid) {
            this.$Message.success("添加成功");
            this.temp.modal1 = false;
          }
        });
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
