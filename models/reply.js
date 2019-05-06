const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// 评论的模式对象
const ReplySchema = new Schema({
    // 评论唯一标识id
    id:{type:Number,required:true},
    // 评论所属帖子id
    postId:{type: Schema.Types.ObjectId, ref: 'Post',required:true},
    // 发表评论的用户id
    userId:{type: Schema.Types.ObjectId, ref: 'User',required:true},
    // 评论回复对象的id
    // 这里的回复对象可能是帖子对应的楼主，也可能是该帖子下的其他回复
    anotherUserId:{type: Schema.Types.ObjectId, ref: 'User',required:true},
    // 评论内容。评论内容长度为1-100
    content:{type:String,required:true,min:1,max:100},
    // 评论发布时间
    time:{type:Number,required:true},

});

// 暂不写虚拟属性

// 导出 Reply 模块
module.exports = mongoose.model('Reply', ReplySchema);