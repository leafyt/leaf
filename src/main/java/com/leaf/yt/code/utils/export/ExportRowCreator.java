package com.leaf.yt.code.utils.export;

/**
 * 将实体类 转换 成表格一行的接口
 */
public interface ExportRowCreator {

    String[] createRow();
}
