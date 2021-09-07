package com.leaf.yt.code.controller;

import com.alibaba.fastjson.JSONObject;
import com.leaf.yt.code.entity.Person;
import com.leaf.yt.code.service.PersonService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

@Controller
@RequestMapping("/person")
public class LoginController {
    private static Logger logger = LoggerFactory.getLogger(GoodsController.class);

    //植入对象
    @Resource
    private PersonService service;

//    /*跳转登录页*/
//    @RequestMapping("/loginHtml")
//    public String loginHtml() {
//        return "/login/login";
//    }

    /*跳转登录页*/
    @RequestMapping("/newloginHtml")
    public String newloginHtml() {
        return "/login/newlogin";
    }

    /*跳转首页*/
    @RequestMapping("/index")
    public String indexHtml() {
        return "index";
    }

    /*登录接口*/
    @RequestMapping("/login")
    @ResponseBody
    public JSONObject login(Person user, HttpServletRequest request) {
        JSONObject json = new JSONObject();
//        Map<String, String> param = new HashMap<>();
//        Response response;
        try {
            Person login = service.login(user.getUserName(), user.getPassword());
            if (login != null) {
                json.put("data", login);
                json.put("retCode", 200);
                json.put("retMessage", "登录成功");
            } else {
                json.put("retCode", 201);
                json.put("retMessage", "登录失败，账号或密码错误!");
            }
        } catch (Exception e) {
            logger.error("person/login", e);
            json.put("retCode", "2001");
            json.put("retMessage", "登录异常!");
        }
        return json;
    }

}
