const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// 书籍类型的模式对象
// 书籍类型包括固定的8个(“玄幻”，“科幻”，“武侠”等)和用户给书籍打的label
const BookTypeSchema = new Schema({
    // 书籍类型唯一标识id
    id:{type:Number,required:true},
    // 书籍类型名字
    name:{type: String, required:true},
    // 书籍类型的别名
    nickName:{type:String,required:false},
    // 书籍类型的图标名
    iconName:{type:String,required:false},
    // 创建该书籍类型的用户id
    // 如果是固定的那8个，用户idJ就为管理员id
    userId:{type: Schema.Types.ObjectId, ref: 'User',required:true},
    // 是否为用户创建的label
    // 将8个固定的类型和用户创建的label区分开来
    isLabel:{type:Boolean,required:true},
    // 创建时间
    time:{type:Number,required:true},
    // 该标签的使用次数
    // 如果是那8个固定类型的也可以有这个属性，反正可以用isLabel区别。顺便可以统计8种类型书籍数目
    useTimes:{type:Number,required:true,default:0},
});

// 暂不写虚拟属性

// 导出 BookType 模块
module.exports = mongoose.model('BookType', BookTypeSchema);