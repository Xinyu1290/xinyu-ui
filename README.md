# xinyu-ui

## 简介

一个前端vue的 UI 组件库

## 使用

1. 安装

```
npm install xinyu-ui
```

2. 全局注册

```js
import XinyuUI from 'XinyuUI'
Vue.use(XinyuUI)
```

3. 导入样式

```js
import 'xinyu-ui/dist/xinyu-ui.css'
```


---

<br>

## 组件

### 按钮(Button)
1.使用type、plain、disabled,round和circle属性来定义 Button 的样式
```js
<xy-button type="primary" >这是一个dialog</xy-button>
<xy-button type="primary" disabled>这是一个dialog</xy-button>
```
<br>

| 属性     | 值               | 描述                                                                 |
| -------- | ---------------- | -------------------------------------------------------------------- |
| type     | String           | 按钮类型：primary,info,success,warning,danger                        |
| plain    | Boolean          | 是否为朴素按钮，默认为 false                                         |
| disabled | Boolean          | 是否禁用按钮，默认为 false                                           |
| round    | Boolean          | 是否为圆角按钮，默认为 false                                         |
| circle   | Boolean          | 是否为圆形按钮，默认为 false                                         |

<br>

| 事件  | 值       | 描述     |
| ----- | -------- | -------- |
| click | Function | 点击事件 |

<br>

---

<br>

### 对话框(Dialog)
1.Dialog 弹出一个对话框，适合需要定制性更大的场景
```js
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


<script>
export default {
    data(){
        return{
            visiable:false,
            form:{
                name:'',
                password:''}
        }
    },
}
</script>
```

<br>

| 属性     | 值      | 描述                               |
| -------- | ------- | ---------------------------------- |
| title    | String  | 对话框头部提示，默认为"提示"       |
| visiable | Boolean | 对话框可见状态，默认为 false       |
| mimicry  | Boolean | 对话框是否为拟态风格，默认为 false |
| width    | String  | 对话框宽度，默认为 60%             |
| top      | String  | 对话框距离顶部位置，默认为 15vh    |

<br>

| 插槽   | 描述                    |
| ------ | ----------------------- |
| title  | Dialog 标题区的内容     |
| footer | Dialog 按钮操作区的内容 |

<br>

---

<br>

### 输入框(Input)

1.通过鼠标或键盘输入字符
```js
账号:<xy-Input  v-model="input" placeholder="请输入账号 "  clearable />
<br>
密码:<xy-Input  type="password"  v-model="password" showPassword  placeholder="请输入密码 "/ >
<br>
    
<script>
    data(){
      return{
          input:'',
          password:''
        }
     }
</script>
```
<br>

| 属性         | 值      | 描述                               |
| ------------ | ------- | ---------------------------------- |
| placeholder  | String  | 占位符，默认为空字符串             |
| type         | String  | 表单类型，默认为'text'             |
| name         | String  | 表单命名，默认为空                 |
| value        | String  | 表单值，默认为空字符串             |
| disabled     | Boolean | 是否禁用，默认为 false             |
| clearable    | Boolean | 是否可清空，默认为 false           |
| showPassword | Boolean | 是否显示密码可见，默认为 false     |

<br>

### 切换(Switch)
1.表示两种相互对立的状态间的切换，多用于触发「开/关」。
```js
<xy-Switch   v-model="switch1"  active-text="按月21付费" inactive-text="按年3付费"  >
    </xy-Switch>
    <br>
    <xy-Switch v-model="switch2"  active-color="blue" inactive-color="yellow"  active-text="按月付费">
</xy-Switch>
        
   <script>
       data(){
         return{
              switch1:false,
              switch2:false}
        }
    </script>
```
<br>

| 属性          | 值      | 描述                               |
| ------------- | ------- | ---------------------------------- |
| name          | String  | 表单命名，默认为空                 |
| value         | String  | 表单值，默认为空字符串             |
| disabled      | Boolean | 是否禁用，默认为 false             |
| activeColor   | String  | 激活状态颜色，默认为#dcdfe6        |
| inactiveColor | String  | 未激化状态颜色，默认为#dcdfe6      |

