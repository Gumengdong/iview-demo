<template>
  <div>
    <Crumbs :title="msg.title"></Crumbs>
    <Card>
      <Form :model="formItem" :label-width="80">
        <Row>
          <Col :xs="24" :sm="24" :md="24" :lg="8">
            <div class="head-img" style="width:120px;height:120px;">
              
            </div>
          </Col>
          <Col :xs="24" :sm="24" :md="24" :lg="16">
            <Col :xs="24" :sm="24" :md="12" :lg="12">
              <FormItem label="Input">
                <Input v-model="formItem.input" placeholder="Enter something..."></Input>
              </FormItem>
            </Col>
            <Col :xs="24" :sm="24" :md="12" :lg="12">
              <FormItem label="Select">
                <Select v-model="formItem.select">
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                  <Option value="3">3</Option>
                </Select>
              </FormItem>
            </Col>
            <Col :xs="24" :sm="24" :md="12" :lg="12">
              <FormItem label="DatePicker">
                <Row>
                  <Col span="11">
                    <DatePicker type="date" placeholder="Select date" v-model="formItem.date"></DatePicker>
                  </Col>
                  <Col span="2" style="text-align: center">-</Col>
                  <Col span="11">
                    <TimePicker type="time" placeholder="Select time" v-model="formItem.time"></TimePicker>
                  </Col>
                </Row>
              </FormItem>
            </Col>
            <Col :xs="24" :sm="24" :md="12" :lg="12">
              <FormItem label="Radio">
                <RadioGroup v-model="formItem.radio">
                  <Radio label="male">Male</Radio>
                  <Radio label="female">Female</Radio>
                </RadioGroup>
              </FormItem>
            </Col>
            <Col :xs="24" :sm="24" :md="12" :lg="12">
              <FormItem label="Checkbox">
                <CheckboxGroup v-model="formItem.checkbox">
                  <Checkbox label="Eat"></Checkbox>
                  <Checkbox label="Sleep"></Checkbox>
                  <Checkbox label="Run"></Checkbox>
                  <Checkbox label="Movie"></Checkbox>
                </CheckboxGroup>
              </FormItem>
            </Col>
            <Col :xs="24" :sm="24" :md="12" :lg="12">
              <FormItem label="Switch">
                <i-switch v-model="formItem.switch" size="large">
                  <span slot="open">On</span>
                  <span slot="close">Off</span>
                </i-switch>
              </FormItem>          </Col>
            <Col :xs="24" :sm="24" :md="12" :lg="12">
              <FormItem label="Slider">
                <Slider v-model="formItem.slider" range></Slider>
              </FormItem>
            </Col>
            <Col :xs="24" :sm="24" :md="12" :lg="12">
              <FormItem label="Text">
                <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
              </FormItem>
            </Col>
          </Col>
          
        </Row>
        <Row>
          <Col :xs="{ span: 24, offset: 0 }" :sm="{ span: 24, offset: 0 }" :md="{ span: 8, offset: 8 }" :lg="{ span: 8, offset: 8 }">
            <FormItem>
              <Button type="primary">Submit</Button>
              <Button style="margin-left: 8px">Cancel</Button>
            </FormItem>
          </Col>
        </Row>
      </Form>
      
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
        formItem: {
          input: '',
          select: '1',
          radio: 'male',
          checkbox: [],
          switch: true,
          date: '',
          time: '',
          slider: [20, 50],
          textarea: ''
        }
      }
    },
    components: {
      Crumbs
    }
  };
</script>