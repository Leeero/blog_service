module.exports = (app) => {
  const { router, controller } = app;
  router.get('/api/v1/blog/article/list', controller.default.home.getArticleList);
  router.get('/api/v1/blog/article/details', controller.default.home.getArticleDetails);
};
