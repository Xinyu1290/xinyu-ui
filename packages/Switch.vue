<template>
  <div class="xy-switch" :class="{'is-checked':value}" @click="handleClick">
<!--    <input type="text">-->
    <span v-if="inactiveText" :style="{color:!value ?'#409EFF':''}">{{ inactiveText}}</span>
    <span class="xy-switch_core" ref="core">
      <span class="xy-switch_button"></span>
    </span>
    <span v-if="activeText" :style="{color:value ?'#409EFF':''}">{{activeText}}</span>
<!--    <input type="checkbox" class="xy-switch_input" :name="name" ref="input">-->
  </div>
</template>
<script>
export default {
  name: 'xySwitch',
  data () {
    return {
  left:'color:red'
    }
  },
  components: {
  },
  props: {
    value: {
      type: Boolean,
      defualt: false
    },
    activeColor: {
      type: String,
      defualt: ''
    },
    inactiveColor: {
      type: String,
      defualt: ''
    },
    inactiveText: {
      type: String,
      defualt: ''
    },
    activeText:{
      type: String,
      defualt: ''
    }
  },
  created() {
    if (this.isspan){
      console.log(21321)
    }
  },
  mounted () {
    // 修改开关颜色
    if (this.activeColor || this.inactiveColor) {
      let color = !this.value ? this.activeColor : this.inactiveColor
      this.$refs.core.style.borderColor = color
      this.$refs.core.style.backgroundColor = color
    }

    // 控制checkbox的值,input值同步value值
    // this.$refs.input.checked = this.value
  },
  watch: {
    'value' (e) {
      // 修改开关颜色
      if (this.activeColor || this.inactiveColor) {
        let color = !e ? this.activeColor : this.inactiveColor
        this.$refs.core.style.borderColor = color
        this.$refs.core.style.backgroundColor = color
      }
    }
  },
  methods: {
    handleClick () {
      this.$emit('input', !this.value)
      // 控制checkbox的值,input值同步value值
      // this.$refs.input.checked = this.value
    }
  }
}
</script>
<style lang="scss" scoped>
.xy-switch{
  display: inline-block;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  vertical-align: middle;
  .xy-switch_core{
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color .3s,background-color .3s;
    vertical-align: middle;
    .xy-switch_button{
      position:absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all .3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}
// 选中样式
.is-checked {
  .xy-switch_core{
    border-color: #409eff;
    background-color: #409eff;
    .xy-switch_button {
      transform: translateX(20px);
    }
  }
}

</style>
