<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>系统登录 - 宿舍管理系统</title>
    <link rel="stylesheet"/>
    <style>
        #parent{
            width:500px;
            height:200px;
            margin-top:20%;
            margin-left:50%;
            transform:translate(-50%,-50%) ;
            background:#009688;
        }
        .password,.subBtn{
            margin-top: 2%;
            margin-left: 3%;
        }
        .loginHeader{
            padding-top: 1%;
        }
    </style>
</head>
<body class="login_bg">
<div id="parent">
    <section class="loginBox">
        <header class="loginHeader" style="text-align:center; ">
            <h1>宿舍管理系统</h1>
        </header>
        <section class="loginCont">
            <form class="loginForm" action="/person/login" method="post" onsubmit="return check()" >
                <div class="inputbox"  style="text-align:center; ">
                    <label for="user">用户名：</label>
                    <input id="user" type="text" name="userName" placeholder="请输入用户名" required="required" />
                </div>
                <div class="password"  style="text-align:center; " >
                    <label for="mima">密码：</label>
                    <input id="mima" type="password" name="password" placeholder="请输入密码" required="required" />
                </div>
                <div class="subBtn"  style="text-align:center; ">
                    <input type="submit" value="登录" />
                    <input type="reset" value="重置"/>
                </div>
            </form>
        </section>
    </section>
</div>
</body>
</html>