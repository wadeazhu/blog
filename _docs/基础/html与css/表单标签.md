---
order: 8
---

# HTML5表单标签学习

## 什么是HTML表单标签？

HTML表单标签用于创建用户可以填写的表单，比如登录表单、注册表单等。表单中包含一系列的表单控件，例如文本输入框、单选框、复选框、下拉列表、提交按钮等，用户可以通过这些表单控件向服务器提交数据。

## HTML表单的基本结构

HTML表单是通过`<form>`标签来定义的，下面是一个基本的表单结构示例：

```html
<form>
  <!-- 表单控件放在这里 -->
</form>
```

需要注意的是，`<form>`标签通常需要与`action`属性和`method`属性一起使用，其中`action`属性指定表单数据提交到哪个URL，`method`属性指定提交表单时使用的HTTP方法，通常为GET或POST方法。

## 文本输入框

文本输入框用于让用户输入文本信息，可以使用`<input>`标签来创建文本输入框，下面是一个文本输入框的示例：

```html
<label for="username">用户名：</label>
<input type="text" id="username" name="username">
```

其中，`type`属性指定输入框的类型为文本输入框，`id`属性和`name`属性用于标识输入框，`for`属性与`label`标签配合使用，用于让输入框与标签关联起来，从而提高可访问性。

除了普通的文本输入框，HTML5还新增了一些文本输入框的类型，例如：

- email：用于输入电子邮件地址
- url：用于输入URL地址
- tel：用于输入电话号码
- number：用于输入数字

使用这些类型的文本输入框可以帮助浏览器提供更好的用户体验，例如可以自动完成、自动验证等。

## 密码输入框

密码输入框用于让用户输入密码信息，可以使用`<input>`标签来创建密码输入框，下面是一个密码输入框的示例：

```html
<label for="password">密码：</label>
<input type="password" id="password" name="password">
```

其中，`type`属性指定输入框的类型为密码输入框，输入的内容将被自动隐藏。

## 单选框和复选框

单选框和复选框用于让用户从一组选项中选择一个或多个选项，可以使用`<input>`标签来创建单选框和复选框，下面是一个单选框和复选框的示例：

````html
<p>您喜欢的编程语言：</p>
<input type="radio" id="java" name="language" value="Java">
<label for="java">Java</label><br>
<input type="radio" id="python" name="language" value="Python">
<label for="python">Python</label><br>
<input type="radio" id="javascript" name="language" value="JavaScript">
<label for="javascript">JavaScript</label><br>

<p>您喜欢的运动：</p>
<input type="checkbox" id="football" name="sports" value="Football">
<label for="football">足球</label><br>
<input type="checkbox" id="basketball" name="sports" value="Basketball">
<label for="basketball">篮球</label><br>
<input type="checkbox" id="tennis" name="sports" value="Tennis">
<label for="tennis">网球</label><br>
```
````

其中，单选框使用`type="radio"`，并且要使用相同的`name`属性来组合单选框。而复选框使用`type="checkbox"`，可以选择多个选项。

## 下拉列表

下拉列表用于让用户从多个选项中选择一个选项，可以使用`<select>`标签来创建下拉列表，下面是一个下拉列表的示例：

```html
<label for="city">请选择您所在的城市：</label>
<select id="city" name="city">
  <option value="beijing">北京</option>
  <option value="shanghai">上海</option>
  <option value="guangzhou">广州</option>
  <option value="shenzhen">深圳</option>
