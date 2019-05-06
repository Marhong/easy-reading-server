const Book = require('../models/book');

// 显示完整的书籍列表
exports.book_list = (req, res) => { res.send('未实现：书籍列表'); };

// 通过条件对象展示筛选后的书籍列表
// 条件对象 {keyWords:"",type:"",isFinished:"",numbers:"",}可能不止这几个属性
exports.book_list_filter = (req,res) => {res.send('未实现：通过筛选条件筛选书籍');};
// 根据id显示书籍详细信息
exports.book_detail_by_id = (req, res) => { res.send('未实现：书籍详细信息：' + req.params.id); };

// 由 GET 显示创建作者的表单
exports.book_upload_get = (req, res) => { res.send('未实现：作者创建表单的 GET'); };

// 由 POST 处理书籍上传操作
exports.book_upload_post = (req, res) => { res.send('未实现：上传书籍的 POST'); };

// 由 GET 显示删除书籍的表单
exports.book_delete_get = (req, res) => { res.send('未实现：作者删除表单的 GET'); };

// 由 POST 处理书籍删除操作
exports.book_delete_post = (req, res) => { res.send('未实现：删除作者的 POST'); };

// 由 GET 显示更新作者的表单
exports.book_update_get = (req, res) => { res.send('未实现：作者更新表单的 GET'); };

// 由 POST 处理书籍更新操作
exports.book_update_post = (req, res) => { res.send('未实现：更新作者的 POST'); };