const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// 书单的模式对象
const BookListSchema = new Schema({
    // 书单的唯一标识id
    id:{type:Number,required:true},
    // 书单的创建者id
    userId:{type: Schema.Types.ObjectId, ref: 'User',required:true},
    // 书单的名字长度在1-15
    name:{type:String,required:true,min:1,max:15,},
    // 书单的介绍长度在1-100
    description:{type:String,required:true,min:1,max:100},
    // 书单包含的书籍列表
    books:[{type: Schema.Types.ObjectId, ref: 'Book'}],
    // 书单的创建时间
    time:{type:Number,required:false},
    // 书单最后编辑时间
    // 目前暂时没实现书单创建后进行后续编辑
    lastModifiedTime:{type:Number,required:false},

});

// 暂不写虚拟属性

// 导出 BookList 模块
module.exports = mongoose.model('BookList', BookListSchema);