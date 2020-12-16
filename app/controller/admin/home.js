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

  /**
   * 删除文章
   *
   * @memberof HomeController
   */
  async deleteArticle() {
    const queryParameter = this.ctx.queries;

    const result = await this.app.mysql.delete('blog_article', { articleId: queryParameter.articleId[0] });
    // 判断删除是否成功
    const isSuccess = result.affectedRows === 1;
    if (isSuccess) {
      this.ctx.body = {
        code: 1,
        message: '删除成功',
      };
    } else {
      this.ctx.body = {
        code: 0,
        message: '删除失败',
      };
    }
  }
}

module.exports = HomeController;
