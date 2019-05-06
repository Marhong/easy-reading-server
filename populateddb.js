#! /usr/bin/env node

console.log('此脚本为数据库填充一些测试书籍类型。将数据库地址作为参数，比如：populatedb mongodb://your_username:your_password@your_dabase_url。');

// 从命令行取得参数
const userArgs = process.argv.slice(2);
if (!userArgs[0].startsWith('mongodb://')) {
    console.log('错误：需要指定一个合法的 MongoDB URL 作为第一个参数。');
    return;
}

const async         = require('async');
const BookType          = require('./models/bookType');


const mongoose      = require('mongoose');
const mongoDB       = userArgs[0];
mongoose.connect(mongoDB);
mongoose.Promise    = global.Promise;

const db            = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB 连接错误：'));

const bookTypes       = [];

function bookTypeCreate(id,name,isLabel,time,useTimes, cb) {
    const bookType = new BookType({
        id   : id,
        name : name,
        isLabel    : isLabel,
        time   : time,
        useTimes:useTimes,
    });

    bookType.save( err => {
        if (err) {
            cb(err, null);
            return;
        }
        console.log('新建书籍类型：' + bookType);
        bookTypes.push(bookType);
        cb(null, bookType);
    });
}



function createBookTypes(cb) {
    async.parallel([
        callback => bookTypeCreate(
            '120451212',
            '玄幻',
            false,
            1557124485,
            150,
            callback
        ),
        callback => bookTypeCreate(
            '120451213',
            '奇幻',
            false,
            1557124500,
            120,
            callback
        )
    ], cb); // 可选回调
}



async.series (
    [
        createBookTypes,
    ],
    // 可选回调
    (err, results) => {
        console.log(
            err ?
                '最终错误：' + err :
                '插入的BookType数据：' + bookTypes
        );
        // 操作完成，断开数据库连接
        db.close();
    }
);