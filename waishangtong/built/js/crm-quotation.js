require(["common"],function(){require(["maintab","blockUI","datetimepickerCN"],function(t){function n(t){var n,a={id:t};return $.ajax({url:Base.sitUrl+"/api/customer/v1/visitingcard",type:"POST",dataType:"json",async:!1,data:{data:JSON.stringify(a)},success:function(t){if(!t.success)return void $.unLogin(t);var a=t.data,e=a.status,i=a.isHighSeas,o=a.customerName,s="";1==i&&(s="<span>公海</span>");var l;switch(e){case 1:l='<ul><li><div class="sender-condition"><button type="button" class="btn btn-primary btn-lg btn-block btn-blockAdd">添加为联系人</button><div class="btn-group condition-cz-btn" role="group" style="margin-left:-118px;"><button type="button" class="btn btn-default newtongxunlu">添加通讯录</button><button type="button" class="btn btn-default fayoujian" data-emlAddr="'+a.email+'">发邮件</button><button type="button" class="btn btn-default come-go">往来邮件</button></div></div></li></ul>';break;case 2:l='<ul><li><div class="sender-condition"><button type="button" class="btn btn-primary btn-lg btn-block btn-blockAdd">添加为联系人</button><div class="btn-group condition-cz-btn" role="group" style="margin-left:-118px;"><button type="button" class="btn btn-default tongxunlu">通讯录好友</button><button type="button" class="btn btn-default fayoujian" data-emlAddr="'+a.email+'">发邮件</button><button type="button" class="btn btn-default come-go">往来邮件</button></div></div></li></ul>';break;case 3:l='<ul><li data-customer="'+a.customerId+'" data-cont="'+a.customerContactsId+'"><div class="sender-condition"><div class="company-info"><i class="pub-icon ding-icon"></i><span class="ellipsis company-name name-blue">'+o+'</span></div><div class="belong-yewuy"><label>所属业务员：</label><span>'+a.salesmanName+'</span></div><button type="button" class="btn btn-primary btn-lg btn-block btn-blockDetail">查看联系人</button><div class="btn-group condition-cz-btn" role="group"><button type="button" class="btn btn-default xiegenjin">写跟进</button><button type="button" class="btn btn-default fayoujian" data-emlAddr="'+a.email+'">发邮件</button><button type="button" class="btn btn-default come-go">往来邮件</button></div></div></li></ul>';break;case 4:l='<ul><li data-customer="'+a.customerId+'"><div class="sender-condition"><div class="company-info"><i class="pub-icon ding-icon"></i><span class="ellipsis company-name name-blue">'+o+'</span></div><div class="belong-yewuy"><label>所属业务员：</label><span>'+a.salesmanName+'</span></div><button type="button" class="btn btn-primary btn-lg btn-block btn-blockAdd">添加为联系人</button><div class="btn-group condition-cz-btn" role="group"><button type="button" class="btn btn-default xiegenjin" disabled>写跟进</button><button type="button" class="btn btn-default fayoujian" data-emlAddr="'+a.email+'">发邮件</button><button type="button" class="btn btn-default come-go">往来邮件</button></div></div></li></ul>';break;case 5:l='<ul><li data-id="'+a.id+'" data-customer="'+a.customerId+'"><div class="sender-condition"><div class="company-info"><i class="pub-icon ding-icon"></i><span class="ellipsis company-name name-blue">'+o+'</span></div><div class="belong-yewuy"><label>所属业务员：</label>'+s+'</div><button type="button" class="btn btn-primary btn-lg btn-block btn-privateCont">添加到私海</button><div class="btn-group condition-cz-btn" role="group"><button type="button" class="btn btn-default xiegenjin" disabled>写跟进</button><button type="button" class="btn btn-default fayoujian" data-emlAddr="'+a.email+'">发邮件</button><button type="button" class="btn btn-default come-go">往来邮件</button></div></div></li></ul>';break;case 6:l='<ul><li data-id="'+a.id+'" data-customer="'+a.customerId+'"><div class="sender-condition"><div class="company-info"><i class="pub-icon ding-icon"></i><span class="ellipsis company-name name-blue">'+o+'</span></div><div class="belong-yewuy"><label>所属业务员：</label>'+s+'</div><button type="button" class="btn btn-primary btn-lg btn-block btn-privateCust">添加到私海</button><div class="btn-group condition-cz-btn" role="group"><button type="button" class="btn btn-default xiegenjin" disabled>写跟进</button><button type="button" class="btn btn-default fayoujian" data-emlAddr="'+a.email+'">发邮件</button><button type="button" class="btn btn-default come-go">往来邮件</button></div></div></li></ul>';break;case 7:l='<ul><li data-id="'+a.id+'" data-customer="'+a.customerId+'"><div class="sender-condition"><div class="company-info"><i class="pub-icon ding-icon"></i><span class="ellipsis company-name name-blue">'+o+'</span></div><div class="belong-yewuy"><label>所属业务员：</label><span>'+a.salesmanName+'</span></div><button type="button" class="btn btn-default btn-lg btn-block btn-blockDetail btn-gray" disabled>查看联系人</button><div class="btn-group condition-cz-btn" role="group"><button type="button" class="btn btn-default xiegenjin" disabled>写跟进</button><button type="button" class="btn btn-default fayoujian" data-emlAddr="'+a.email+'">发邮件</button><button type="button" class="btn btn-default come-go" disabled>往来邮件</button></div></div></li></ul>';break;case 8:l='<ul><li data-id="'+a.id+'" data-customer="'+a.customerId+'"><div class="sender-condition"><div class="company-info"><i class="pub-icon ding-icon"></i><span class="ellipsis company-name name-blue">'+o+'</span></div><div class="belong-yewuy"><label>所属业务员：</label><span>'+a.salesmanName+'</span></div><button type="button" class="btn btn-default btn-lg btn-block btn-gray btn-blockAdd" disabled>添加联系人</button><div class="btn-group condition-cz-btn" role="group"><button type="button" class="btn btn-default xiegenjin" disabled>写跟进</button><button type="button" class="btn btn-default fayoujian" data-emlAddr="'+a.email+'">发邮件</button><button type="button" class="btn btn-default come-go" disabled>往来邮件</button></div></div></li></ul>'}n=l}}),n}var a=top.funcList;$("[data-code]").each(function(){for(var t=0;t<a.length;t++)a[t].code==$(this).attr("data-code")&&$(this).removeClass("none")}),jQuery().datetimepicker&&$(".datetime-picker").datetimepicker({language:"zh-CN",todayBtn:1,autoclose:1,todayHighlight:1,startView:2,minView:2,format:"yyyy-mm-dd",bootcssVer:3}),t.init();var e=$(".page-content"),i=$("#filterModal"),o={homepage:1,currentPage:1,lastpage:null,pageSize:20};e.on("click",".m_batch>button",function(n){$.EventFn(n);var a=$(this).attr("data-type");if("dels"==a)$.modalsFn($("#delsModal"));else if("email"==a){var e=s.getAllChecked().ids,i="";if(e.length>=2)return void $.Alert("只能单个文件发送");for(var o=0;o<e.length;o++)i+=e[o]+",";i=i.substring(0,i.length-1),t.showTab(Base.url+"/html/pop-email-new.html?showType=right&modelType=100&ids="+i+"&v="+window.ver,"新建邮件")}}),e.on("click",".mclose,#btn-del-no",function(){$(".modals").removeClass("active")}),$("#batchClose").on("mouseenter",function(){$(this).addClass("s-updownBg s-dels4").removeClass("fa fa-times")}),$("#batchClose").on("mouseleave",function(){$(this).addClass("fa fa-times").removeClass("s-updownBg s-dels4")}),e.on("click","#btn-del-ok",function(){var t=s.getAllChecked().ids;s.changeQuoStatus(t,0)}),e.on("click",".page_info tbody>tr",function(n){$.EventFn(n);var a=parseInt($(this).find("input[name=batch]").attr("data-id"));isNaN(a)||t.showTab(Base.url+"/html/pop-quotation-detail.html?id="+a+"&v="+window.ver,"报价详情")}),e.on("input","#inputQuick",function(t){$.EventFn(t);for(var n=$(this).val(),a=$.filterObj.list,e=[],i=$.filterObj.total,o=0;o<a.length;o++)a[o].name.indexOf(n)!=-1&&e.push(a[o]);i=n?0:$.filterObj.total,s.filterShow(e,i)}),e.on("click",".page_info thead>tr>th",function(t){$.EventFn(t);var n=$(this).index(),a=$.filterObj.list;if(6==n){var e=$(this).children("i");e.hasClass("s-orderList")?($.filterObj.type=1,e.removeClass("s-orderList").addClass("s-reorderList"),s.filterShow(a,$.filterObj.total)):($.filterObj.type=0,e.removeClass("s-reorderList").addClass("s-orderList"),s.filterShow(a,$.filterObj.total))}}),$("#btn-underling").click(function(t){$(this).hasClass("on")?(s.filter(),$("#btn-underling-pop").hide(),$(this).removeClass("on").attr({"data-toggle":"modal","data-target":"#myModal"}),$.EventFn(t)):$.ajax({url:Base.sitUrl+"/api/customer/v1/underling/customer",type:"POST",dataType:"json",success:function(t){if(!t.success)return void $.Alert(t.message);for(var n=t.data,a="",e=0;e<n.length;e++)a+='<li data-id="'+n[e].id+'">'+n[e].name+"</li>";$("#myModal .modal-body>ul").empty().append(a)}})}),$("#myModal .modal-body>ul").on("click",">li",function(){var t=$(this).attr("data-id"),n=$(this).text();$("#btn-underling").attr({"data-toggle":"","data-target":""}).addClass("on"),$("#btn-underling-pop").text(n).attr("data-id",t).show(),$("#underling-close").click(),s.filter({id:t})});var s={filter:function(t){var n={currentPage:o.currentPage,pageSize:o.pageSize};t=t||{},Object.keys(t).length>0&&$.extend(n,t),$.ajax({url:Base.sitUrl+"/api/quotation/v1/quotation/list",data:n,type:"POST",dataType:"json",success:function(t){if(!t.success)return void $.unLogin(t);var n=t.data.results;$.filterObj.list=n,$.filterObj.total=t.data.totalItem,s.filterShow(n,$.filterObj.total)}})},changeQuoStatus:function(t,n){$.ajax({url:Base.sitUrl+"/api/quotation/v1/quotation/batch/delete",data:{ids:t.join(";")},type:"POST",dataType:"json",success:function(t){return t.success?($(".modals").removeClass("active"),$(".m_batch").stop().animate({left:"-100%"},function(){$(this).removeClass("active")}),void s.filter()):void $.unLogin(t,"删除失败,")}})},getAllChecked:function(){var t={ids:[]};return $("input[name=batch]:checked").each(function(){var n=$(this).attr("data-id");t.ids.push(parseInt(n))}),t},filterShow:function(t,n){var a="";if(t.length>0){0==$.filterObj.type?t.sort(function(t,n){return new Date(n.createTime).getTime()-new Date(t.createTime).getTime()}):1==$.filterObj.type&&t.sort(function(t,n){return new Date(t.createTime).getTime()-new Date(n.createTime).getTime()});for(var e=0;e<t.length;e++){var i=t[e].name;i.length>=36&&(i=i.substr(0,36)+"..."),a+='<tr>                                    <td><div class="checker"><span><input type="checkbox" name="batch" data-id="'+t[e].id+'"></span></div></td>                                    <td><span>'+t[e].quotationNo+"</span></td>                                    <td><span>"+i+'</span></td>                                    <td class="customer-card" style="position:relative"><span class="s-special user-name customer-card-name" data-id="'+t[e].customerId+'">'+(t[e].customerName||"匿名")+'</span><div class="sender-condition-style"></div></td>                                    <td><span>'+t[e].totalPrice+" USD</span></td>                                    <td><span>"+t[e].seller+'</span></td>                                    <td><span class="sp-time">'+t[e].createTime+"</span></td>                                </tr>"}}else{var d='<div class="trNone"><div class="trnone-info"><img src="../images/empty-quo.png" alt="" /><p class="trnone-text">暂无报价单</p></div><a href="pop-quotation-add.html" class="trnone-btn btn btn-primary" data-code="quotation_add" data-maintab></i><span>创建报价单</span></a></div>';$(".trNone").remove(),$(".page_info>table>tbody").empty(),$(".page_info>table").after(d)}""!=a&&($(".trNone").remove(),$(".page_info>table>tbody").empty(),$(".page_info>table>tbody").append(a));var c=o.pageSize,r=Math.ceil(n/c);$.Page({total:n,_class:".page",nowNum:o.currentPage,allNum:r,callback:function(t,n){o.currentPage=parseInt(t),s.filter(l)}})}};$(".table").unbind("mouseenter").on("mouseenter",".customer-card",function(){var t=$(this).find(".customer-card-name").attr("data-id"),a=n(t);if($(this).find(".sender-condition-style").empty().append(a),"1"==$(this).attr("data-num")){var e=$(this).find(".sender-condition-style").height()-10,i="-"+e+"px";$(this).find(".sender-condition-style").css("top",i)}$(this).find(".sender-condition-style").show()}),$(".table").on("mouseleave",".customer-card",function(){$(this).find(".sender-condition-style").hide()}),$(".table").on("click",".xiegenjin",function(n){$.EventFn(n);var a=$(this).closest("tr").find("input[name=batch]").attr("data-id");t.showTab(Base.url+"/html/pop-upload.html?id="+a+"&v="+window.ver,"写跟进")}),$(".table").on("click",".newtongxunlu",function(n){$.EventFn(n);var a=$(this).closest("tr").find("input[name=batch]").attr("data-id");t.showTab(Base.url+"/html/pop-statistics-new.html?id="+a+"&v="+window.ver,"新建通讯录")}),$(".table").on("click",".tongxunlu",function(n){$.EventFn(n);$(this).closest("tr").find("input[name=batch]").attr("data-id");t.showTab(Base.url+"/html/email-statistics.html?&v="+window.ver,"通讯录")}),$(".table").on("click",".fayoujian",function(n){$.EventFn(n);var a=$(this).attr("data-emlAddr");a="null"==a?"":a,t.showTab(Base.url+"/html/pop-email-new.html?showType=right&name="+a+"&v="+window.ver,"发邮件")}),$(".table").on("click",".btn-privateCust",function(t){$.EventFn(t);var n=$(this).closest("tr").find("input[name=batch]").attr("data-id"),a={id:n},e=$(this);$.ajax({url:Base.sitUrl+"/api/customer/v1/into/private/seas",type:"POST",dataType:"json",data:{data:JSON.stringify(a)},success:function(t){e.text("已添加到私海")}})}),$(".table").on("click",".btn-privateCont",function(t){$.EventFn(t);var n=$(this).closest("tr").find("input[name=batch]").attr("data-id"),a={id:n},e=$(this);$.ajax({url:Base.sitUrl+"/api/customer/contacts/v1/into/private/seas",type:"POST",dataType:"json",data:{data:JSON.stringify(a)},success:function(t){e.text("已添加到私海")}})}),$(".table").on("click",".come-go",function(n){$.EventFn(n);var a=$(this).parent().prevAll(".sender-condition-img").find(".sender-condition-name").text();t.showTab(Base.url+"/html/pop-come-go-email.html?email="+a+"&v="+window.ver,"往来邮件")}),$(".table").on("click",".btn-blockAdd",function(n){$.EventFn(n);var a=$(".detailSender").val();t.showTab(Base.url+"/html/pop-contacts-add.html?name="+a+"&v="+window.ver,"添加联系人")}),$(".table").on("click",".btn-blockDetail",function(n){$.EventFn(n);var a=$(this).parents("li").attr("data-cont");t.showTab(Base.url+"/html/pop-relation-detail.html?id="+a+"&v="+window.ver,"联系人详情")}),$(".table").on("click",".company-name",function(n){$.EventFn(n);var a=$(this).parents("li").attr("data-customer");t.showTab(Base.url+"/html/pop-customer-detail.html?id="+a+"&v="+window.ver,"客户详情")});var l={};i.on("click","#reset",function(t){$("#quoName").val(""),$("#custInfo").val(""),$("#proDateBeg").val(""),$("#proDateEnd").val("")}),i.on("click","#screen",function(t){o.currentPage=1;var n=$("#quoName"),a=$("#custInfo"),e=$("#proDateBeg"),i=$("#proDateEnd"),d={};""!=n.val()&&""!=$.trim(n.val())&&(d.keyword=n.val()),""!=a.val()&&""!=$.trim(a.val())&&(d.customerInfo=a.val()),""!=e.val()&&""!=$.trim(e.val())&&(d.startDate=e.val()),""!=i.val()&&""!=$.trim(i.val())&&(d.endDate=i.val()),l=d,s.filter(l),$("#filterModal").modal("hide")}),s.filter()})});