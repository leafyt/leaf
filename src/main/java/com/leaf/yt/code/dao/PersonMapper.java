package com.leaf.yt.code.dao;

import com.leaf.yt.code.entity.Person;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface PersonMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Person record);

    Person selectByPrimaryKey(Integer id);

    List<Person> selectAll();

    int updateByPrimaryKey(Person record);

    //登录
    Person login(@Param("username") String username, @Param("password") String password);
}