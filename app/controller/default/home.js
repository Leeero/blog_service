'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  /**
   *获取文章列表
   *
   * @memberof HomeController
   */
  async getArticleList() {
    const result = await this.app.mysql.select('blog_article', {
      columns: ['articleId', 'articleTitle', 'articleType', 'articleIntroduction', 'createTime'],
    });
    this.ctx.body = {
      page: 1,
      size: result.length,
      articleLists: result,
    };
  }

  /**
   * 获取文章详情
   *
   * @memberof HomeController
   */
  async getArticleDetails() {
    const queryParameter = this.ctx.queries;

    const result = await this.app.mysql.get('blog_article', { articleId: queryParameter.articleId[0] });

    this.ctx.body = {
      articleDetails: result,
    };
  }
}

module.exports = HomeController;
