const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// 章节模式对象
const ChapterSchema = new Schema({
    // 章节的唯一标识id
    id:{type:Number,required:true},
    // 章节所属卷的id
    volumeId:{type: Schema.Types.ObjectId, ref: 'Volume',required:true},
    // 章节所属书籍id
    bookId:{type: Schema.Types.ObjectId, ref: 'Book',required:true},
    // 章节名
    name:{type:String,required:true},
    // 章节字数
    numbers:{type:Number,required:true},
    // 章节对应的html地址
    link:{type:String,required:true},
    // 章节是否免费
    // 默认全为免费章节
    isFree:{type:Boolean,required:false,default:true},
    // 章节更新时间
    time:{type:Number,required:false},

});

// 暂不写虚拟属性

// 导出 Chapter 模块
module.exports = mongoose.model('Chapter', ChapterSchema);