module.exports = (app) => {
  const { router, controller } = app;
  router.post('/api/v1/blog/article/create', controller.admin.home.createArticle);
  router.delete('/api/v1/blog/article', controller.admin.home.deleteArticle);
};
