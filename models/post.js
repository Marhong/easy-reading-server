const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// 帖子的模式对象
const PostSchema = new Schema({
    // 帖子唯一标识id
    id:{type:Number,required:true},
    // 帖子所属书籍id
    bookId:{type: Schema.Types.ObjectId, ref: 'Book',required:true},
    // 发表帖子的用户id
    userId:{type: Schema.Types.ObjectId, ref: 'User',required:true},
    // 帖子标题。标题长度为1-20
    title:{type:String,required:true,min:1,max:20},
    // 帖子内容。帖子内容长度为1-100
    content:{type:String,required:true,min:1,max:100},
    // 帖子所包含的回复列表
    replyList:[{type: Schema.Types.ObjectId, ref: 'Reply'}],
    // 给帖子点赞的用户列表
    likeList:[{type: Schema.Types.ObjectId, ref: 'User'}],
    // 帖子发布时间
    time:{type:Number,required:true},

});

// 暂不写虚拟属性

// 导出 Book 模块
module.exports = mongoose.model('Post', PostSchema);