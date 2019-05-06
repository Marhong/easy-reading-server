const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// 站内公告的模式对象
const BulletinSchema = new Schema({
    // 公告的唯一标识id
    id:{type:Number,required:true},
    // 发表公告的用户id
    userId:{type: Schema.Types.ObjectId, ref: 'User',required:true},
    // 公告标题。标题长度为1-20
    title:{type:String,required:true,min:1,max:20},
    // 公告内容。帖子内容长度为1-300
    content:{type:String,required:true,min:1,max:300},
    // 公告类型
    type:{type:String,required:true,default:"资讯",min:2,max:4},
    // 帖子发布时间
    time:{type:Number,required:true},

});

// 暂不写虚拟属性

// 导出 Bulletin 模块
module.exports = mongoose.model('Bulletin', BulletinSchema);