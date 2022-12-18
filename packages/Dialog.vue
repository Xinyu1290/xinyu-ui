<template>

  <transition name="dialog-fade">
    <!-- 遮罩 -->
    <div class="xy-dialog_wrapper" v-show="visiable" @click.self="closeDialog">
      <div :class="['xy-dialog', mimicry ? 'is-mimicry' : '']" :style="{ width: width, 'margin-top': top }">
<!--        标题-->
        <div class="xy-dialog_header">
          <!-- title支持slot插槽 -->
          <slot name="title">
            <span class="xy-dialog_title">{{title}}</span>
          </slot>
          <xy-button circle class="xy-dialog_headerbtn" @click="closeDialog">
            <div>关闭</div>
          </xy-button>
        </div>
<!--        body部分-->
        <div class="xy-dialog_body">
          <!-- 默认插槽 -->
          <slot></slot>
        </div>
<!--        footer部分-->
<!--$slots代表全部的插槽 $slots.footer 就代表是不是传递了 footer  如果没传 就现实的是slot name=footer 传入了就显示传入的-->
        <div class="xy-dialog_footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'xyDialog',
  data() {
    return {}
  },
  methods: {
    closeDialog() {
      // this.$emit('a', false)
      this.$emit('update:visiable', false)
    }
  },
  components: {},
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '50%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    visiable: {
      type: Boolean,
      default: false
    },
    mimicry: {
      type: Boolean,
      default: false
    }
  },
  created() {

  },
  mounted() {

  },
  computed: {},
  watched: {}
}
</script>
<style scoped lang="scss">
// 重点学习遮罩的实现
.xy-dialog_wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: -3vh;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0, 0, 0, 0.5);
  .xy-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    &_header {
      padding: 20px 20px 10px;
      display: flex;
      justify-content: space-between;
      .xy-dialog_title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .xy-dialog_headerbtn {
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .d-icon-close {
          color: #909399;
        }
      }
    }
    &_body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      // CSS 属性 word-break 指定了怎样在单词内断行
      word-break: break-all;
    }
    &_footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      //   ::v-deep 相当less中的/deep/
      ::v-deep .xy-button:first-child {
        margin-right: 10px;
      }
    }
  }
  // 拟态风格
  .xy-dialog.is-mimicry {
    border-radius: 12px;
    box-shadow: inset 7px 14px 23px #dadada, inset -7px -14px 23px #eeeeee;
  }
}
// Vue动画 reverse是代表相反
.dialog-fade-enter-active {
  animation: fade 0.5s;
}
.dialog-fade-leave-active {
  animation: fade 0.39s reverse;
}
@keyframes fade {
  from {
    opacity: 0;
    transform: translateY(-3vh);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}


</style>