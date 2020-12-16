# 设置基础镜像,如果本地没有该镜像，会从Docker.io服务器pull镜像
FROM node:10.13.0

# 配置环境变量
ENV NODE_ENV production

# 这个是容器中的文件目录
RUN mkdir -p /usr/src/app 

# 设置工作目录
WORKDIR /usr/src/app

# 拷贝package.json文件到工作目录

COPY package.json /usr/src/app/package.json

# 安装npm依赖(使用淘宝的镜像源)
# 如果使用的境外服务器，无需使用淘宝的镜像源，即改为`RUN npm i`。
RUN npm i --production --registry=https://registry.npm.taobao.org

# 拷贝所有源代码到工作目
COPY . /usr/src/app

# 暴露容器端口
EXPOSE 7001

CMD npm start

