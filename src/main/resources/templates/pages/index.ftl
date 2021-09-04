<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
<head lang="en" >
    <meta charset="UTF-8">
    <title>宿舍管理系统</title>
    <!--    <link rel="stylesheet" th:href="@{/css/public.css}">
        <link rel="stylesheet" th:href="@{/css/style.css}">-->
    <style>
        #parent{
            margin-top:13%;
            margin-left:45%;
            transform:translate(-50%,-50%) ;
        }
    </style>
</head>
<body>
<div id="parent">
    <!--头部-->
    <header class="publicHeader">
        <div class="publicHeaderR">
            <#--<p><span></span><span style="color: red" th:text="${session.login.name()}"></span> , 欢迎你！  <a href="/user/remover">退出登录</a></p>-->
        </div>
    </header>
    <!--主体内容-->
    <section class="publicMian">
        <div class="left">
            <nav>
                <ul class="list">
                    <li ><a href="/person/dormList">宿舍列表</a></li>
                    <li><a href="/person/list">人员信息列表</a></li>
                    <li><a href="/person/view">入住情况统计</a></li>
                </ul>
            </nav>
        </div>
        <div class="right" style="border: 3px solid blue;width: 400px;height: 200px;margin-top: -100px;margin-left: 200px"  >
            <div class="wFont" style="text-align:center;margin-top:10% ">
                <p>欢迎使用宿舍管理系统!</p>
            </div>
        </div>
    </section>
</div>
</body>
</html>