</select>
```

其中，`<option>`标签用于定义下拉列表中的每一个选项，`value`属性指定选项的值，可以在提交表单时使用。

## 文本域

文本域用于让用户输入大段的文本信息，例如评论、留言等，可以使用`<textarea>`标签来创建文本域，下面是一个文本域的示例：

```html
<label for="comment">请留言：</label>
<textarea id="comment" name="comment"></textarea>
```

## 文件上传

文件上传用于让用户上传文件，可以使用`<input>`标签来创建文件上传控件，下面是一个文件上传的示例：

```html
<label for="avatar">上传头像：</label>
<input type="file" id="avatar" name="avatar">
```

需要注意的是，文件上传控件只能使用POST方法提交表单，并且需要在`<form>`标签中设置`enctype="multipart/form-data"`属性。

## 新增特性

HTML5在表单控件方面新增了一些特性，例如：

### 自动完成

自动完成可以让浏览器自动填充表单中的内容，可以使用`autocomplete`属性来控制自动完成的行为，例如：

```html
<input type="text" id="username" name="username" autocomplete="off">
```

其中，`autocomplete`属性可以设置为`on`（默认）或`off`，表示开启或关闭自动完成。

### 占位符

占位符可以在文本输入框中显示一段提示信息，例如：

```html
<input type="text" id="email" name="email" placeholder="请输入您的电子邮件地址">
```

### 必填字段

必填字段可以让浏览器验证用户是否填写了必要的表单信息，可以使用`required`属性来设置必填字段，例如



```html
<label for="username">用户名：</label>
<input type="text" id="username" name="username" required>
```

其中，`required`属性表示该字段必须填写，如果用户未填写，提交表单时会弹出提示框。

### 数字输入框

数字输入框可以让用户输入数字，可以使用`type="number"`属性来创建数字输入框，例如：

```html
<label for="age">年龄：</label>
<input type="number" id="age" name="age" min="0" max="100" step="1">
```

其中，`min`属性和`max`属性可以设置数字输入框的最小值和最大值，`step`属性可以设置数字输入框的步长。

## form中enctype属性

enctype 属性用于指定在将表单数据提交到服务器时，浏览器要使用何种编码方式来对表单数据进行编码，以便服务器能够正确地解析表单数据。

具体来说，enctype 属性有以下三种取值：

1. `application/x-www-form-urlencoded`

这是 HTML 表单默认的 enctype 属性值，也是最常用的一种。在这种编码方式中，浏览器将表单数据编码为 URL 编码格式，并将其作为查询字符串附加到 URL 中，或将其放在 HTTP 请求体中。

具体来说，浏览器将表单数据中的所有特殊字符（例如空格、&、# 等）转换为 % 加上其 ASCII 码的十六进制表示，并用等号将表单字段名和字段值分开，用 & 将不同的表单字段分隔开。

例如，如果表单中有一个用户名字段和一个密码字段，用户输入的用户名为 "test"，密码为 "123456"，则使用该编码方式后，表单数据的格式为：

```bash
username=test&password=123456
```

1. `multipart/form-data`

如果表单中包含文件上传控件，那么需要使用该编码方式。在这种编码方式中，浏览器将表单数据分割成多个部分，并对每个部分使用独立的编码方式进行编码。这样可以保证表单中的文件能够正确地传输到服务器。

具体来说，每个表单字段的名称和值将被封装在一个 boundary 标识符中，并使用特定的分隔符进行分隔。每个表单字段也可以有自己的 content-type 头部。

例如，如果表单中有一个上传图片的控件和一个文本框控件，其中图片的名称为 "image"，文本框的名称为 "text"，则使用该编码方式后，表单数据的格式为：

```sql
--boundary
Content-Disposition: form-data; name="image"; filename="image.png"
Content-Type: image/png

<binary data>
--boundary
Content-Disposition: form-data; name="text"

Hello world!
--boundary--
```

其中，`--boundary` 是分隔符，`Content-Disposition` 表示表单字段的名称和值，`Content-Type` 表示该字段的 MIME 类型，`<binary data>` 是文件的二进制数据。

1. `text/plain`

该编码方式不对表单数据进行编码，直接将表单数据作为纯文本传输到服务器。

例如，如果表单中有一个用户名字段和一个密码字段，用户输入的用户名为 "test"，密码为 "123456"，则使用该编码方式后，表单数据的格式为：

```bash
username
test
password
123456
```

需要注意的是，如果 enctype 属性值不正确或未设置，表单数据可能会被服务器拒绝或损坏。因此，在使用表单时，应该根据具应用场景

enctype 属性的不同取值决定了浏览器在将表单数据发送到服务器时使用的编码方式，因此不同的取值适用于不同的场景。

1. `application/x-www-form-urlencoded`

该编码方式最常用于发送简单的表单数据，例如登录表单、搜索表单等，这些表单通常只包含文本框、单选框、多选框等简单的表单控件，不包含文件上传控件。

1. `multipart/form-data`

该编码方式用于发送包含文件上传控件的表单数据。当用户在表单中选择一个或多个文件上传时，浏览器使用该编码方式将文件数据与其他表单数据一起发送到服务器。

1. `text/plain`

该编码方式通常用于发送非常简单的表单数据，例如只包含一个文本框的表单，或者仅用于测试目的的表单。这种编码方式不会对表单数据进行任何转换，直接将表单数据作为纯文本发送到服务器。

## 练习题

1. 创建一个表单，包含文本框、单选框、复选框、下拉列表和文件上传控件，使用所有的新特性。
2. 创建一个表单，包含用户名、密码和确认密码，要求密码和确认密码必须相同。
3. 创建一个表单，包含年龄和出生日期，要求出生日期不能晚于当前日期。

## 答案

1. 示例代码：

```html
<form method="post" enctype="multipart/form-data">
  <label for="username">用户名：</label>
  <input type="text" id="username" name="username" autocomplete="off" placeholder="请输入用户名" required><br>

  <label for="password">密码：</label>
  <input type="password" id="password" name="password" autocomplete="off" placeholder="请输入密码" required><br>

  <label for="confirm-password">确认密码：</label>
  <input type="password" id="confirm-password" name="confirm-password" autocomplete="off" placeholder="请再次输入密码" required><br>

  <p>您的性别：</p>
  <input type="radio" id="male" name="gender" value="male">
  <label for="male">男</label>
  <input type="radio" id="female" name="gender" value="female">
  <label for="female">女</label><br>

  <p>您喜欢的颜色：</p>
  <input type="checkbox" id="red" name="color" value="red">
  <label for="red">红色</label>
  <input type="checkbox" id="green" name="color" value="green">
  <label for="green">绿色</label>
  <input type="checkbox" id="blue" name="color" value="blue">
  <label for="blue">蓝色</label><br>

  <label for="city">请选择您所在的城市：</label>
  <select id="city" name="city" required>
    <option value="">请选择城市</option>
    <option value="beijing">北京</option>
    <option value="shanghai">上海</option>
    <option value="guangzhou">广州</option>
    <option value="shenzhen">深圳</option>
  </select><br>

  <label for="avatar">上传头像：</label>
  <input type="file" id="avatar" name="avatar" required><br>

  <button type="submit">提交</button>
