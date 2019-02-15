# 使用 Node.js + Express 框架寫的文章 API

## API 格式：

使用說明：
```
POST    /posts {title, author, body} 新增 posts
GET     /posts 取得所有 post
GET     /posts/:id 取得某個 post
DELETE  /posts/:id 刪除 post
PUT     /posts/:id {title, author, body} 更新 post
```

### Paginate
使用 `_page` 及 `_limit` 自訂分頁
```
GET /posts?_page=2
GET /posts?_page=2&_limit=5
```

### Sort
使用 `_sort` 及 `_order` 自訂排序 ( 預設是 asc )
```
GET /posts?_sort=createdAt&_order=desc
```

### Slice
使用 `_offset` 及 `_limit` 自訂
```
GET /posts?_offset=10&_limit=3
```


## 後端技術
- Node.js + Express 實作簡易 MVC 架構
- Sequelize ORM 操作 MySQL 資料庫
- 使用 PM2 套件部署在 AWS EC2 Ubuntu 主機