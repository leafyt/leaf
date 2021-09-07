<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html xmlns:th="http://www.thymeleaf.org">

<head>
    <meta charset="utf-8">
    <title>系统登录 - 宿舍管理系统</title>
    <style type="text/css">
        * {
            margin: 0;
            padding: 0;
        }

        html {
            background-image: url(/omui/images/background.jpg);
        }

        #wrap {
            height: 75%;
            width: 100;
            background-image: url(/omui/images/background.jpg);
            background-repeat: no-repeat;
            background-position: center center;
            position: relative;
        }

        #head {
            height: 46px;
            width: 100;
            background-color: #66CCCC;
            text-align: center;
            position: relative;
        }

        #wrap .logGet {
            height: 408px;
            width: 368px;
            position: absolute;
            background-color: #FFFFFF;
            top: 20%;
            right: 15%;
        }

        .logC a button {
            width: 100%;
            height: 45px;
            background-color: #ee7700;
            border: none;
            color: white;
            font-size: 18px;
        }

        .logGet .logD.logDtip .p1 {
            display: inline-block;
            font-size: 28px;
            margin-top: 30px;
            width: 86%;
        }

        #wrap .logGet .logD.logDtip {
            width: 86%;
            border-bottom: 1px solid #ee7700;
            margin-bottom: 60px;
            margin-top: 0px;
            margin-right: auto;
            margin-left: auto;
        }

        .logGet .lgD img {
            position: absolute;
            top: 12px;
            left: 8px;
        }

        .logGet .lgD input {
            width: 100%;
            height: 42px;
            text-indent: 2.5rem;
        }

        #wrap .logGet .lgD {
            width: 86%;
            position: relative;
            margin-bottom: 30px;
            margin-top: 30px;
            margin-right: auto;
            margin-left: auto;
        }

        #wrap .logGet .logC {
            width: 86%;
            margin-top: 0px;
            margin-right: auto;
            margin-bottom: 0px;
            margin-left: auto;
        }

        .title {
            font-family: "宋体";
            color: #FFFFFF;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%); /* 使用css3的transform来实现 */
            font-size: 36px;
            height: 40px;
            width: 30%;
        }

        /*.copyright {*/
        /*font-family: "宋体";*/
        /*color: #FFFFFF;*/
        /*position: absolute;*/
        /*top: 50%;*/
        /*left: 50%;*/
        /*transform: translate(-50%, -50%);  !* 使用css3的transform来实现 *!*/
        /*height: 60px;*/
        /*width: 40%;*/
        /*text-align:center;*/
        /*}*/

        /*.copyright .img .icon {*/
        /*display: inline-block;*/
        /*width: 24px;*/
        /*height: 24px;*/
        /*margin-left: 22px;*/
        /*vertical-align: middle;*/
        /*!*  background-image: url(th:'@{/static/41a5da805fd87a785882119e9ff84d8e.jpg}');*!*/
        /*background-repeat: no-repeat;*/
        /*vertical-align: middle;*/
        /*margin-right: 5px;*/
        /*}*/

        /*.copyright .img .icon1 {*/
        /*display: inline-block;*/
        /*width: 24px;*/
        /*height: 24px;*/
        /*margin-left: 22px;*/
        /*vertical-align: middle;*/
        /*background-image: url(%E5%9C%B0%E5%9D%80.png);*/
        /*background-repeat: no-repeat;*/
        /*vertical-align: middle;*/
        /*margin-right: 5px;*/
        /*}*/
        /*.copyright .img .icon2 {*/
        /*display: inline-block;*/
        /*width: 24px;*/
        /*height: 24px;*/
        /*margin-left: 22px;*/
        /*vertical-align: middle;*/
        /*background-image: url(%E8%81%94%E7%B3%BB%E6%96%B9%E5%BC%8F.png);*/
        /*background-repeat: no-repeat;*/
        /*vertical-align: middle;*/
        /*margin-right: 5px;*/
        /*}*/
    </style>
</head>

<body>
<div class="header" id="head">
    <div class="title">宿舍管理系统</div>

</div>

<div class="wrap" id="wrap">
    <div class="logGet">
        <!-- 头部提示信息 -->
        <div class="logD logDtip" style="text-align: center">
            <p class="p1">登录</p>
        </div>
        <!-- 输入框 -->
        <div class="lgD">
            <img th:src="@{/omui/images/user.png}" src="../omui/images/user.png" width="20" height="20" alt=""/>
            <input type="text"
                   placeholder="输入用户名" name="userName" id="userName" value=""/>
            <span></span>
        </div>
        <div class="lgD">
            <img th:src="@{/omui/images/pwd.png}" src="../omui/images/pwd.png" width="20" height="20" alt=""/>
            <input type="password"
                   placeholder="输入用户密码" name="password" id="password"/>
            <span></span>
        </div>
        <div id="error_box" style="text-align: center;color: red"></div>
        <div class="logC">
            <a href="#" id="loginButton">
                <button onclick="login()">登 录</button>
            </a>
        </div>
    </div>
</div>
</body>
<script type="text/javascript" src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
<script>
    function login() {
        var userName = document.getElementById("userName");
        var password = document.getElementById("password");
        var oError = document.getElementById("error_box");
        // var isError = true;
        if (userName.value.length > 20 || userName.value.length < 6) {
            oError.innerHTML = "用户名请输入6-20位字符";
            // isError = false;
            return;
        } else if ((userName.value.charCodeAt(0) >= 48) && (userName.value.charCodeAt(0) <= 57)) {
            oError.innerHTML = "首字符必须为字母";
            return;
        } else for (var i = 0; i < userName.value.charCodeAt(i); i++) {
            if ((userName.value.charCodeAt(i) < 48) || (userName.value.charCodeAt(i) > 57) && (userName.value.charCodeAt(i) < 97) || (userName.value.charCodeAt(i) > 122)) {
                oError.innerHTML = "必须为字母跟数字组成";
                return;
            }
        }

        if (password.value.length > 20 || password.value.length < 6) {
            oError.innerHTML = "密码请输入6-20位字符"
            // isError = false;
            return;
        }
        var formData = 'userName=' + userName.value + '&password=' + password.value;

        $.ajax({
            type: 'post',
            url: '/person/login',
            data: formData,
            dataType: 'json',
            success: function (d) {
                // var d = eval(data);
                // if (d.success) {
                // window.alert("登录成功");
                if (d) {
                    d = eval(d);
                    var status = d["retCode"];
                    if (status == "200") {
                        window.location = "index";
                    } else {
                        oError.innerHTML = d["retMessage"];
                        // window.show(d["retMessage"], 'error', 2000);
                    }
                }
            }
            // }
        });
    }
</script>
</html>