</form>
```

1. 示例代码：

```html
<form>
  <label for="username">用户名：</label>
  <input type="text" id="username" name="username" autocomplete="off" required><br>

  <label for="password">密码：</label>
  <input type="password" id="password" name="password" autocomplete="off" required><br>

  <label for="confirm-password">确认密码：</label>
  <input type="password" id="confirm-password" name="confirm-password" autocomplete="off" required oninput="checkPassword()"><br>

  <span id="password-error"></span>

  <button type="submit">提交</button>
</form>

<script>
  function checkPassword() {
    var password = document.getElementById("password");
    var confirm_password = document.getElementById("confirm-password");
    var error = document.getElementById("password-error");

    if (password.value != confirm_password.value) {
      error.innerHTML = "密码不匹配";
    } else {
      error.innerHTML = "";
    }
  }
</script>
```

其中，使用`oninput`属性和`checkPassword()`函数来检查密码和确认密码是否相同，如果不相同，会在页面上显示一个错误提示。

1. 示例代码：

```html
<label for="birthdate">出生日期：</label>
<input type="date" id="birthdate" name="birthdate" max="2023-04-19" required>
```

其中，使用`max`属性来限制出生日期不能晚于当前日期。

## 总结

### 1. 常见表单元素类型

- `<input type="text">`：文本输入框
- `<input type="password">`：密码输入框
- `<input type="checkbox">`：复选框
- `<input type="radio">`：单选框
- `<input type="button">`：普通按钮
- `<input type="submit">`：提交按钮
- `<input type="reset">`：重置按钮
- `<input type="file">`：文件上传控件
- `<select>`：下拉列表框
- `<textarea>`：多行文本输入框

### 2. 常见表单元素属性

- `name`：表单元素的名称，用于提交表单数据
- `value`：表单元素的值，用于初始化和提交表单数据
- `required`：必填属性，要求用户填写该表单元素
- `readonly`：只读属性，禁止用户修改该表单元素的值
- `disabled`：禁用属性，禁止用户对该表单元素进行任何操作
- `placeholder`：占位符属性，显示在表单元素上方的提示文字
- `maxlength`：最大长度属性，限制用户输入的字符数
- `min`、`max`：最小值和最大值属性，限制用户输入的数值范围
- `pattern`：正则表达式属性，限制用户输入的格式
- `multiple`：多选属性，允许用户选择多个选项

### 3. 表单数据提交方式

- GET：将表单数据附加在URL的查询参数中，适用于数据量小，安全性要求不高的情况。
- POST：将表单数据作为HTTP请求的主体，适用于数据量大，安全性要求高的情况。
- PUT、DELETE：用于更新或删除数据，通常与RESTful API配合使用。

### 4. 表单数据验证方式

- 客户端验证：通过JavaScript在浏览器端对表单数据进行验证，提高用户体验。
- 服务器端验证：在后台对表单数据进行验证，确保数据安全性和完整性。
- 双重验证：同时使用客户端和服务器端验证，提高验证效果和安全性。
