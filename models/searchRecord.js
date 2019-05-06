const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// 用户搜索记录模式对象
const SearchRecordSchema = new Schema({
    // 搜索记录唯一标识id
    id:{type:Number,required:true},
    // 用户id
    userId:{type: Schema.Types.ObjectId, ref: 'User',required:true},
    // 输入的关键字长度为1-30
    keyWords:{type:String,required:true,min:1,max:30},
    // 是否搜索成功(如果搜索后进入到了书籍详情页面就算搜索成功)
    // 这个尚未实现
    isSuccess:{type:Boolean,required:false},
    // 选择的书籍类型
    // 包括书籍类型如“玄幻”，”科幻“等。还有其他筛选条件如”完结“，”未完结“，”30万字以下“，”30-50万字"等
    types:[{type: Schema.Types.ObjectId, ref: 'BookType'}],
    // 搜索时间
    time:{type:Number,required:true},

});

// 暂不写虚拟属性

// 导出 SearchRecord 模块
module.exports = mongoose.model('SearchRecord', SearchRecordSchema);