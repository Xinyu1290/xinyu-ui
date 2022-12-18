// 整个包的入口
import Button from './Button'
import Dialog from './Dialog'
import Input from './Input'
import Checkbox from './Checkbox'
import Radio from './Radio'
import RadioGroup from './Radiogroup'
import Switch from './Switch'
import CheckboxGroup from './Checkbox'
import Form from './Form'
import FormItem from './Form-item'

var components = [
    Button,
    Dialog,
    Input,
    Checkbox,
    Radio,
    RadioGroup,
    Switch,
    CheckboxGroup,
    Form,
    FormItem
]

const install = function(Vue, options) {
    if (options && options.components) {
        components = options.components
    }
    components.forEach(item => {
        // 往全局注册组件
        Vue.component(item.name, item)
    })
}

// script直接引用
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export {
    Button,
    Dialog,
    Input,
    Checkbox,
    Radio,
    RadioGroup,
    Switch,
    CheckboxGroup,
    Form,
    FormItem
}
//install暴露
export default { install }