require(["common"],function(){require(["maintab","blockUI","ztree","jqform"],function(e){function n(){var e=new Array,n={view:"0"};return $.ajax({type:"POST",url:Base.sitUrl+"/api/disk/v1/folder/list/all",dataType:"json",async:!1,data:{data:JSON.stringify(n)},success:function(n){if(!n.success)return void $.Alert(n.message);for(var t=n.data,a=0;a<t.length;a++)0==t[a].type&&e.push(t[a])}}),e}function t(e,n){$("#form_file").ajaxForm({url:Base.sitUrl+"/api/file/upload",beforeSend:function(){$.BlockUI()},complete:function(){$.UnblockUI()},success:function(t){if(!t.success)return void $.unLogin(t);var a="http://"+t.data;$("#Newfilename").val(e),$("#Newfilename").attr("data-url",a),$("#Newfilename").attr("data-size",n)}}).submit()}function a(e){var n=!0,t=e.prop("files"),a=t[0].size;return{flag:n,name:t[0].name,size:a}}function i(e,n){return!1}function r(e,n,t){l("[ "+s()+" onRename ]&nbsp;&nbsp;&nbsp;&nbsp; "+t.name)}function l(e){c||(c=$("#log")),c.append("<li class='"+f+"'>"+e+"</li>"),c.children("li").length>8&&c.get(0).removeChild(c.children("li")[0])}function s(){var e=new Date,n=e.getHours(),t=e.getMinutes(),a=e.getSeconds(),i=e.getMilliseconds();return n+":"+t+":"+a+" "+i}function o(){var e=$.fn.zTree.getZTreeObj("treeDemo");e.setting.edit.editNameSelectAll=$("#selectAll").attr("checked")}$.GetQueryString("userId");$("#savenewFile").on("click",function(){var e=$.fn.zTree.getZTreeObj("treeDemoAdd"),n=e.getSelectedNodes();if(""==n)var t="0";else var t=n[0].id;for(var a=$("#Newfilename").val(),i=$("#Newfilename").attr("data-size"),r=$("#Newfilename").attr("data-url"),l=i.split(","),s=r.split(","),o=a.split(","),c=new Array,d=0;d<l.length;d++){var u={pid:t,name:o[d],file:s[d],size:l[d],type:"1",shareType:"1",operateType:"0",userType:"0"};c.push(u)}var f={diskfiles:c};$.ajax({url:Base.sitUrl+"/api/disk/v1/file/save/batch",type:"POST",dataType:"json",data:{data:JSON.stringify(f)},beforeSend:function(e){$.BlockUI()},complete:function(e,n){$.UnblockUI()},success:function(e){return e.success?($.DestroyPopInPop(),void parent.location.reload()):void $.unLogin(e)}})}),$("#Newfilename").on("click",function(){return $("#up-files").click()}),$("#up-files").on("change",function(e){$.EventFn(e);var n=a($(this)),i=document.getElementById("up-files").files;if(n.flag){for(var r="",l="",s=0;s<i.length;s++)r+=i[s].name+",",l+=i[s].size+",";r=r.substring(0,r.length-1),l=l.substring(0,l.length-1),t(r,l)}});var c,d=n(),u={view:{selectedMulti:!1},edit:{enable:!0,editNameSelectAll:!0},data:{simpleData:{enable:!0}},callback:{beforeDrag:i}},f="dark";$(document).ready(function(){for(var e=new Array,n=d,t=0;t<n.length;t++)e[t]={id:n[t].id,pId:n[t].pid,name:n[t].name,open:!0};$.fn.zTree.init($("#treeDemoAdd"),u,e),$("#selectAll").bind("click",o);var a=$("#navInput",parent.document).attr("data-pid"),i=$.fn.zTree.getZTreeObj("treeDemoAdd"),l=i.getNodeByParam("id",a);i.selectNode(l),u.callback.onClick=r})})});