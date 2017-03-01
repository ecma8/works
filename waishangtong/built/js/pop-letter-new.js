require(["common"],function(){require(["maintab","ZeroClipboard","ueditorLang","blockUI","jqform"],function(t,e){function n(){var t=[];t.push(U.letter.getContent());var e=t.join("\n");return e}function i(t,e){$("#form_file").ajaxForm({url:Base.sitUrl+"/api/file/upload",beforeSend:function(){$.BlockUI()},complete:function(){$.UnblockUI()},success:function(e){if(!e.success)return void $.unLogin(e);var n="http://"+e.data;$("#addFiles").empty();var i='<li data-url="'+n+'" style="display: inline-block;padding: 5px 0;"><i class=""></i><span class="filesName">'+t+"</span> 上传成功！</li>";$("#addFiles").append(i),$(".add-attachment").text("重新上传")}}).submit()}function a(t,e){$("#form_file1").ajaxForm({url:Base.sitUrl+"/api/file/upload",beforeSend:function(){$.BlockUI()},complete:function(){$.UnblockUI()},success:function(n){if(!n.success)return void $.unLogin(n);var i="http://"+n.data,a='<li data-url="'+i+'" style="display: inline-block;padding: 5px 0;margin:0 5px;" data-size="'+(e/1024).toFixed(2)+'"><i class="pub-icon fujian-excl-iocn"></i><span class="filesName">'+t+'</span>&nbsp;&nbsp;<span style="color:#89c682;">文件上传成功！</span> <span class="file-del">删除</span></li>';$("#addFiles1").show(),$("#addFiles1").prepend(a)}}).submit()}function s(t){var e=!0,n=t.prop("files"),i=Math.round(n[0].size/1024*100)/100/1024,a=n[0].size;return i>5&&($.Alert("上传附件需小于5MB"),e=!1),{flag:e,name:n[0].name,size:a}}function o(){for(var t=$("#stepOne .successSpan").find(".emailLabel"),e="",n=0;n<t.length;n++)e+='"'+$("#stepOne .successSpan").find(".emailLabel").eq(n).text()+'":"",';return e=e.substring(0,e.length-1),e="{"+e+"}"}function l(){$.ajax({url:Base.sitUrl+"/api/customer/v1/customer/email/batch/count",type:"POST",dataType:"json",data:{data:"{}"},success:function(t){if(!t.success)return void $.unLogin(t);for(var e=t.data,n="",i="",a=0;a<e.length;a++)1==e[a].valueI?n+='<li style="margin-bottom:10px;"><input type="checkbox" data-id="'+e[a].valueII+'" value="'+e[a].valueV+'" id="highSeas'+a+'"><label for="highSeas'+a+'">'+e[a].valueIII+"</label></li>":0==e[a].valueI&&(i+='<li style="margin-bottom:10px;"><input type="checkbox" data-id="'+e[a].valueII+'" value="'+e[a].valueV+'" id="noHighSeas'+a+'"><label for="noHighSeas'+a+'">'+e[a].valueIII+"</label></li>");$("#noHighSeasUl").empty(),$("#noHighSeasUl").append('<li style="margin-bottom:10px;"><input type="checkbox" data-id="" value="0" id="noHighSeasCheckbox"><label for="noHighSeasCheckbox">全部</label></li>'),$("#noHighSeasUl").append(i),$("#highSeasUl").empty(),$("#highSeasUl").append('<li style="margin-bottom:10px;"><input type="checkbox" data-id="" value="0" id="highSeasCheckbox"><label for="highSeasCheckbox">全部</label></li>'),$("#highSeasUl").append(n)}})}function c(){var t="",e="",n="",i=$("#noHighSeasName").val(),a=$("#seas").find("input[type=radio]:checked").attr("data-highSeas"),s=$("#countryList option:selected").val();if($("#starLevel").find("input[type=checkbox]:checked").length>0)if(1==$("#starLevel0").prop("checked"))t="1,2,3,4,5,";else for(var o=0;o<$("#starLevel").find("input[type=checkbox]:checked").length;o++)t+=$("#starLevel").find("input[type=checkbox]:checked").eq(o).attr("data-value")+",";var l=t.substring(0,t.length-1),c=$("#f-group option:selected").val(),d=$("#containsTags").find("input[type=radio]:checked").attr("data-id");if($("#tags").find("span").length>0)for(var o=0;o<$("#tags").find("span").length;o++)e+=$("#tags").find("span").eq(o).attr("data-id")+",";else e+="0";var r=e.substring(0,e.length-1),p=$("#latestContactDays option:selected").val(),u=$("#f-kinds option:selected").val(),b=$("#statusList option:selected").attr("data-id"),h=$("#sourceList option:selected").val(),f=$("#pdt1 option:selected").val(),v=$("#pdt2 option:selected").val(),m=$("#pdt3 option:selected").val(),g=$("#pdt4 option:selected").val();void 0!==g&&""!==g?n=g:void 0!==m&&""!==m?n=m:void 0!==v&&""!==v?n=v:void 0!==f&&""!==f&&(n=f);var y=$("#seas").find("input[type=radio]:checked").attr("data-highSeas"),k=$("#followerList option:selected").val(),x={keyword:i,highSeas:parseInt(w(a)),countries:parseInt(w(s)),starLevels:l,customerGroupId:parseInt(w(c)),containsTags:parseInt(w(d)),tagIds:r,latestContactDays:parseInt(w(p)),customerType:parseInt(w(u)),status:parseInt(w(b)),customerSource:parseInt(w(h)),productType:parseInt(w(n)),followStatus:parseInt(w(y)),originalFollowUpUser:parseInt(w(k))},S=JSON.stringify(x);return S}function d(t,e){$("#form_img").ajaxForm({url:Base.sitUrl+"/api/file/upload",beforeSend:function(){$.BlockUI()},complete:function(){$.UnblockUI()},success:function(t){if(!t.success)return void $.unLogin(t);var e="http://"+t.data;UE.getEditor("letterEditor").execCommand("insertimage",{src:e,width:"300",height:"auto"})}}).submit()}function r(){var t={};return $.ajax({url:Base.sitUrl+"/api/email/setting/v1/templates/search",type:"GET",success:function(t){if(!t.success)return void $.unLogin(t);for(var e=t.data,n="",i=0;i<e.length;i++)n+='<li data-value="'+e[i].value+'"><input type="radio" id="radio'+i+'" style="margin-right:5px;" name="modal"><label for="radio'+i+'" style="display:inline-block;">'+e[i].name+"</label></li>";$(".add-model").empty(),$(".add-model").append(n)}}),t}function p(){$.ajax({url:Base.sitUrl+"/api/user/v1/user/tag/list",type:"POST",dataType:"json",data:{tagType:1},success:function(t){if(!t.success)return void $.unLogin(t);for(var e=t.data,n="",i=0;i<e.length;i++)n+='<li data-value="'+e[i].id+'"><input type="checkbox" name="tagsName" id="tagsLi'+i+'"><label for="tagsLi'+i+'">'+e[i].name+"</label></li>";$("#tagsUl").empty(),$("#tagsUl").append(n)}})}function u(){var t=$("#highSeasUl").find("input[type=checkbox]:checked"),e=$("#noHighSeasUl").find("input[type=checkbox]:checked"),n="",i="",a="";if(1==$("#highSeasCheckbox").prop("checked")){for(var s=1;s<t.length;s++)n+=t.eq(s).attr("data-id")+",";n=n.substring(0,n.length-1)}else{for(var s=0;s<t.length;s++)n+=t.eq(s).attr("data-id")+",";n=n.substring(0,n.length-1)}if(1==$("#noHighSeasCheckbox").prop("checked")){for(var s=1;s<e.length;s++)i+=e.eq(s).attr("data-id")+",";i=i.substring(0,i.length-1)}else{for(var s=0;s<e.length;s++)i+=e.eq(s).attr("data-id")+",";i=i.substring(0,i.length-1)}return a='{"highSeas":"'+S(n)+'","noHighSeas":"'+i+'"}'}function b(){var t=$("#subject").val(),e=$("#subject1").val(),n=$("#subject2").val(),i=$("#subject3").val(),a='"subject":"'+t+'","subject1":"'+e+'","subject2":"'+n+'","subject3":"'+i+'"';return a}function h(){for(var t=$("#addFiles1").find("li"),e="",n="",i=0;i<t.length;i++){var a=t.eq(i).attr("data-url"),s=t.eq(i).find(".filesName").text(),o=t.eq(i).attr("data-size"),l={fileUrl:a,filename:s,size:parseInt(o)};fileJson=JSON.stringify(l)+",",e+=fileJson}return e=e.substring(0,e.length-1),n="["+e+"]"}function f(){$.ajax({url:Base.sitUrl+"/api/org/v1/org/staff/customer/status/list",type:"POST",dataType:"json",success:function(t){if(!t.success)return void $.unLogin(t);for(var e=t.data,n="",i=0;i<e.length;i++)n+='<option data-id="'+e[i].id+'" data-color="'+e[i].colour+'">'+e[i].name+"</option>";var a='<option value="">不限</option>';$("#statusList").empty(),$("#statusList").append(a),$("#statusList").append(n)}})}function v(){$.ajax({url:Base.sitUrl+"/api/org/v1/org/staff/customer/source/list",type:"POST",dataType:"json",success:function(t){if(!t.success)return void $.unLogin(t);for(var e=t.data,n="",i=0;i<e.length;i++)n+='<option value="'+e[i].id+'">'+e[i].name+"</option>";var a='<option value="">不限</option>';$("#sourceList").empty(),$("#sourceList").append(a),$("#sourceList").append(n)}})}function m(){$.ajax({url:Base.sitUrl+"/api/sys/v1/sys/countries/get",type:"POST",dataType:"json",success:function(t){if(!t.success)return void $.unLogin(t);for(var e=t.data,n="",i=0;i<e.length;i++)n+='<option value="'+e[i].id+'">'+e[i].cn+" - "+e[i].en+"</option>";var a='<option value="">不限</option>';$("#countryList").empty(),$("#countryList").append(a),$("#countryList").append(n)}})}function g(){$.ajax({url:Base.sitUrl+"/api/org/v1/org/staff/list",type:"POST",dataType:"json",success:function(t){if(!t.success)return void $.unLogin(t);for(var e=t.data,n="",i="",a=0;a<e.length;a++)n+='<option value="'+e[a].id+'">'+e[a].name+"</option>",i+='<li data-value="'+e[a].id+'">'+e[a].name+"</li>";var s='<option value="">不限</option>';$("#followerList").empty(),$("#followerList").append(s),$("#followerList").append(n)}})}function y(){$.ajax({url:Base.sitUrl+"/api/sys/v1/sys/dictionary/get",type:"POST",dataType:"json",data:{group:"customer.type"},success:function(t){if(!t.success)return void $.unLogin(t);for(var e=t.data,n="",i=0;i<e.length;i++)n+='<option value="'+e[i].name+'">'+e[i].value+"</option>";var a='<option value="">不限</option>';$("#f-kinds").empty(),$("#f-kinds").append(a),$("#f-kinds").append(n)}})}function k(){$.ajax({url:Base.sitUrl+"/api/customer/v1/customer/group/list",type:"POST",dataType:"json",success:function(t){if(!t.success)return void $.unLogin(t);for(var e=t.data,n="",i=0;i<e.length;i++)n+='<option value="'+e[i].id+'">'+e[i].name+"</option>";var a='<option value="">不限</option>';$("#f-group").empty(),$("#f-group").append(a),$("#f-group").append(n)}})}function x(){$.ajax({url:Base.sitUrl+"/api/product/v1/product/type/sublist?pid=0",type:"POST",dataType:"json",success:function(t){if(!t.success)return void $.unLogin(t);for(var e=t.data,n="",i=0;i<e.length;i++)n+='<option value="'+e[i].id+'">'+e[i].name+"</option>";$("#pdt1").empty(),$("#pdt1").append('<option value="">请选择产品类型</option>'),$("#pdt1").append(n)}})}function S(t){return null==t||void 0==t?"":t}function w(t){return null==t||void 0==t||""==t?0:t}function j(){var t=n();t=t.replace(/"/g,"&#39;");var e,i=b(),a=$(".bkColor").attr("data-addressMode"),s='{"url":"'+$("#addFiles").children("li").attr("data-url")+'"}',l=o(),d=u(),r=c(),p=h();1==a?e=s:2==a?e=l:3==a?e=d:4==a&&(e=r);var f="{"+i+',"content":"'+t+'","addressMode":'+a+',"address":'+e+',"attachments":'+p+"}";return""==t?$.Alert("邮件内容不能为空"):f}function C(){$.ajax({url:Base.sitUrl+"/api/edm/v1/over/count",type:"GET",dataType:"json",success:function(t){return t.success?(null==t.data&&(t.data=0),void $("#surplusNum").text(t.data)):void $.unLogin(t)}})}function T(t){var e,n={value:t};return $.ajax({url:Base.sitUrl+"/api/email/v1/visitingcard",type:"POST",dataType:"json",async:!1,data:{data:JSON.stringify(n)},success:function(t){if(!t.success)return void $.unLogin(t);var n=t.data,i=n.status,a=n.isHighSeas,s=n.customerName,o="";switch(1==a&&(o="<span>公海</span>"),i){case 1:html2='<ul><li><div class="sender-condition"><div class="sender-condition-img"><span class="ellipsis sender-condition-name">'+n.title+'</span></div><button type="button" class="btn btn-primary btn-lg btn-block btn-blockAdd">添加为联系人</button><div class="btn-group condition-cz-btn" role="group" style="margin-left:-118px;"><button type="button" class="btn btn-default newtongxunlu">添加通讯录</button><button type="button" class="btn btn-default fayoujian">发邮件</button><button type="button" class="btn btn-default come-go">往来邮件</button></div></div></li></ul>';break;case 2:html2='<ul><li><div class="sender-condition"><div class="sender-condition-img"><span class="ellipsis sender-condition-name">'+n.title+'</span></div><button type="button" class="btn btn-primary btn-lg btn-block btn-blockAdd">添加为联系人</button><div class="btn-group condition-cz-btn" role="group" style="margin-left:-118px;"><button type="button" class="btn btn-default tongxunlu">通讯录好友</button><button type="button" class="btn btn-default fayoujian">发邮件</button><button type="button" class="btn btn-default come-go">往来邮件</button></div></div></li></ul>';break;case 3:html2='<ul><li data-customer="'+n.customerId+'" data-cont="'+n.customerContactsId+'"><div class="sender-condition"><div class="sender-condition-img"><span class="ellipsis sender-condition-name">'+n.title+'</span></div><div class="company-info"><i class="pub-icon ding-icon"></i><span class="ellipsis company-name name-blue">'+s+'</span></div><div class="belong-yewuy"><label>所属业务员：</label><span>'+n.salesmanName+'</span></div><button type="button" class="btn btn-primary btn-lg btn-block btn-blockDetail">查看联系人</button><div class="btn-group condition-cz-btn" role="group"><button type="button" class="btn btn-default xiegenjin">写跟进</button><button type="button" class="btn btn-default fayoujian">发邮件</button><button type="button" class="btn btn-default come-go">往来邮件</button></div></div></li></ul>';break;case 4:html2='<ul><li data-customer="'+n.customerId+'"><div class="sender-condition"><div class="sender-condition-img"><span class="ellipsis sender-condition-name">'+n.title+'</span></div><div class="company-info"><i class="pub-icon ding-icon"></i><span class="ellipsis company-name name-blue">'+s+'</span></div><div class="belong-yewuy"><label>所属业务员：</label><span>'+n.salesmanName+'</span></div><button type="button" class="btn btn-primary btn-lg btn-block btn-blockAdd">添加为联系人</button><div class="btn-group condition-cz-btn" role="group"><button type="button" class="btn btn-default xiegenjin" disabled>写跟进</button><button type="button" class="btn btn-default fayoujian">发邮件</button><button type="button" class="btn btn-default come-go">往来邮件</button></div></div></li></ul>';break;case 5:html2='<ul><li data-id="'+n.id+'" data-customer="'+n.customerId+'"><div class="sender-condition"><div class="sender-condition-img"><i class="pub-icon sender3-icon" style="top:0;"></i><span class="ellipsis sender-condition-name">'+n.title+'</span></div><div class="company-info"><i class="pub-icon ding-icon"></i><span class="ellipsis company-name name-blue">'+s+'</span></div><div class="belong-yewuy"><label>所属业务员：</label>'+o+'</div><button type="button" class="btn btn-primary btn-lg btn-block btn-privateCont">添加到私海</button><div class="btn-group condition-cz-btn" role="group"><button type="button" class="btn btn-default xiegenjin" disabled>写跟进</button><button type="button" class="btn btn-default fayoujian">发邮件</button><button type="button" class="btn btn-default come-go">往来邮件</button></div></div></li></ul>';break;case 6:html2='<ul><li data-id="'+n.id+'" data-customer="'+n.customerId+'"><div class="sender-condition"><div class="sender-condition-img"><i class="pub-icon sender3-icon" style="top:0;"></i><span class="ellipsis sender-condition-name">'+n.title+'</span></div><div class="company-info"><i class="pub-icon ding-icon"></i><span class="ellipsis company-name name-blue">'+s+'</span></div><div class="belong-yewuy"><label>所属业务员：</label>'+o+'</div><button type="button" class="btn btn-primary btn-lg btn-block btn-privateCust">添加到私海</button><div class="btn-group condition-cz-btn" role="group"><button type="button" class="btn btn-default xiegenjin" disabled>写跟进</button><button type="button" class="btn btn-default fayoujian">发邮件</button><button type="button" class="btn btn-default come-go">往来邮件</button></div></div></li></ul>';break;case 7:html2='<ul><li data-id="'+n.id+'" data-customer="'+n.customerId+'"><div class="sender-condition"><div class="sender-condition-img"><i class="pub-icon sender2-icon" style="top:0;"></i><span class="ellipsis sender-condition-name">'+n.title+'</span></div><div class="company-info"><i class="pub-icon ding-icon"></i><span class="ellipsis company-name name-blue">'+s+'</span></div><div class="belong-yewuy"><label>所属业务员：</label><span>'+n.salesmanName+'</span></div><button type="button" class="btn btn-default btn-lg btn-block btn-blockDetail btn-gray" disabled>查看联系人</button><div class="btn-group condition-cz-btn" role="group"><button type="button" class="btn btn-default xiegenjin" disabled>写跟进</button><button type="button" class="btn btn-default fayoujian">发邮件</button><button type="button" class="btn btn-default come-go" disabled>往来邮件</button></div></div></li></ul>';break;case 8:html2='<ul><li data-id="'+n.id+'" data-customer="'+n.customerId+'"><div class="sender-condition"><div class="sender-condition-img"><i class="pub-icon sender2-icon" style="top:0;"></i><span class="ellipsis sender-condition-name">'+n.title+'</span></div><div class="company-info"><i class="pub-icon ding-icon"></i><span class="ellipsis company-name name-blue">'+s+'</span></div><div class="belong-yewuy"><label>所属业务员：</label><span>'+n.salesmanName+'</span></div><button type="button" class="btn btn-default btn-lg btn-block btn-gray btn-blockAdd" disabled>添加联系人</button><div class="btn-group condition-cz-btn" role="group"><button type="button" class="btn btn-default xiegenjin" disabled>写跟进</button><button type="button" class="btn btn-default fayoujian">发邮件</button><button type="button" class="btn btn-default come-go" disabled>往来邮件</button></div></div></li></ul>'}e=html2}}),e}window.ZeroClipboard=e,t.init(),$("#setLetterNav>li").bind("click",function(t){if($.EventFn(t),!$(this).hasClass("current")){$(this).addClass("current").siblings().removeClass("current");var e=$(this).index();$(".rightShowList").eq(e).addClass("activities").siblings().removeClass("activities")}}),$(".showMore").on("click",function(t){$.EventFn(t),$(".upLoad-list").css("height","auto")});var U={letter:null,type:null,toolbars:[["fontfamily","fontsize","forecolor","backcolor","|","bold","italic","|","underline","formatmatch","insertorderedlist","insertunorderedlist","justifyleft","justifyright","justifycenter","justifyjustify","|","link","unlink","inserttable","fullscreen","cleardoc","emotion","source"]],createEditor:function(){U.letter=UE.getEditor("letterEditor",{toolbars:U.toolbars,initialFrameWidth:"100%",initialFrameHeight:360})}};U.createEditor(),$("#btnOne .btn").on("click",function(){if(parseInt($("#surplusNum").text())<0)return void $.Alert("您的营销信不足");var t=$("#surplusNum").text();t=parseInt(t),$(document).find(".bkColor").length<1?$.Alert("请选择要发送的客户"):$("#addFiles").find("li").length<1&&"0"==$("#groupEmail").text()&&"0"==$("#copyEmail").text()&&"0"==$("#FilterEmail").text()?$.Alert("请选择要发送的客户"):($("#stepTwo").show(),$("#stepTwo").siblings(".stepBlock").hide(),$("#stepShow").empty(),$("#stepShow").append('<img src="../images/step2.png">'))}),$("#backStepTwo").on("click",function(){$("#stepOne").show(),$("#stepOne").siblings(".stepBlock").hide(),$("#stepShow").empty(),$("#stepShow").append('<img src="../images/step1.png">')}),$("#btnTwo .btn").on("click",function(){""==$("#subject").val()?$.Alert("请填写营销主题"):""==$("#subject1").val()&&""==$("#subject2").val()&&""==$("#subject3").val()?$.Alert("至少填写一个邮件主题"):($("#stepThree").show(),$("#stepThree").siblings(".stepBlock").hide(),$("#stepShow").empty(),$("#stepShow").append('<img src="../images/step3.png">'))}),$("#backStepThree").on("click",function(){$("#stepTwo").show(),$("#stepTwo").siblings(".stepBlock").hide(),$("#stepShow").empty(),$("#stepShow").append('<img src="../images/step2.png">')});var L=/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;$(".stepCont2 input").on("keydown",function(t){var e=$(this).val();if(13==t.keyCode&&""!==e){if(L.test(e)){var n='<span class="emailAccount left successSpan"><i class="s-customer left"></i><label class="emailLabel">'+e+'</label><i class="i-emailClose"></i><div class="sender-condition-style"></div></span>';$(".stepCont2 input").before(n),$(".stepCont2 input").val("")}else{var n='<span class="emailAccount left errorSpan" title="邮箱格式错误"><label style="float:left;width:16px;height:16px;display:inline-block;color:#fff;border-radius:50%;background:red;padding-top:2px;padding-left:6px;margin-right:3px;font-size:12px;">!</label><label class="emailLabel" style="color:red">'+e+'</label><i class="i-emailClose"></i><div class="sender-condition-style"></div></span>';$(".stepCont2 input").before(n),$(".stepCont2 input").val("")}$("#copyEmail").parent().show(),$("#copyEmail").text($(".stepCont2").find(".successSpan ").length);var i=$("#surplusNum").text();$(".stepCont2").find(".successSpan ").length>i?$("#prompt").show():$("#prompt").hide()}8==t.keyCode&&""==e&&($(this).prev("span").remove(),$("#copyEmail").text($(".stepCont2").find(".successSpan ").length))}),$(".stepCont2").unbind("click").on("click",function(){$(this).find(".inputEmail").focus()}),$("#stepOne .step").unbind("click").on("click",function(){$(this).find(".stepCont").show(),$(this).addClass("bkColor"),$(this).find(".stepTitle").hide(),$(this).siblings(".step").find(".stepCont").hide(),$(this).siblings(".step").find(".stepTitle").show(),$(this).siblings(".step").removeClass("bkColor")}),$("#accountEmail2").on("click",".i-emailClose",function(){$(this).parents(".emailAccount").remove(),$("#copyEmail").text($(".stepCont2").find(".successSpan").length)}),$("#custModels>p>a").on("click",function(){$(this).addClass("active"),$(this).siblings().removeClass("active")}),$("body").click(function(){$("#tagsUl").hide()}),$(document).unbind("click").on("click","#tagsUl>li",function(){$("#tagsUl").show();var t=$(this).text(),e=$(this).attr("data-value"),n='<span data-id="'+e+'" style="display:inline-block;margin:3px 0">'+t+"</span>";if(1==$(this).find("input[type=checkbox]").prop("checked"))if(""==$("#tags").text()){var n='<span data-id="'+e+'" style="display:inline-block;margin:3px 0">'+t+"</span>";$("#tags").append(n)}else{var n='<span data-id="'+e+'" style="display:inline-block;margin:3px 0">,'+t+"</span>";$("#tags").append(n)}else{for(var i=$("#tags").find("span"),a=0;a<i.length;a++){var s=i.eq(a).text();if(","==s.substring(0,1))var s=s.substring(1,s.length);t==s&&i.eq(a).remove()}var o=$("#tags").find("span").eq(0).text(),l=o.substring(0,1);if(","==l){var e=$("#tags").find("span").eq(0).attr("data-id"),c=o.substring(1,o.length);$("#tags").find("span").eq(0).text(c)}}}),$(".add-attachment").unbind("click").on("click",function(){return $("#up-files").click()}),$("#up-files").on("change",function(t){$.EventFn(t);var e=s($(this)),n=$("#up-files").val(),a=n.lastIndexOf("."),o=n.substring(a,n.length).toUpperCase();return".XLSX"!=o&&".XLS"!=o&&".TXT"!=o?($.Alert("请上传txt或excle文件"),!1):void(e.flag&&i(e.name))}),$(".add-attachment1").unbind("click").on("click",function(){return $("#up-files1").click()}),$("#up-files1").on("change",function(t){$.EventFn(t);var e=s($(this));e.flag&&a(e.name,e.size)}),$(document).on("click",".file-del",function(){$(this).parents("li").remove()}),$("#starLevel0").on("click",function(){"checked"==$(this).parent().attr("class")?($("#starLevel").find("input[type=checkbox]").prop("checked",!0),$("#starLevel").find("input[type=checkbox]").parent().addClass("checked")):($("#starLevel").find("input[type=checkbox]").prop("checked",!1),$("#starLevel").find("input[type=checkbox]").parent().removeClass("checked"))}),$(".add-images").unbind("click").on("click",function(){$("input[name=upImgs]").click(),$("input[name=upImgs]").unbind("change").on("change",function(t){$.EventFn(t);var e=s($(this));e.flag&&d(e.name)})}),$(".add-tem").unbind("click").on("click",function(t){$.EventFn(t),"block"==$("#myModal").css("display")?($("#myModal").hide(),$("#myModal").css("opacity","0")):($("#myModal").show(),$("#myModal").css("opacity","1"),$("#myModal").css("background","rgba(0,0,0,.3)"))}),$("#myModal .close,#closeModal").bind("click",function(){$("#myModal").hide(),$("#myModal").css("opacity","0")}),$("#saveModal").bind("click",function(t){$.EventFn(t);var e=$(".add-model").find("input[type=radio]:checked").parents("li").attr("data-value");UE.getEditor("letterEditor").execCommand("inserthtml",e),$("#myModal").hide(),$("#myModal").css("opacity","0")}),$(".add-cont").unbind("click").on("click",function(t){$.EventFn(t);var e="#contactname#";UE.getEditor("letterEditor").execCommand("inserthtml",e)}),$(document).on("click","#noHighSeasCheckbox",function(){1==$(this).prop("checked")?$("#noHighSeasUl").find("input[type=checkbox]").prop("checked",!0):$("#noHighSeasUl").find("input[type=checkbox]").prop("checked",!1)}),$(document).on("click","#highSeasCheckbox",function(){1==$(this).prop("checked")?$("#highSeasUl").find("input[type=checkbox]").prop("checked",!0):$("#highSeasUl").find("input[type=checkbox]").prop("checked",!1)}),$(document).on("click","#noHighSeasUl input,#highSeasUl input",function(){for(var t=0,e=0,n=0;n<$("#noHighSeasUl").find("input[type=checkbox]:checked").length;n++)t+=parseInt($("#noHighSeasUl").find("input[type=checkbox]:checked").eq(n).val());for(var n=0;n<$("#highSeasUl").find("input[type=checkbox]:checked").length;n++)e+=parseInt($("#highSeasUl").find("input[type=checkbox]:checked").eq(n).val());var i=t+e;$("#groupEmail").parent().show(),$("#groupEmail").text(i);var a=$("#surplusNum").text();i>a?$("#prompt").show():$("#prompt").hide()}),$(".blueClose").on("click",function(){$(this).prev().text("0");var t=$(".bkColor").attr("data-addressmode");2==t?$(".stepCont2").find(".emailAccount").remove():3==t&&($("#noHighSeasUl").find("input[type=checkbox]").prop("checked",!1),$("#highSeasUl").find("input[type=checkbox]").prop("checked",!1))}),$("#tags").on("click",function(t){$.EventFn(t),($("#tagsRadios1").prop("checked")||$("#tagsRadios2").prop("checked"))&&(1==$(this).attr("data-on")&&($(this).find("span").remove(),$(this).attr("data-on",0)),"block"==$("#tagsUl").css("display")?$("#tagsUl").hide():$("#tagsUl").show())}),$("#pdt1").on("change",function(){var t=$("#pdt1 option:selected").val();$.ajax({url:Base.sitUrl+"/api/product/v1/product/type/sublist?pid="+t,type:"POST",dataType:"json",success:function(t){if(!t.success)return void $.unLogin(t);for(var e=t.data,n="",i=0;i<e.length;i++)n+='<option value="'+e[i].id+'">'+e[i].name+"</option>";$("#pdt2").empty(),$("#pdt2").append('<option value="">请选择产品类型</option>'),$("#pdt2").append(n)}})}),$("#pdt2").on("change",function(){var t=$("#pdt2 option:selected").val();$.ajax({url:Base.sitUrl+"/api/product/v1/product/type/sublist?pid="+t,type:"POST",dataType:"json",success:function(t){if(!t.success)return void $.unLogin(t);for(var e=t.data,n="",i=0;i<e.length;i++)n+='<option value="'+e[i].id+'">'+e[i].name+"</option>";$("#pdt3").empty(),$("#pdt3").append('<option value="">请选择产品类型</option>'),$("#pdt3").append(n)}})}),$("#pdt3").on("change",function(){var t=$("#pdt3 option:selected").val();$.ajax({url:Base.sitUrl+"/api/product/v1/product/type/sublist?pid="+t,type:"POST",dataType:"json",success:function(t){if(!t.success)return void $.unLogin(t);for(var e=t.data,n="",i=0;i<e.length;i++)n+='<option value="'+e[i].id+'">'+e[i].name+"</option>";$("#pdt4").empty(),$("#pdt4").append('<option value="">请选择产品类型</option>'),$("#pdt4").append(n)}})}),l(),f(),v(),k(),y(),g(),m(),v(),p(),r(),x(),C(),$("#Filter").on("click",function(){var t=c();$.ajax({url:Base.sitUrl+"/api/customer/v1/customer/email/keyword/count",type:"POST",dataType:"json",data:{data:t},success:function(t){if(!t.success)return void $.unLogin(t);$("#FilterEmail").parent().show(),$("#FilterEmail").text(t.data);var e=$("#surplusNum").text();t.data>e?$("#prompt").show():$("#prompt").hide()}})}),$(".stepCont").on("change",function(){$("#Filter").click()}),$("#reset,#resetClose").on("click",function(){$(".step-ul").find("input[type=checkbox]").prop("checked",!1),$(".step-ul").find("input[type=checkbox]").parent().removeClass("checked"),$("#noHighSeasName").val(),$("#tagsRadios1").attr("checked",!1),$("#tagsRadios1").parent().removeClass("checked"),$("#tagsRadios2").attr("checked",!1),$("#tagsRadios2").parent().removeClass("checked"),$("#statusList").find("option").eq(0).attr("selected","selected"),$("#latestContactDays").find("option").eq(0).attr("selected","selected"),$("#followerList").find("option").eq(0).attr("selected","selected"),$("#countryList").find("option").eq(0).attr("selected","selected"),$("#sourceList").find("option").eq(0).attr("selected","selected"),$("#f-kinds").find("option").eq(0).attr("selected","selected"),$("#f-group").find("option").eq(0).attr("selected","selected"),$("#pdt1").find("option").eq(0).attr("selected","selected"),$("#optionsRadios1").attr("checked",!1),$("#optionsRadios1").parent().removeClass("checked"),$("#optionsRadios2").attr("checked",!1),$("#optionsRadios2").parent().removeClass("checked"),$("#FilterEmail").text("0")}),$("#submit").on("click",function(){$("#stepFour").show().siblings(".stepBlock").hide(),$("#stepShow").empty().append('<img src="../images/step4.png">');var t=4;$.CountDown=function(){t>0?($("#setTimeout").text(t),--t):(clearInterval(e),parent.location.reload())};var e=setInterval("$.CountDown()",1e3),n=j();$.ajax({url:Base.sitUrl+"/api/edm/v1/send",type:"POST",dataType:"json",data:{data:n},success:function(t){t.success||(clearInterval(e),$.Alert("发送失败，请重新发送！","",function(){$("#stepThree").show().next().hide(),$("#stepThree").siblings(".stepBlock").hide()}))}})}),$(document).on("mouseenter",".successSpan",function(){var t=$(this).find(".emailLabel").text();if($(this).find(".s-customer").css("background-position","-45px -52px"),$(this).css("border","1px solid #4b73ec"),$(this).css("color","#4b73ec"),$(this).find(".i-emailClose").css("background","url(../images/blueClose.png) no-repeat 2px 2px"),$(this).find("ul").length>0)$(this).find(".sender-condition-style").show();else{var e=T(t);$(this).find(".sender-condition-style").empty(),$(this).find(".sender-condition-style").append(e),$(this).find(".sender-condition-style").show()}}),$(document).on("mouseleave",".successSpan",function(){$(this).find(".s-customer").css("background-position","-27px -110px"),$(this).css("border","1px solid #ccc"),$(this).css("color",""),$(this).find(".i-emailClose").css("background","url(../images/new-icon.png) -317px 2px no-repeat"),$(this).find(".sender-condition-style").hide()}),$("#accountEmail2").on("click",".xiegenjin",function(e){$.EventFn(e);var n=$(this).closest("tr").find("input[name=batch]").attr("data-id");t.showTab(Base.url+"/html/pop-upload.html?id="+n+"&v="+window.ver,"写跟进")}),$("#accountEmail2").on("click",".newtongxunlu",function(e){$.EventFn(e);var n=$(this).parents(".successSpan").find(".emailLabel").text();t.showTab(Base.url+"/html/pop-statistics-new.html?name="+n+"&v="+window.ver,"新建通讯录")}),$("#accountEmail2").on("click",".tongxunlu",function(e){$.EventFn(e);$(this).closest("tr").find("input[name=batch]").attr("data-id");t.showTab(Base.url+"/html/email-statistics.html?&v="+window.ver,"通讯录")}),$("#accountEmail2").on("click",".fayoujian",function(e){$.EventFn(e);var n=$(this).closest("tr").find("input[name=batch]").attr("data-id");t.showTab(Base.url+"/html/pop-email-new.html?type=0&id="+n+"&v="+window.ver,"发邮件")}),$("#accountEmail2").on("click",".come-go",function(e){$.EventFn(e);var n=$(this).parent().prevAll(".sender-condition-img").find(".sender-condition-name").text();t.showTab(Base.url+"/html/pop-come-go-email.html?email="+n+"&v="+window.ver,"往来邮件")}),$("#accountEmail2").on("click",".btn-blockAdd",function(e){$.EventFn(e);var n=$(this).parents(".successSpan").find(".emailLabel").text();t.showTab(Base.url+"/html/pop-contacts-add.html?name="+n+"&v="+window.ver,"添加联系人")}),$("#accountEmail2").on("click",".btn-blockDetail",function(e){$.EventFn(e);var n=$(this).parents("li").attr("data-cont");t.showTab(Base.url+"/html/pop-relation-detail.html?id="+n+"&v="+window.ver,"联系人详情")}),$("#accountEmail2").on("click",".company-name",function(e){$.EventFn(e);var n=$(this).parents("li").attr("data-customer");t.showTab(Base.url+"/html/pop-customer-detail.html?id="+n+"&v="+window.ver,"客户详情")}),$(".accountEmail2").on("click",".btn-privateCust",function(t){$.EventFn(t);var e=$(this).closest("tr").find("input[name=batch]").attr("data-id"),n={id:e},i=$(this);$.ajax({url:Base.sitUrl+"/api/customer/v1/into/private/seas",type:"POST",dataType:"json",data:{data:JSON.stringify(n)},success:function(t){i.text("已添加到私海")}})}),$(".accountEmail2").on("click",".btn-privateCont",function(t){$.EventFn(t);var e=$(this).closest("tr").find("input[name=batch]").attr("data-id"),n={id:e},i=$(this);$.ajax({url:Base.sitUrl+"/api/customer/contacts/v1/into/private/seas",type:"POST",dataType:"json",data:{data:JSON.stringify(n)},success:function(t){i.text("已添加到私海")}})}),$("#addContTheme").bind("click",function(){"block"==$(".contTheme").css("display")?$(".contTheme").hide():$(".contTheme").show()}),$("#themecheckbox1").bind("click",function(){
if(1==$(this).prop("checked"))$("#subject1").insertContent("#contactname#");else{var t=$("#subject1").val(),e=t.replace(/#contactname#/g,"");$("#subject1").val(e)}}),$("#themecheckbox2").bind("click",function(){if(1==$(this).prop("checked"))$("#subject2").insertContent("#contactname#");else{var t=$("#subject2").val(),e=t.replace(/#contactname#/g,"");$("#subject2").val(e)}}),$("#themecheckbox3").bind("click",function(){if(1==$(this).prop("checked"))$("#subject3").insertContent("#contactname#");else{var t=$("#subject3").val(),e=t.replace(/#contactname#/g,"");$("#subject3").val(e)}}),function(t){t.fn.extend({insertContent:function(e,n){var i=t(this)[0];if(document.selection){this.focus();var a=document.selection.createRange();a.text=e,this.focus(),a.moveStart("character",-o);var s=a.text.length;if(2==arguments.length){var o=i.value.length;a.moveEnd("character",s+n),n<=0?a.moveStart("character",s-2*n-e.length):a.moveStart("character",s-n-e.length),a.select()}}else if(i.selectionStart||"0"==i.selectionStart){var l=i.selectionStart,c=i.selectionEnd,d=i.scrollTop;i.value=i.value.substring(0,l)+e+i.value.substring(c,i.value.length),this.focus(),i.selectionStart=l+e.length,i.selectionEnd=l+e.length,i.scrollTop=d,2==arguments.length&&(i.setSelectionRange(l-n,i.selectionEnd+n),this.focus())}else this.value+=e,this.focus()}})}(jQuery)})});