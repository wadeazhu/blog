---
title: git
---

# git

## 如何上传到仓库

```bash
git init 
git add .
git commit -m '备注'
git branch -m master # 本地分支改名
git remote add origin https://github.com/...
git push -u origin master
```

## git讲解

Workspace: 工作区，就是平时进行开发改动的地方，是当前看到最新的内容，在开发的过程也就是对工作区的操作

Index：暂存区，当执行`git add`命令后，工作区的温江就会被移入暂存区，暂存区标记了当前工作区中那些内容是被Git管理的，当完成某个需求或者功能后需要提交代码，第一步就是通过`git add`先提交到暂存区。

Repository：本地仓库，位于自己的电脑上，通过`git commit`提交暂存区的内容，会进入本地仓库。

Remote：远程仓库，用来托管代码的服务器，远程仓库的内容能够被分布在多个地方的处于协作关系的本地仓库修改，本地仓库修改完成代码后通过`git push`命令同步代码到远程仓库。

一般来说，git的工作流程分为以下几步

```tex
1.在工作区开发，添加，修改文件。
2.将修改后的文件放入暂存区。
3.将暂存区域的文件提交到本地仓库。
4.将本地仓库的修改推送到远程仓库。
```

1. git status 查看文件状态
2. git log 提交记录
3. git log --author='username' 查看某个人的提交记录

## 配置用户名和邮箱

```bash
git config --global user.name 'xxx' 
git config --global user.email 'xxx@qq.com'

# 查看配置
git config --global --list
```

## 常见操作

### 如何删除文件

```bash
git rm demo.html
```

### 如何添加文件



### 如何修改文件名字

```bash
git mv home.html demo.html # 先是改动前的名字，后面是改动后的名字
```

### 移动文件



### 文件有变化，如果查看变化

```bash
git log --pretty=oneline home/home.html # 可以得到commit id

git show id # 可以看到具体的提交信息

git log -p home/demo.html # 可以查看某个文件的具体修改内容
```



### 操作失误一键还原

```bash
git diff # 查看不同
git checkout --home/home.html # 可以将html.html文件还原， 这个只能还原还未提交的 add 操作的文件
```

### 撤销追踪

```bash
git reset HEAD home/home.html
```

### 回到上一个版本或者自定义版本的操作

```bash
git reset --head HEAD^ # 这里一个^表示回退一个上一个的版本，两个表示回退两个上个版本

# 回退到自定义版本的操作
# 需要先拿到提交的id
git reset --head id
```

### 指定文件回到指定的版本

```bash
# 同样的需要拿到id
git checkout id --version.html
```

[参考](https://juejin.cn/post/6974184935804534815)