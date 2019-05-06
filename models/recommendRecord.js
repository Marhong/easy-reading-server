const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// 用户给书籍的推荐记录模式对象
const RecommendRecordSchema = new Schema({
    // 推荐记录唯一标识id
    id:{type:Number,required:true},
    // 推荐的用户id
    userId:{type: Schema.Types.ObjectId, ref: 'User',required:true},
    // 推荐的书籍id
    bookId:{type: Schema.Types.ObjectId, ref: 'Book',required:true},
    // 推荐书籍的时间
    time:{type:Number,required:true},

});

// 暂不写虚拟属性

// 导出 RecommendRecord 模块
module.exports = mongoose.model('RecommendRecord', RecommendRecordSchema);