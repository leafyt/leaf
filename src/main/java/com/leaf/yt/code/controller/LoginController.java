package com.leaf.yt.code.controller;

import com.leaf.yt.code.entity.Person;
import com.leaf.yt.code.service.PersonService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

@Controller
@RequestMapping("/person")
public class LoginController {

    //植入对象
    @Resource
    private PersonService service;

    /*跳转登录页*/
    @RequestMapping("/loginHtml")
    public String loginHtml() {
        return "/login/login";
    }

    /*登录*/
    @RequestMapping("/login")
    public ModelAndView login(Person user, ModelAndView mv, HttpServletRequest request, Model model) {
        Person login = service.login(user.getUserName(), user.getPassword());
        System.out.println(login);
        if (login != null) {
            request.getSession().setAttribute("login", login);
            System.out.println("成功！！");
            mv.setViewName("/index");
        } else {
            System.out.println("失败！！");
            mv.setViewName("/login/login");
        }
        return mv;
    }

}
