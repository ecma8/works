require(["common"],function(){require(["maintab","blockUI","jqueryUI","evol","datetimepickerCN"],function(t){function e(){$("#"+s+"-info-set-add").unbind("click").click(function(){var t='<li data-type="1" data-isAdd="yes"><input type="text" class="resource-input" name="" value="新字段"><input type="checkbox" checked="true"> 必填 <i class="group-remove '+s+'-info-set-del"></li>';$("#"+s+"-info-set ul").append(t),$("#"+s+"-info-set ul input:checkbox").uniform()}),$("#"+s+"-info-set").unbind("click").on("click","."+s+"-info-set-del",function(){var t=$(this).parent(),e=t.attr("data-isAdd");"no"==e?t.attr("data-type","2").css("display","none"):t.remove()}),$("#"+s+"-info-set").unbind("change").on("change","input:text, input:checkbox",function(){var t=$(this).parents("li");t.attr("data-isEdt","yes")}),$("#"+s+"-info-set-save").unbind("click").click(function(){var t={attributes:[]};$("#"+s+"-info-set ul").children("li").each(function(){var e={},i={},a={},n=$(this).attr("data-type");if("1"==n){e.type=1,e.bizType=d,e.name=$(this).find("input:text").val(),e.required=$(this).find("input:checkbox").prop("checked")?1:0,e.inputType=1,e.length=$(this).find("input:text").val().length,e.status=1,t.attributes.push(e);var s=$(this).find("input:text")[0];$(".client-info-ul").find("li input:text").each(function(e){if(s!=this&&$(this).val()==$(s).val())return $.Alert("新字段不能重名！"),t.attributes=[],!1})}else"2"==n?(a.id=$(this).attr("data-id"),a.type=2,a.bizType=d,a.name=$(this).find("input:text").val(),a.required=$(this).find("input:checkbox").prop("checked")?1:0,a.inputType=1,a.length=$(this).find("input:text").val().length,a.status=1,t.attributes.push(a)):"3"==n?"yes"==$(this).attr("data-isEdt")&&(i.id=$(this).attr("data-id"),i.type=3,i.bizType=d,i.name=$(this).find("input:text").val(),i.required=$(this).find("input:checkbox").prop("checked")?1:0,i.inputType=1,i.length=$(this).find("input:text").val().length,i.status=1,t.attributes.push(i)):"yes"==$(this).attr("data-isEdt")&&(i.id=$(this).attr("data-id"),i.type=3,i.bizType=d,i.name=$(this).find("input:text").val(),i.required=$(this).find("input:checkbox").prop("checked")?1:0,i.inputType=1,i.length=$(this).find("input:text").val().length,i.status=1,t.attributes.push(i))}),t.attributes.length>0?$.ajax({url:Base.sitUrl+"/api/org/v1/org/staff/defined/attribute/edit",data:{data:JSON.stringify(t)},dataType:"json",type:"GET",success:function(t){t.success?$.Alert("保存成功！"):$.Alert("保存失败！")}}):$.Alert("没做任何修改！")})}function i(){$("#"+s+"-info-set ul").children("li").remove(),$.ajax({url:Base.sitUrl+"/api/org/v1/org/staff/defined/attribute/list",data:{data:JSON.stringify({bizType:d})},dataType:"json",type:"GET",success:function(t){if(!t.success)return void alert(t.message);for(var i=t.data,a=0;a<i.length;a++){var n=i[a],u="";u=n.status==-1?0==n.required?'<li data-isAdd="no" data-id="'+i[a].id+'"><input type="text" class="resource-input" name="" value="'+i[a].name+'" disabled><input type="checkbox" disabled> 必填</li>':'<li data-isAdd="no" data-id="'+i[a].id+'"><input type="text" class="resource-input" name="" value="'+i[a].name+'" disabled><input type="checkbox" checked="true" disabled> 必填</li>':0==n.required?0==n.removable?'<li data-type="3" data-isEdt="no" data-id="'+i[a].id+'" data-isAdd="no"><input type="text" class="resource-input" name="" value="'+i[a].name+'" disabled><input type="checkbox" > 必填 </li>':'<li data-type="3" data-isEdt="no" data-id="'+i[a].id+'" data-isAdd="no"><input type="text" class="resource-input" name="" value="'+i[a].name+'"><input type="checkbox" > 必填 <i class="group-remove '+s+'-info-set-del"></li>':0==n.removable?'<li data-type="3" data-isEdt="no" data-id="'+i[a].id+'" data-isAdd="no"><input type="text" class="resource-input" name="" value="'+i[a].name+'"disabled><input type="checkbox" checked="true" > 必填</li>':'<li data-type="3" data-isEdt="no" data-id="'+i[a].id+'" data-isAdd="no"><input type="text" class="resource-input" name="" value="'+i[a].name+'"><input type="checkbox" checked="true" > 必填 <i class="group-remove '+s+'-info-set-del"></li>',"order_no"==i[a].code&&3==d&&(u=""),$("#"+s+"-info-set ul").append(u)}$("#"+s+"-info-set ul input:checkbox").uniform(),e()}})}var a=top.funcList;$("[data-code]").each(function(){for(var t=0;t<a.length;t++)a[t].code==$(this).attr("data-code")&&$(this).removeClass("none")}),jQuery().datetimepicker&&$(".datetime-picker").datetimepicker({language:"zh-CN",todayBtn:1,autoclose:1,todayHighlight:1,startView:2,minView:2,format:"yyyy-mm-dd",bootcssVer:3});var n=location.href,d=1,s="client";n.indexOf("bk-resource-lm")>0?(d=2,s="contacts",i()):n.indexOf("bk-resource-ofInfo")>0?(d=3,s="order",i()):(d=1,s="client",$("#client-info-set-li").on("click",i))})});