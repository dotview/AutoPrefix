# AutoPrefix

nodejs自动添加前缀，用于js中的html拼接。

  <div class="part1">
    <table width="100%" border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td width="60px"><span class="icon_close"></span></td>
        <td width="auto">
          <p class="fs22 cc6">申请关闭</p><p class="fs16">打款失败，收款账户姓名不符，请检查后重新绑卡进行申请</p>
        </td>
      </tr>
    </table>
  </div>
  
  
 ===>
 
 
 html+='  <div class="part1">';
html+='    <table width="100%" border="0" cellspacing="0" cellpadding="0">';
html+='      <tr>';
html+='        <td width="60px"><span class="icon_close"></span></td>';
html+='        <td width="auto">';
html+='          <p class="fs22 cc6">申请关闭</p><p class="fs16">打款失败，收款账户姓名不符，请检查后重新绑卡进行申请</p>';
html+='        </td>';
html+='      </tr>';
html+='    </table>';
html+='  </div>';
