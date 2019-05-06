const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// 书架的模式对象
const BookshelfSchema = new Schema({
    // 书架唯一标识id
    id:{type:Number,required:true},
    // 书架对应用户的id
    userId:{type: Schema.Types.ObjectId, ref: 'User',required:true},
    // 书架所包含的书籍列表
    books:[{type: Schema.Types.ObjectId, ref: 'Book'}],

});

// 暂不写虚拟属性

// 导出 Bookshelf 模块
module.exports = mongoose.model('Bookshelf', BookshelfSchema);