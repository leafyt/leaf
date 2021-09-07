<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>MENU</title>
    <style type="text/css">
        .menu {
            width: 694px;
            height: 50px;/*设置元素水平居中*/
            margin: 50px auto 0;/*去除内联元素间隙*/
            font-size: 0;/*去掉ul自带的.格式*/
            list-style: none;
            padding: 0;
        }

        .menu li{/*将元素转换为行内块元素*/
            display:inline-block;
            width:98px;
            height:48px;
            border:1px solid gold;
            font-size:16px;/*将边框合并*/
            margin-right:-1px;
            text-align:center;
            line-height:48px;
        }
        .menu a{
            font-family: "Microsoft YaHei UI";
            color: #ff8053;/*去掉a元素的下划线*/
            text-decoration: none;
        }/*鼠标位于元素位置时改变元素样式*/
        .menu li:hover{
            background-color: orange;
        }

        .menu a:hover{
            color:#fff;
        }

    </style>
</head>
<body>
<ul class="menu">
    <li><a href="">首页</a></li>
    <li><a href="">宿舍楼管理</a></li>
    <li><a href="">入住人员管理</a></li>
    <li><a href="">水电费计算</a></li>
    <li><a href="">系统管理</a></li>
</ul>
</body>
</html>