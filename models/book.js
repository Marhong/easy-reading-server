const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// 书籍的模式对象
const BookSchema = new Schema({
    // 书籍的唯一标识id
    id:{type:Number,required:true},
    // 书籍上传者的id
    userId:{type: Schema.Types.ObjectId, ref: 'User',required:true},
    // 书籍作者
    author:{type:String,required:true},
    // 书籍对应地区
    distribute:{type:String,required:false},
    // 书籍对应朝代
    dynasty:{type:String,required:false},
    // 书籍的名字长度在1-15
    name:{type:String,required:true,min:1,max:15,},
    // 书籍上传时间
    uploadTime:{type:Number,required:true},
    // 书籍开始编写时间
    // 从txt或者pdf文件中一般得不到这个属性
    startTime:{type:Number,required:false},
    // 书籍对应的打分记录列表
    rankList:[{type: Schema.Types.ObjectId, ref: 'RankRecord'}],
    // 书籍对应的推荐记录列表
    recommendList:[{type: Schema.Types.ObjectId, ref: 'RecommendRecord'}],
    // 书籍对应的收藏记录列表
    collectList:[{type: Schema.Types.ObjectId, ref: 'CollectRecord'}],
    // 书籍对应的讨论用户列表
    // 包括在该书籍发表帖子的用户和在该书籍发表评论的用户
    commentList:[{type: Schema.Types.ObjectId, ref: 'User'}],
    // 书籍介绍长度在1-50
    // 该内容只有在通过爬虫爬取书籍时才能得到，用户上传是得不到的
    description:{type:String,required:false,min:1,max:50},
    // 该书籍的点击次数，即浏览过该书籍(进入到书籍详情页面)的次数
    clickedNumbers:{type:Number,required:true},
    // 书籍是否完结
    // 如果是用户上传书籍的话基本上都是完结状态，但是如果是网上爬取数据的话就不一定了
    // 目前网站书籍数据来源只有用户上传，暂时没有通过爬虫爬取
    isFinished:{type:Boolean,required:false,default:true},
    // 书籍类型。包括基本的8中类型之一和用户的label
    type:[{type: Schema.Types.ObjectId, ref: 'BookType'}],
    // 书籍序言长度在1-50
    // 也是只能通过爬虫爬取书籍时才能得到，用户上传是得不到的
    preface:{type:String,required:false,min:1,max:50},
    // 书籍所包含的卷列表
    volumeList:[{type: Schema.Types.ObjectId, ref: 'Volume'}],
    // 书籍所包含的帖子列表
    postList:[{type: Schema.Types.ObjectId, ref: 'Post'}],
    // 最近更新章节
    // 只有通过爬虫得到的书籍才有这个数据，用户上传的是没有的
    latestChapter:{type: Schema.Types.ObjectId, ref: 'Chapter',required:false},
    // 是否通过审核。只给用户展示合法的书籍
    // 默认都能通过审核
    // 如果某些书籍被举报了，审核通过后将isValid改为false即可
    isValid:{type:Boolean,required:true,default:true},
    // 是否为免费书籍
    // 默认都为免费书籍
    isFree:{type:Boolean,required:true,default:true},
    // 用户最后阅读的章节,主要用户恢复到上次的阅读状态
    lastChapter:{type: Schema.Types.ObjectId, ref: 'Chapter',required:true},

});

// 虚拟属性'rankNumber'：给书籍打分的人数
BookSchema
    .virtual('rankNumbers')
    .get(function () {
        return this.rankList.length;
    });

// 虚拟属性'recommendNumber'：给书籍打分的人数
BookSchema
    .virtual('recommendNumbers')
    .get(function () {
        return this.recommendList.length;
    });

// 虚拟属性'score'：书籍分数
BookSchema
    .virtual('score')
    .get(function () {
        let rankList = this.rankList;
        return (rankList.reduce((pre,cur) => pre.score+cur.score)/rankList.length).toFixed(1);
    });

// 虚拟属性'numbers'：书籍的总字数
BookSchema
    .virtual('numbers')
    .get(function () {
        let volumeList = this.volumeList;
        return volumeList.reduce((pre,cur) => pre.numbers+cur.numbers);
    });
// 导出 Book 模块
module.exports = mongoose.model('Book', BookSchema);