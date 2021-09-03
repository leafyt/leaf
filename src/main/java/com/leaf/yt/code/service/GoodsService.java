package com.leaf.yt.code.service;



import com.leaf.yt.code.export.GoodsVO;
import com.leaf.yt.code.utils.entity.GridDataModel;
import com.leaf.yt.code.utils.entity.OmuiPage;
import org.springframework.stereotype.Service;
import com.leaf.yt.code.dao.GoodsMybatisDao;

import javax.annotation.Resource;
import java.util.*;


/**
 * <p>
 *  服务类
 * </p>
 *
 * @author liuzhinan
 * @since 2020-07-22
 */
@Service
public class GoodsService {

    @Resource
    private GoodsMybatisDao goodsDao;

    /**
     * 分页查询
     * */
    public GridDataModel<GoodsVO> findByPage(Map<String, Object> searchParams, OmuiPage page){
        GridDataModel<GoodsVO> gm = new GridDataModel<GoodsVO>();
        searchParams.put("start", page.getStart());
        searchParams.put("limit", page.getLimit());
        long count = goodsDao.countForPage(searchParams);
        List<GoodsVO> list = goodsDao.listForPage(searchParams);
        gm.setTotal(count);
        gm.setRows(list);
        return gm;
    }



}

