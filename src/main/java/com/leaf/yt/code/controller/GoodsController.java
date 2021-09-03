
package com.leaf.yt.code.controller;

import com.leaf.yt.code.export.GoodsExportService;
import com.leaf.yt.code.export.GoodsVO;
import com.leaf.yt.code.service.GoodsService;
import com.leaf.yt.code.utils.ParameterUtil;
import com.leaf.yt.code.utils.entity.GridDataModel;
import com.leaf.yt.code.utils.entity.JsonMapper;
import com.leaf.yt.code.utils.entity.OmuiPage;
import com.leaf.yt.code.utils.entity.Resp;
import com.leaf.yt.code.utils.export.ExportMethod;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.ServletRequest;
import java.util.Map;

/**
 * <p>
 * ${tablecomment}  前端控制器
 * </p>
 *
 * @author liuzhinan
 * @since 2020-07-22
 */
@Controller
@RequestMapping(value = "/admin/goods")
public class GoodsController {
    private static Logger logger = LoggerFactory.getLogger(GoodsController.class);

    @Resource
    private GoodsService goodsService;


    @RequestMapping(value = "list", method = RequestMethod.GET)
    public String list(Model model) {
        return "/goods/list";
    }

    @RequestMapping(value = "searchList", method = RequestMethod.POST)
    @ResponseBody
    @ExportMethod(serviceClass = GoodsExportService.class, memo = "明细导出")
    public String searchList(ServletRequest request, @ModelAttribute("page") OmuiPage page) {
        try {
            Map<String, Object> searchParam = ParameterUtil.getParametersStartingWith(request, "filter_");
            GridDataModel<GoodsVO> gd = goodsService.findByPage(searchParam, page);
            return JsonMapper.nonDefaultMapper().toJson(gd);
        } catch (Exception e) {
            logger.error("查询出错了", e);
            return JsonMapper.nonDefaultMapper().toJson(new Resp("false", e.getMessage()));
        }
    }


}
