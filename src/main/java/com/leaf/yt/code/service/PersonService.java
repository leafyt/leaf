package com.leaf.yt.code.service;

import com.leaf.yt.code.dao.PersonMapper;
import com.leaf.yt.code.entity.Person;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class PersonService {
    @Resource
    private PersonMapper personMapper;

    //登陸
    public Person login(String username, String password) {
        Person person = personMapper.login(username, password);
        return person;
    }
}
