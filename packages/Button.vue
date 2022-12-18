<template>
<button class="xy-button" :class="[`xy-button-${type}`,
{'is-plain':plain},
{'is-round':round},
{'is-circle':circle},
{'is-disabled':disabled}]"
        :disabled="disabled"
        @click="clickbut">
  <span><slot></slot></span>
</button>
</template>

<script>
export default {
  name: "xyButton",
  props: {
    type: {
      type: String,
      // 设置默认值：如果不传值，那么使用default
      default: 'defalut'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    // icon: {
    //   type: String,
    //   default: ''
    // },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  created() {
  },
  methods:{
    //给子组件注册一个点击事件
    clickbut(e){
      // console.log(e)
      this.$emit('click',e)
    }
  }
}
</script>
<style lang="scss" scoped>
.xy-button{
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #ffffff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  //禁止元素的文字被选中
  -moz-user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &:focus{
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}
.xy-button-primary{
  color:#fff;
  background-color: #409eff;
  border-color: #409eff;
  &:hover,
  &:focus{
    background: #66b1ff;
    background-color: #66b1ff;
    color: #fff;
  }
}
.xy-button-success{
  color:#fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:hover,
  &:focus{
    background: #85ce61;
    background-color: #85ce61;
    color: #fff;
  }
}
.xy-button-info{
  color:#fff;
  background-color: #909399;
  border-color: #909399;
  &:hover,
  &:focus{
    background: #a6a9ad;
    background-color: #a6a9ad;
    color: #fff;
  }
}
.xy-button-warning{
  color:#fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  &:hover,
  &:focus{
    background: #ebb563;
    background-color: #ebb563;
    color: #fff;
  }
}
.xy-button-danger{
  color:#fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:hover,
  &:focus{
    background: #f78989;
    background-color: #f78989;
    color: #fff;
  }
}
// 朴素按钮样式
.xy-button.is-plain{
  &:hover,
  &:focus{
    background: #fff;
    border-color: white;
    color: #409eff;
  }
}
.xy-button-primary.is-plain{
  color: #409eff;
  background: white;
  &:hover,
  &:focus{
    background: #409eff;
    border-color: #409eff;
    color: #fff;
  }
}
.xy-button-success.is-plain{
  color: #67c23a;
  background: white;
  &:hover,
  &:focus{
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
}
.xy-button-info.is-plain{
  color: #909399;
  background: white;
  &:hover,
  &:focus{
    background: #909399;
    border-color: #909399;
    color: #fff;
  }
}
.xy-button-warning.is-plain{
  color: #e6a23c;
  background: white;
  &:hover,
  &:focus{
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
}
.xy-button-danger.is-plain{
  color: #f56c6c;
  background: white;
  &:hover,
  &:focus{
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }
}
// round属性
.xy-button.is-round{
  border-radius: 20px;
  padding: 12px 23px;
}
// circle属性
.xy-button.is-circle{
  border-radius: 50%;
  padding: 12px;
}
// icon配套样式
.xy-button [class*=one-icon-]+span{
  margin-left: 5px;
}
// disabled属性
.xy-button.is-disabled{
  cursor: no-drop;
}
</style>