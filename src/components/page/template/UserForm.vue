<template>
  <Form ref="formInline" :model="formInline" :rules="ruleInline" label-position="top">
    <FormItem label="名称" prop="username">
      <Input v-model="formInline.username"></Input>
    </FormItem>
    <FormItem label="手机号" prop="phone">
      <Input v-model="formInline.phone" :maxlength="11"></Input>
    </FormItem>
    <Form-item label="角色类型" prop="RoleType">
      <Select v-model="formInline.RoleType" placeholder="请选择角色">
        <Option value="1">角色1</Option>
        <Option value="2">角色2</Option>
      </Select>
    </Form-item>
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
  data() {
    return {
      msg: {
        title: document.title
      },
      formInline: {
        username: "",
        phone: "",
        RoleType: "",
        companyType: ""
      },
      ruleInline: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur"
          }
        ],
        phone: [
          {
            required: true,
            message: "请输入手机号",
            trigger: "blur"
          },
          {
            pattern: /^1[34578]\d{9}$/,
            message: "请输入正确格式",
            trigger: "blur"
          }
        ],
        RoleType: [
          {
            message: "请选择角色"
          }
        ],
        companyType: [
          {
            message: "请选择角色"
          }
        ]
      }
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
