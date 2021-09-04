package com.leaf.yt.code.export;


import com.leaf.yt.code.dao.GoodsMybatisDao;
import com.leaf.yt.code.utils.ParameterUtil;
import com.leaf.yt.code.utils.export.AbstractCSVExportService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

/**
 * <p>
 * 导出
 * </p>
 *
 */
@Component
public class GoodsExportService extends AbstractCSVExportService<GoodsVO> {

    @Resource
    private GoodsMybatisDao goodsMybatisDao;

    Map<String, Object> searchMap;

    @Override
    public void prepareExport(Map<String, Object> parameterMap) {
        searchMap = ParameterUtil.getParametersStartingWith(parameterMap, "filter_");
        Iterator<String> iterator = searchMap.keySet().iterator();
        while (iterator.hasNext()) {
            String key = iterator.next();
            String value = (String) searchMap.get(key);
            if (StringUtils.isEmpty(value)) {
                iterator.remove();
                continue;
            }
        }
    }

    @Override
    public int queryTotal() {
        Long count = goodsMybatisDao.countForPage(searchMap);
        return Integer.valueOf(count.toString());
    }

    @Override
    public List<GoodsVO> queryList(int start, int size) {
        searchMap.put("start", start);
        searchMap.put("limit", size);
        List<GoodsVO> resultList = goodsMybatisDao.listForPage(searchMap);
        return resultList;
    }

    @Override
    public String[] getTableHead() {
        String[] head = new String[]{
                "id", "商品编码", "商品名称", "标题", "售价", "商品状态", "销量", "创建时间", "修改时间"};

        return head;
    }

    @Override
    public String getFileName() {
        return "";
    }

    @Override
    public Class<GoodsVO> getClazz() {
        return GoodsVO.class;
    }
}