<br>

| 事件   | 值       | 描述                               |
| ------ | -------- | ---------------------------------- |
| handleClick | Function | 状态修改触发事件，返回修改后的状态 |

<br>

---

<br>

### 单选框(Radio)
1.在一组备选项中进行单选
```js
<xy-radio v-model="radio" label='1' color="red" >备选项1</xy-radio>
<xy-radio v-model="radio" label="2">备选项2</xy-radio> 

   <script>
       data(){
         return{
            radio:1  
         }
        }
    </script>
```

<br>

| 属性    | 值                        | 描述                               |
| ------- | ------------------------- | ---------------------------------- |
| label   | [String, Number, Boolean] | 单选框 label 值，默认为空字符串    |
| mimicry | Boolean                   | 对话框是否为拟态风格，默认为 false |
| name    | String                    | 表单命名，默认为空                 |
| value   | String                    | 表单值，默认为空字符串             |
| color   | String                    | 单选框选择时的颜色，默认为#409eff  |

<br>

### 单选框组(RadioGroup)
1.在一组备选项中进行单选
```js
<xy-radiogroup v-model="radio">
       <xy-radio  label='1' >备选项1</xy-radio>
       <xy-radio  label="2" >备选项2</xy-radio>
       <xy-radio  label="3" >备选项3</xy-radio>
       <xy-radio  label="4" >备选项4</xy-radio>
       <xy-radio  label="5" >备选项5</xy-radio>
</xy-radiogroup>

   <script>
       data(){
         return{
            radio:1  
         }
        }
    </script>
```
<br>

用于包裹 radio，通过 v-model 指定组内所有的 radio 的 v-model

<br>

---

<br>

### 复选框(Checkbox)
1.一组备选项中进行多选
```js
<xyCheckbox v-model="check" >是否选中</xyCheckbox>

<script>
       data(){
         return{
           check: true,
         }
        }
</script>
```

<br>

| 属性    | 值                        | 描述                               |
| ------- | ------------------------- | ---------------------------------- |
| label   | [String, Number, Boolean] | 单选框 label 值，默认为空字符串    |
| mimicry | Boolean                   | 对话框是否为拟态风格，默认为 false |
| name    | String                    | 表单命名，默认为空                 |
| value   | String                    | 表单值，默认为空字符串             |
| color   | String                    | 单选框选择时的颜色，默认为#409eff  |

<br>

### 复选框组(CheckboxGroup)
1.几个备选项中进行多选
```js
<xy-CheckboxGroup v-model="checkList" >
    <xy-Checkbox label="复选框 A"></xy-Checkbox>
    <xy-Checkbox label="复选框 B"></xy-Checkbox>
    <xy-Checkbox label="复选框 C"></xy-Checkbox>
    <xy-Checkbox label="禁用" disabled></xy-Checkbox>
    <xy-Checkbox label="选中且禁用" disabled></xy-Checkbox>
</xy-CheckboxGroup>

<script>
    data(){
         return{
            checkList: ['选中且禁用','复选框 A'],
         }
    }
</script>
```
<br>

用于包裹多个 checkbox，通过 v-model 指定组内所有的 checkout 的 v-model

<br>

---

<br>

### 表单项(Form-item)
1.表单
```js
<xy-Form :model="form" >
    <xy-FormItem label="账号">
       <xy-Input  placeholder="请输入账号"  v-model="form.name" /> 
    </xy-FormItem>
   <xy-FormItem label="密码">
       <xy-Input  type="password"   placeholder="请输入密码" v-model="form.password" />
    </xy-FormItem>
</xy-Form>

<script>
export default {
    data(){
        return{
            form:{
                name:'',
                password:''}
        }
    },
}
</script>
```
<br>

| 属性  | 值     | 描述                            |
| ----- | ------ | ------------------------------- |
| label | String | 单选框 label 值，默认为空字符串 |

<br>

### 表单(Form)

<br>

| 属性        | 值     | 描述                 |
| ----------- | ------ | -------------------- |
| model       | Object | 表单对象，必填       |
| label-width | String | 标签宽度，默认"80px" |

<br>

---

<br>
