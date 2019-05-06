const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// 章节阅读记录的模式对象
const ChapterReadingRecordSchema = new Schema({
    // 阅读记录的唯一标识id
    id:{type:Number,required:true},
    // 阅读记录对应的章节id
    chapterId:{type: Schema.Types.ObjectId, ref: 'Chapter',required:true},
    // 阅读记录对应的书籍id
    bookId:{type: Schema.Types.ObjectId, ref: 'Book',required:true},
    // 阅读记录对应的用户id
    userId:{type: Schema.Types.ObjectId, ref: 'User',required:true},
    // 阅读记录的开始时间
    startTime:{type:Number,required:true},
    // 阅读记录的结束时间
    endTime:{type:Number,required:true},

});

// 暂不写虚拟属性

// 导出 ChapterReadingRecord 模块
module.exports = mongoose.model('ChapterReadingRecord', ChapterReadingRecordSchema);