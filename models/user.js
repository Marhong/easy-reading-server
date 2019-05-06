const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// 用户的模式对象
const UserSchema = new Schema(
    {
        // 用户唯一标识id
        id: {type: Number, required: true},
        // 用户名至少4个字符，最多16个字符
        name:{type:String,required:true,min:4,max:16},
        // 账号密码至少6个字符，最多20个字符
        password:{type:String,required:true,min:8,max:20},
        // 用户性别
        gender:{type:String,required:false},
        // 用户现居地,按省,市,县/区格式存储
        address:{type:String,required:false},
        // 用户邮箱
        email:{type:String,required:false},
        // 用户手机号码
        phone:{type:String,required:false},
        // 用户个人简介最多50字符
        description:{type:String,required:false,min:0,max:50},
        // 用户类别分为普通用户(用0表示)和管理员(用1表示)
        // 默认为普通用户
        type:{
            type:Number,
            required:true,
            enum:[0,1],
            default:0},
        // 账号注册时间,存为时间戳
        signUpTime:{type:Number,required:true},
        // 用户唯一书架的id
        bookshelfId:{type:Number,required:true},
        // 用户表单集合(收藏别人、自己创建的都统一放在postList中)
        bookList:[{type: Schema.Types.ObjectId, ref: 'BookList'}],
        // 用户发表的帖子集合
        postList:[{type: Schema.Types.ObjectId, ref: 'Post'}],
        // 用户发表的评论集合
        replyList:[{type: Schema.Types.ObjectId, ref: 'Reply'}],
        // 用户给书籍的打分集合
        rankList:[{type: Schema.Types.ObjectId, ref: 'RankRecord'}],
        // 用户推荐书籍的集合
        recommendList:[{type: Schema.Types.ObjectId, ref: 'RecommendRecord'}],
        // 用户收藏书籍的集合
        // 如果一本书在用户的书架或者书单列表中就算是被收藏
        collectList:[{type: Schema.Types.ObjectId, ref: 'CollectRecord'}],
        // 用户搜索记录的集合
        searchRecordList:[{type: Schema.Types.ObjectId, ref: 'SearchRecord'}],
        // 用户阅读记录的集合
        // 这里的阅读记录就是记录用户对小说每一章节的阅读状况
        readingRecordList:[{type: Schema.Types.ObjectId, ref: 'ChapterReadingRecord'}],
        // 用户章节阅读界面的界面设置
        personalSetting:{type: Schema.Types.ObjectId, ref: 'PersonalSetting'},
        // 用户给书籍打标签记录的集合
        // 目前没实现用户给书籍打自定义标签("高效"，“穿越","扮猪吃老虎")
        labelRecordList:[{type: Schema.Types.ObjectId, ref: 'LabelRecord'}],
    }
);

// 暂不写虚拟属性

// 导出 Author 模型
module.exports = mongoose.model('User', UserSchema);