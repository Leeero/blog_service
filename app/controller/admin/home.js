'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  /**
   * 新建文章
   *
   * @memberof HomeController
   */
  async createArticle() {
    const result = await this.app.mysql.insert(
      'blog_article',
      Object.assign(this.ctx.request.body, {
        createTime: Date.now(),
      })
    );
    // 判断插入是否成功
    const insertSuccess = result.affectedRows === 1;

    if (insertSuccess) {
      this.ctx.body = {
        code: 200,
      };
    } else {
      this.ctx.body = {
        code: 500,
      };
    }
  }
}

module.exports = HomeController;
