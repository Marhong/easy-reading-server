const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// 用户收藏书籍记录模式对象
const CollectRecordSchema = new Schema({
    // 收藏记录唯一标识id
    id:{type:Number,required:true},
    // 收藏书籍的用户id
    userId:{type: Schema.Types.ObjectId, ref: 'User',required:true},
    // 收藏的书籍id
    bookId:{type: Schema.Types.ObjectId, ref: 'Book',required:true},
    // 收藏书籍的时间
    time:{type:Number,required:true},

});

// 暂不写虚拟属性

// 导出 CollectRecord 模块
module.exports = mongoose.model('CollectRecord', CollectRecordSchema);