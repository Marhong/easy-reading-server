const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// 个人设置的模式对象
const ReadingSettingSchema = new Schema({
    // 个人设置唯一标识id
    id:{type:Number,required:true},
    // 对应的用户id
    userId:{type: Schema.Types.ObjectId, ref: 'User',required:true},
    // 字体大小
    fontSize:{type:Number,required:true,default:14},
    // 阅读页面宽度
    pageWidth:{type:Number,required:true,default:1200},
    // 字体类型
    // 1：宋体 2：黑体 3：微软雅黑 4：楷体
    fontFamily:{type:Number,required:true,default:1},
    // 网站背景颜色
    bgColor:{type:String,required:true,default:"rgb(250, 238, 215)"},
    // 章节内容背景颜色
    pageBgColor:{type:String,required:true,default:"RGB(217, 205, 182)"},
    // 最后修改时间
    lastModifiedTime:{type:Number,required:true},
});

// 暂不写虚拟属性

// 导出 ReadingSetting 模块
module.exports = mongoose.model('ReadingSetting', ReadingSettingSchema);