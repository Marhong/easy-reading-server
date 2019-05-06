const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// 用户给书籍打标签记录模式对象
const LabelRecordSchema = new Schema({
    // 打标签记录唯一标识id
    id:{type:Number,required:true},
    // 打标签的用户id
    userId:{type: Schema.Types.ObjectId, ref: 'User',required:true},
    // 打标签的书籍id
    bookId:{type: Schema.Types.ObjectId, ref: 'Book',required:true},
    // 打的标签id
    bookTypeId:{type: Schema.Types.ObjectId, ref: 'BookType',required:true},
    // 打标签的时间
    time:{type:Number,required:true},

});

// 暂不写虚拟属性

// 导出 LabelRecord 模块
module.exports = mongoose.model('LabelRecord', LabelRecordSchema);