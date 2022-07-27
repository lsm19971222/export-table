/**
 * @author 李松明
 * @param {*} tableData 完整的表格数据
 * @param {*} tableTab 表格的tab栏
 * @param {*} tableKey 每一列对应的tableData中的key值
 * @param {*} tableName 导出的表格名
 */
export const exportTable = function(tableData, tableTab, tableKey, tableName ) {
  let dataStr = tableTab.toString() + "\n";
  tableData.forEach((item, index) => {
    dataStr += index + 1 + "\t,";
    tableKey.forEach((key) => {
      let itemVal = item[key].toString()
      itemVal = itemVal.replace(/"/g, '""')
      dataStr +=  `"${itemVal}"\t,`
    });
    dataStr += "\n";
  });
  const url = "data:text/xls;charset=uft-8,\ufeff" + encodeURIComponent(dataStr);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.download = tableName + '.xls'
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
