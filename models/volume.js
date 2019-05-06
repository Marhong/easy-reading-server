const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// 卷的模式对象
const VolumeSchema = new Schema({
    // 卷的唯一标识id
    id:{type:Number,required:true},
    // 该卷所属的书籍id
    bookId:{type: Schema.Types.ObjectId, ref: 'Book',required:true},
    // 卷的名字长度在1-15
    name:{type:String,required:true,min:1,max:15,},
    // 该卷是否免费
    // 目前没实现章节分为免费或VIP，默认都是免费章节
    isFree:{type:Boolean,required:false,default:true},
    // 该卷所包含的章节列表
    chapterList:[{type: Schema.Types.ObjectId, ref: 'Chapter'}],
    // 该卷的开始时间
    // 如果是通过用户上传txt或者pdf书籍文件的话，只能得到卷名、章节名、章节内容
    startTime:{type:Number,required:false},

});

// 虚拟属性'count'：该卷包含章节书
VolumeSchema
    .virtual('count')
    .get(function () {
        return this.chapterList.length;
    });
// 虚拟属性'numbers'：该卷的总字数
VolumeSchema
    .virtual('numbers')
    .get(function () {
        let chapterList = this.chapterList;
        return chapterList.reduce((pre,cur) => pre.numbers+cur.numbers);
    });
// 导出 Volume 模块
module.exports = mongoose.model('Volume', VolumeSchema);