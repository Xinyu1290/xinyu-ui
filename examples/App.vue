<template>
  <div id="app">
<!--    <xy-button type="primary" @click="a">我是我是</xy-button>-->
<!--    <br>-->
    <xy-button type="primary" @click="visiable=true" >这是一个dialog</xy-button>
          <xy-Dialog :visiable.sync="visiable" title="表单"  width="30%">
            <xy-Form :model="form" >
              <xy-FormItem label="账号">
                <xy-Input  placeholder="请输入账号"  v-model="form.name" />
              </xy-FormItem>
              <xy-FormItem label="密码">
                <xy-Input  type="password"   placeholder="请输入密码" v-model="form.password" />
              </xy-FormItem>
            </xy-Form>
        <div slot="footer" >
          <xy-button type="primary"  @click="visiable = false" >确定</xy-button>
          <xy-button @click="visiable = false" > 取消 </xy-button>
        </div>
        </xy-Dialog>
        <br>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      visiable:false,
      form:{
        name:'',
        password:'',
      }
    }
  },
  components: {

  },
  methods:{
    a(){
      console.log(1)
    }

  }
}
</script>

<style lang="sass" scoped>
</style>
