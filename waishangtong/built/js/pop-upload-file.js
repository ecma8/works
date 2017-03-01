require(["common"],function(){require(["maintab","blockUI","ztree","jqform","bootstrap"],function(e){var t=$.GetQueryString("custId"),i=$.GetQueryString("contId"),a=Number($.GetQueryString("pIdx"));!function(){var e={view:{selectedMulti:!1},check:{enable:!0},data:{simpleData:{enable:!0}},callback:{beforeDrag:!1}};$.ajax({type:"POST",url:Base.sitUrl+"/api/disk/v1/all/visible/file/list",dataType:"json",success:function(t){if(!t.success)return void $.Alert(t.message);for(var i=t.data,a=new Array,l=0;l<i.length;l++){if(1==i[l].type)var n="pIcon",r=!1;else var n="",r=!0;a[l]={id:i[l].id,pId:i[l].pid,name:i[l].name,type:i[l].type,url:i[l].file,actualSize:i[l].actualSize,open:!1,nocheck:r,iconSkin:n}}$.fn.zTree.init($("#treeCloud"),e,a)}})}(),$("#addCloud").click(function(){var e=$.fn.zTree.getZTreeObj("treeCloud"),t=e.getCheckedNodes(!0),i="",a=$(".file-list").find("li");if(a.length>0)for(var l=0;l<t.length;l++){for(var n=!1,r=0;r<a.length;r++){var c=a.eq(r).attr("data-url");if(c==t[l].url){n=!0;break}}n||(i+='<li data-size="'+t[l].actualSize+'" data-url="'+t[l].url+'" data-source="1">                        <p class="file-img"><img src="../images/ico-file.png" width="30" height="30" alt="" /></p>                        <p class="file-tit">'+t[l].name+'</p>                        <i class="del-file"></i>                        </li>')}else for(var l=0;l<t.length;l++)i+='<li data-size="'+t[l].actualSize+'" data-url="'+t[l].url+'" data-source="1">                        <p class="file-img"><img src="../images/ico-file.png" width="30" height="30" alt="" /></p>                        <p class="file-tit">'+t[l].name+'</p>                        <i class="del-file"></i>                        </li>';$(".file-list").prepend(i),$("#cloudModal").modal("hide")}),$(".file-local").click(function(){$("#up-files").click()}),$("#up-files").change(function(e){$.EventFn(e),$("#file-form").ajaxForm({url:Base.sitUrl+"/api/file/upload",beforeSend:function(){$.BlockUI()},complete:function(){$.UnblockUI()},success:function(e){if(!e.success)return void $.unLogin(e);for(var t=e.data,i=t.split(","),a=document.getElementById("up-files").files,l=$(".file-list"),n=0;n<a.length;n++){var r='<li data-size="'+a[n].size+'" data-url="'+i[n]+'" data-source="0">                        <p class="file-img"><img src="../images/ico-file.png" width="30" height="30" alt="" /></p>                        <p class="file-tit">'+a[n].name+'</p>                        <i class="del-file"></i>                        </li>';l.append(r)}}}).submit()}),$(".file-list").on("click",".del-file",function(){$(this).closest("li").remove()}),$(".upload").click(function(){var e="/api/user/v1/document/save",l={},n=$(".file-list li");if(n.length>1){e="/api/user/v1/document/save/batch",l.documents=[];for(var r=0;r<n.length;r++){var c={customerId:t,documentName:n.eq(r).find(".file-tit").text(),documentUrl:n.eq(r).attr("data-url"),documentSize:n.eq(r).attr("data-size"),source:n.eq(r).attr("data-source")};null!=i&&(c.customerContactsId=i),l.documents.push(c)}}else{if(1!=n.length)return void $.Alert("没有选择文件！");l={customerId:t,documentName:n.find(".file-tit").text(),documentUrl:n.attr("data-url"),documentSize:n.attr("data-size"),source:n.attr("data-source")},null!=i&&(l.customerContactsId=i)}$.ajax({url:Base.sitUrl+e,type:"POST",dataType:"json",data:{data:JSON.stringify(l)},success:function(e){e.success?$.Alert("上传文档成功！","",function(){var e=$("#mainTab",parent.document).find(".currentClass").index();parent.me.refresh2(a,"part"),parent.me.closeOne(e,!0)}):$.unLogin(e)}})}),$(".cancel").click(function(e){e.preventDefault();var t=$("#mainTab",parent.document).find("currentClass").index();parent.me.closeOne(t)})})});