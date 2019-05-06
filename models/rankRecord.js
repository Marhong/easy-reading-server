const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// 用户给书籍的打分记录模式对象
const RankRecordSchema = new Schema({
    // 打分记录唯一标识id
    id:{type:Number,required:true},
    // 打分的用户id
    userId:{type: Schema.Types.ObjectId, ref: 'User',required:true},
    // 打分的书籍id
    bookId:{type: Schema.Types.ObjectId, ref: 'Book',required:true},
    // 分值
    score:{type:Number,required:true,default:6.5},
    // 打分时间
    time:{type:Number,required:true},

});

// 暂不写虚拟属性

// 导出 RankRecord 模块
module.exports = mongoose.model('RankRecord', RankRecordSchema);