require(["common"],function(){require(["maintab","blockUI","datetimepickerCN","jqprint","ztree"],function(maintab){maintab.init();var emailId=$.GetQueryString("id"),uri=$.GetQueryString("uri");$(".email-detail-main-content").attr("src",Base.sitUrl+"/html/read.html?type=2&id="+emailId+"&v="+window.ver),jQuery().datetimepicker&&$(".dates").datetimepicker({format:"yyyy-mm-dd hh:ii",todayBtn:!1,language:"zh-CN",pickerPosition:"bottom",autoclose:!0}),$(".page_info").on("click",".tongxunlu",function(t){$.EventFn(t);$(this).closest("tr").find("input[name=batch]").attr("data-id");maintab.showTab(Base.url+"/html/email-statistics","通讯录")}),$(".email-detail").on("click",".newtongxunlu",function(t){$.EventFn(t);var a=$(this).closest("tr").find("input[name=batch]").attr("data-id");maintab.showTab(Base.url+"/html/pop-statistics-new.html?id="+a+"&v="+window.ver,"新建通讯录")}),$(".email-detail").on("click",".btn-blockAdd",function(t){$.EventFn(t);var a=$(".detailSender").val();maintab.showTab(Base.url+"/html/pop-contacts-add.html?name="+a+"&v="+window.ver,"添加联系人")}),$(".email-detail").on("click",".btn-blockDetail",function(t){$.EventFn(t);var a=$(this).parents("li").attr("data-cont");maintab.showTab(Base.url+"/html/pop-relation-detail.html?id="+a+"&v="+window.ver,"联系人详情")}),$(".email-detail").on("click",".sender-time-icon",function(t){$.EventFn(t),$(".check-time").css("display","inline-block")}),$(".check-time").change(function(){var t=$(this).val(),a=$(this).prev().prev(),e=Number(a.attr("data-time"));a.text($.calcTime(a.text(),e,t)).attr("data-time",t)}),$(".email-detail").on("click",".company-name",function(t){$.EventFn(t);var a=$(this).parents("li").attr("data-customer");maintab.showTab(Base.url+"/html/pop-customer-detail.html?id="+a+"&v="+window.ver,"客户详情")}),$(".email-detail").on("click",".xiegenjin",function(t){$.EventFn(t);var a=$(this).closest("tr").find("input[name=batch]").attr("data-id");maintab.showTab(Base.url+"/html/pop-upload.html?id="+a+"&v="+window.ver,"写跟进")}),$(".email-detail").on("click",".come-go",function(t){$.EventFn(t);var a=$(".detailSender").val(),e=a.search(/\;/);a=a.substring(0,e),maintab.showTab(Base.url+"/html/pop-come-go-emailOut.html?email="+a+"&v="+window.ver,"往来邮件")}),$(".email-detail").on("click","tbody>tr .btn-privateCust",function(t){$.EventFn(t);var a=$(this).closest("tr").find("input[name=batch]").attr("data-id"),e={id:a},i=$(this);$.ajax({url:Base.sitUrl+"/api/customer/v1/into/private/seas",type:"POST",dataType:"json",data:{data:JSON.stringify(e)},success:function(t){i.text("已添加到私海")}})}),$(".email-detail").on("click","tbody>tr .btn-privateCont",function(t){$.EventFn(t);var a=$(this).closest("tr").find("input[name=batch]").attr("data-id"),e={id:a},i=$(this);$.ajax({url:Base.sitUrl+"/api/customer/contacts/v1/into/private/seas",type:"POST",dataType:"json",data:{data:JSON.stringify(e)},success:function(t){i.text("已添加到私海")}})}),$("#reEmail").on("click",function(t){$.EventFn(t);var a=emailId;maintab.showTab(Base.url+"/html/pop-email-newOut.html?type=1&showType=right&id="+a+"&v="+window.ver,"邮件回复")}),$("#allReEmail").on("click",function(t){$.EventFn(t);var a=emailId;maintab.showTab(Base.url+"/html/pop-email-newOut.html?type=1&showType=right&id="+a+"&v="+window.ver,"全部回复")}),$("#zfEmail").on("click",function(t){$.EventFn(t);var a=emailId;maintab.showTab(Base.url+"/html/pop-email-newOut.html?type=2&showType=right&id="+a+"&v="+window.ver,"邮件转发")}),$(".sender-info").on("click",".sender-condition>.condition-cz-btn>.fayoujian",function(t){$.EventFn(t);var a=emailId;maintab.showTab(Base.url+"/html/pop-email-newOut.html?type=0&showType=right&id="+a+"&v="+window.ver,"发邮件")}),$(".email-detail").on("mouseenter",".mark-p",function(t){$.EventFn(t);var a=$(this).children(".close-icon");"none"==a.css("display")&&a.show()}),$(".email-detail").on("mouseleave",".mark-p",function(t){$.EventFn(t);var a=$(this).children(".close-icon");"block"==a.css("display")&&a.hide()}),$(".email-detail").on("click",".close-icon",function(t){$.EventFn(t);var a=$(this),e=$(this).parent(".mark-p").attr("data-id");"block"==a.css("display")&&(a.hide(),a.parent(".mark-p").remove(),detailObj.deleteTag(e),parent.$.reHtml())}),$(".email-detail").on("click",".add-mark-icon",function(t){$.EventFn(t),$(".caozuo-down-show").css("display","none")?($(".caozuo-down-show").show(),$(".caozuo-down-show>li").eq(5).children(".modals").addClass("active"),detailObj.inboxMenu()):($(".caozuo-down-show").hide(),$(".caozuo-down-show>li").eq(5).children(".modals").removeClass("active"))}),$(".email-detail").on("click","#down",function(t){$.EventFn(t);var a=$(this).attr("data-name"),e=$(this).attr("data-url");detailObj.downloadFujian(a,e)}),$(".attachment-list").on("click",".previewEml",function(){var t="http://"+$(this).parents("li").attr("data-url"),a=$(this).parent().prev().prev().text(),e=t.lastIndexOf("."),i=t.substring(e,t.length).toUpperCase();if(".PNG"==i||".JPG"==i||".JPEG"==i||".SVG"==i||".GIF"==i)var n='<img src="'+t+'" alt="" class="previewImg previewContent">';else if(".TXT"==i||".JS"==i||".CSS"==i)var s=Base.sitUrl+"/api/export/v1/file/preview?data={file: '"+t+"'}",n='<iframe src="'+s+'" frameborder="0" class="previewIframe previewContent"></iframe>';else{if(".DOC"!=i&&".DOCX"!=i&&".XLS"!=i&&".XLSX"!=i&&".ET"!=i&&".PPT"!=i&&".PPTX"!=i&&".WPS"!=i&&".ZIP"!=i&&".RAR"!=i&&".7Z"!=i&&".PDF"!=i)return void $.Alert(i.toLowerCase()+"格式暂不支持预览");var s=Base.sitUrl+"/api/export/v1/file/preview?data={file: '"+t+"'}",n='<iframe src="'+s+'" frameborder="0" class="previewIframe previewContent"></iframe>'}$("#preview").find("h3").text(a),$("#preview").find(".previewContent").remove(),$("#preview").append(n).show()}),$("#previewClose").on("click",function(){$("#preview").hide().find(".previewContent").remove()}),$(function(){function t(){var t=new Array,a={view:"0"};return $.ajax({type:"POST",url:Base.sitUrl+"/api/disk/v1/folder/list/all",dataType:"json",async:!1,data:{data:JSON.stringify(a)},success:function(a){if(!a.success)return void $.Alert(a.message);for(var e=a.data,i=0;i<e.length;i++)0==e[i].type&&t.push(e[i])}}),t}for(var a={view:{selectedMulti:!1},edit:{enable:!0,editNameSelectAll:!0},data:{simpleData:{enable:!0}},callback:{beforeDrag:!1}},e=new Array,i=t(),n=0;n<i.length;n++)e[n]={id:i[n].id,pId:i[n].pid,name:i[n].name,open:!0};$.fn.zTree.init($("#treeDemoAdd"),a,e)}),$(".attachment-list").on("click",".saveCloud",function(){$(".fileTree").toggle(),$(this).closest("li").addClass("active").siblings().removeClass("active")}),$(".btn-saveCloud").click(function(){var t=$.fn.zTree.getZTreeObj("treeDemoAdd").getSelectedNodes();if(""==t)var a="0";else var a=t[0].id;var e=$(".attachment-list li.active"),i=e.find(".attachment-tit").text(),n=e.find(".attachment-size").attr("data-size"),s="http://"+e.attr("data-url"),l={pid:a,name:i,file:s,size:n,type:"1",shareType:"1",operateType:"0",userType:"0"};$.ajax({url:Base.sitUrl+"/api/disk/v1/file/save",type:"POST",dataType:"json",data:{data:JSON.stringify(l)},beforeSend:function(t){$.BlockUI()},complete:function(t,a){$.UnblockUI()},success:function(t){return t.success?void $.Alert("保存成功!","",function(){$(".fileTree").hide()}):void $.unLogin(t)}})}),$(".email-detail").on("click",".caozuo-down-icon",function(t){$.EventFn(t),"none"==$(".caozuo-down-show").css("display")?($(".caozuo-down-show").show(),$(this).css("transform","rotate(180deg)")):($(".caozuo-down-show").hide(),$(this).css("transform","rotate(0deg)"))}),$(".email-detail").on("click",".caozuo-down-show>li",function(t){$.EventFn(t);var a=$(this).index(),e=$(this);if(0==a){var i=emailId;maintab.showTab(Base.url+"/html/pop-email-newOut.html?type=3&showType=right&id="+i+"&v="+window.ver,"编辑邮件")}else if(1==a){var i=emailId,n={id:emailId,folder:$(".subject").attr("data-folder"),content:"1"};n=JSON.stringify(n),maintab.showTab(Base.url+"/html/pop-email-newOut.html?type=10&showType=right&id="+i+"&data="+n+"&v="+window.ver,"作为附件转发")}else if(2==a){var n={id:emailId,folder:$(".subject").attr("data-folder"),content:"1"};$.ajax({url:Base.sitUrl+"/api/email/v1/to/attachment",type:"POST",dataType:"json",data:{data:JSON.stringify(n)},beforeSend:function(t){$.BlockUI()},complete:function(t,a){$.UnblockUI()},success:function(t){if(!t.success)return void $.unLogin(t);var a=t.data,e=a.name,i=a.url,a={name:e,value:"http://"+i},n="data="+JSON.stringify(a);window.location.href=Base.sitUrl+"/api/file/download?"+n}})}else if(3==a){var s=$(".detailSender").val();maintab.showTab(Base.url+"/html/pop-task.html?type=email&emailName="+s+"&v="+window.ver,"新建任务")}else 4==a?($(this).children(".modals").addClass("active"),$(this).siblings("li").children(".modals").removeClass("active"),detailObj.inboxMenu()):5==a?($(this).children(".modals").addClass("active"),$(this).siblings("li").children(".modals").removeClass("active"),detailObj.inboxMenu()):6==a?(detailObj.deleteEmail(emailId,e),$(".caozuo-down-show").hide()):7==a?(detailObj.rubishEmail(emailId,1),$(".caozuo-down-show").hide()):8==a&&($(".caozuo-down-show").hide(),window.print())}),$(".email-detail").on("click",".caozuo-down-show>li>.new-built-task>.btn-group>.btn-sure",function(t){$.EventFn(t);var a=$(this).closest(".new-built-task"),e=a.children(".new-built-task-c").find("textarea").val(),i=a.children(".new-built-task-time").find("input").val();null!=i&&""!=i&&null!=e&&""!=e?(detailObj.creatTask(null,null,e,null,null,null,i),"block"==a.css("display")&&a.hide(),a.parent(".renwuShow").children(".pub-icon").removeClass("task-icon").addClass("tasked-icon"),$(".caozuo-down-show").children("li").children(".modals").removeClass("active"),$(".caozuo-down-show").hide()):confirm("请输入任务时间或内容！")}),$(".email-detail").on("click",".caozuo-down-show>li>.new-built-task>.btn-group>.btn-cancel",function(t){$.EventFn(t),$(".caozuo-down-show").children("li").children(".modals").removeClass("active"),$(".caozuo-down-show").hide()}),$(".emailcreatgroup-t").on("click",function(t){$.EventFn(t);var a=$(this).find(".s-updownBg");a.hasClass("s-add")?($(this).find(".s-add").removeClass("s-add").addClass("s-close"),$(this).parent(".emailcreatgroup").find(".emailcreatgroup-b").show()):($(this).find(".s-close").removeClass("s-close").addClass("s-add"),$(this).parent(".emailcreatgroup").find(".emailcreatgroup-b").hide())}),$(".caozuo-down-show").on("click","#btn-addTabs",function(t){$.EventFn(t);var a=$("#addTabName").val();null!=a&&""!=a?(detailObj.addGroups(a),$("#addTabName").val("")):confirm("请输入分组名！")}),$("#groupsModal").on("click",">.mbody>.group-list>li",function(t){$.EventFn(t);var a=[emailId],e=$(this).attr("data-id");detailObj.distributionGroup(a,e),$(".caozuo-down-show").children("li").children(".modals").removeClass("active"),$(".caozuo-down-show").hide()}),$(".emailcreattag-t").on("click",function(t){$.EventFn(t);var a=$(this).find(".s-updownBg");a.hasClass("s-add")?($(this).find(".s-add").removeClass("s-add").addClass("s-close"),$(this).parent(".emailcreattag").find(".emailcreattag-b").show()):($(this).find(".s-close").removeClass("s-close").addClass("s-add"),$(this).parent(".emailcreattag").find(".emailcreattag-b").hide())}),$(".caozuo-down-show").on("click","#btn-addTags",function(t){$.EventFn(t);var a=$("#addTagName").val();null!=a&&""!=a?detailObj.addEmailLabel(a):a.length>32?$.Alert("标签名称应小于32个字"):confirm("请输入标签名！")}),$("#tagsModal").on("click",">.mbody>.label-list>li",function(t){var a=[emailId],e=$(this).attr("data-id"),i=$(this).attr("data-accountId");detailObj.distributionTag(a,e,i),$(".caozuo-down-show").children("li").children(".modals").removeClass("active"),$(".caozuo-down-show").hide()}),$(".caozuo-down-show").on("click",".mclose",function(t){$.EventFn(t),$(this).parent(".mhead").parent(".modals").removeClass("active")});var detailObj={emailDetail:function(t){var a=t.isStar,e=t.tags,i=t.subject,n=t.froms[0],s=t.tos,l=t.ccs,o=t.receivedTime,d=t.attachments,c=t.visitingCard.status,r=t.visitingCard.customerName,u=t.visitingCard.isHighSeas,b="",m="",p="";if(null==e||""==e)$(".marks-group").parent().remove();else{for(var v=0;v<e.length;v++)b+='<li class="mark-p" data-id="'+e[v].id+'" style="border:1px solid #ff5720;border-radius:8px;">                                            <span class="mark ellipsis">'+e[v].name+'</span>                                            <i class="pub-icon close-icon"></i>                                        </li>';$(".marks-group").append(b)}if(1==u&&(p="<span>公海</span>"),null!==t.visitingCard.customerContactsName)var h=t.visitingCard.customerContactsName.substring(0,1);switch(c){case 1:userimg='<i class="pub-icon sender4-icon"></i>',m='<ul><li data-id="'+t.id+'"><div class="sender-condition"><div class="sender-condition-img"><span class="ellipsis sender-condition-name">'+t.visitingCard.title+'</span></div><button type="button" class="btn btn-primary btn-lg btn-block btn-blockAdd">添加为联系人</button><div class="btn-group condition-cz-btn" role="group" style="margin-left:-118px;"><button type="button" class="btn btn-default newtongxunlu">添加通讯录</button><button type="button" class="btn btn-default fayoujian">发邮件</button><button type="button" class="btn btn-default come-go">往来邮件</button></div></div></li></ul>';break;case 2:userimg='<i class="pub-icon sender4-icon"></i>',m='<ul><li data-id="'+t.id+'"><div class="sender-condition"><div class="sender-condition-img"><span class="ellipsis sender-condition-name">'+t.visitingCard.title+'</span></div><button type="button" class="btn btn-primary btn-lg btn-block btn-blockAdd">添加为联系人</button><div class="btn-group condition-cz-btn" role="group" style="margin-left:-118px;"><button type="button" class="btn btn-default tongxunlu">通讯录好友</button><button type="button" class="btn btn-default fayoujian">发邮件</button><button type="button" class="btn btn-default come-go">往来邮件</button></div></div></li></ul>';break;case 3:userimg='<i class="pub-icon sender1-icon"></i>',m='<ul><li data-id="'+t.id+'" data-customer="'+t.visitingCard.customerId+'" data-cont="'+t.visitingCard.customerContactsId+'"><div class="sender-condition"><div class="sender-condition-img"><span class="ellipsis sender-condition-name">'+t.visitingCard.title+'</span></div><div class="company-info"><span class="s-status" style="background-color: '+t.visitingCard.customerStatusColour+';">'+h+'</span><span class="ellipsis company-name name-blue">'+r+'</span></div><div class="belong-yewuy"><label>所属业务员：</label><span>'+t.visitingCard.salesmanName+'</span></div><button type="button" class="btn btn-primary btn-lg btn-block btn-blockDetail">查看联系人</button><div class="btn-group condition-cz-btn" role="group"><button type="button" class="btn btn-default xiegenjin">写跟进</button><button type="button" class="btn btn-default fayoujian">发邮件</button><button type="button" class="btn btn-default come-go">往来邮件</button></div></div></li></ul>';break;case 4:userimg='<i class="pub-icon sender1-icon"></i>',m='<ul><li data-id="'+t.id+'" data-customer="'+t.visitingCard.customerId+'"><div class="sender-condition"><div class="sender-condition-img"><span class="ellipsis sender-condition-name">'+t.visitingCard.title+'</span></div><div class="company-info"><span class="s-status" style="background-color: '+t.visitingCard.customerStatusColour+';">'+h+'</span><span class="ellipsis company-name name-blue">'+r+'</span></div><div class="belong-yewuy"><label>所属业务员：</label><span>'+t.visitingCard.salesmanName+'</span></div><button type="button" class="btn btn-primary btn-lg btn-block btn-blockAdd">添加为联系人</button><div class="btn-group condition-cz-btn" role="group"><button type="button" class="btn btn-default xiegenjin" disabled>写跟进</button><button type="button" class="btn btn-default fayoujian">发邮件</button><button type="button" class="btn btn-default come-go">往来邮件</button></div></div></li></ul>';break;case 5:userimg='<i class="pub-icon sender3-icon"></i>',m='<ul><li data-id="'+t.id+'" data-customer="'+t.visitingCard.customerId+'"><div class="sender-condition"><div class="sender-condition-img"><i class="pub-icon sender3-icon" style="top:0;"></i><span class="ellipsis sender-condition-name">'+t.visitingCard.title+'</span></div><div class="company-info"><span class="s-status" style="background-color: '+t.visitingCard.customerStatusColour+';">'+h+'</span><span class="ellipsis company-name name-blue">'+r+'</span></div><div class="belong-yewuy"><label>所属业务员：</label>'+p+'</div><button type="button" class="btn btn-primary btn-lg btn-block btn-privateCont">添加到私海</button><div class="btn-group condition-cz-btn" role="group"><button type="button" class="btn btn-default xiegenjin" disabled>写跟进</button><button type="button" class="btn btn-default fayoujian">发邮件</button><button type="button" class="btn btn-default come-go">往来邮件</button></div></div></li></ul>';break;case 6:userimg='<i class="pub-icon sender3-icon"></i>',m='<ul><li data-id="'+t.id+'" data-customer="'+t.visitingCard.customerId+'"><div class="sender-condition"><div class="sender-condition-img"><i class="pub-icon sender3-icon" style="top:0;"></i><span class="ellipsis sender-condition-name">'+t.visitingCard.title+'</span></div><div class="company-info"><span class="s-status" style="background-color: '+t.visitingCard.customerStatusColour+';">'+h+'</span><span class="ellipsis company-name name-blue">'+r+'</span></div><div class="belong-yewuy"><label>所属业务员：</label>'+p+'</div><button type="button" class="btn btn-primary btn-lg btn-block btn-privateCust">添加到私海</button><div class="btn-group condition-cz-btn" role="group"><button type="button" class="btn btn-default xiegenjin" disabled>写跟进</button><button type="button" class="btn btn-default fayoujian">发邮件</button><button type="button" class="btn btn-default come-go">往来邮件</button></div></div></li></ul>';break;case 7:userimg='<i class="pub-icon sender2-icon"></i>',m='<ul><li data-id="'+t.id+'" data-customer="'+t.visitingCard.customerId+'"><div class="sender-condition"><div class="sender-condition-img"><i class="pub-icon sender2-icon" style="top:0;"></i><span class="ellipsis sender-condition-name">'+t.visitingCard.title+'</span></div><div class="company-info"><span class="s-status" style="background-color: '+t.visitingCard.customerStatusColour+';">'+h+'</span><span class="ellipsis company-name name-blue">'+r+'</span></div><div class="belong-yewuy"><label>所属业务员：</label><span>'+t.visitingCard.salesmanName+'</span></div><button type="button" class="btn btn-default btn-lg btn-block btn-blockDetail btn-gray" disabled>查看联系人</button><div class="btn-group condition-cz-btn" role="group"><button type="button" class="btn btn-default xiegenjin" disabled>写跟进</button><button type="button" class="btn btn-default fayoujian">发邮件</button><button type="button" class="btn btn-default come-go" disabled>往来邮件</button></div></div></li></ul>';break;case 8:userimg='<i class="pub-icon sender2-icon"></i>',m='<ul><li data-id="'+t.id+'" data-customer="'+t.visitingCard.customerId+'"><div class="sender-condition"><div class="sender-condition-img"><i class="pub-icon sender2-icon" style="top:0;"></i><span class="ellipsis sender-condition-name">'+t.visitingCard.title+'</span></div><div class="company-info"><span class="s-status" style="background-color: '+t.visitingCard.customerStatusColour+';">'+h+'</span><span class="ellipsis company-name name-blue">'+r+'</span></div><div class="belong-yewuy"><label>所属业务员：</label><span>'+t.visitingCard.salesmanName+'</span></div><button type="button" class="btn btn-default btn-lg btn-block btn-gray btn-blockAdd" disabled>添加联系人</button><div class="btn-group condition-cz-btn" role="group"><button type="button" class="btn btn-default xiegenjin" disabled>写跟进</button><button type="button" class="btn btn-default fayoujian">发邮件</button><button type="button" class="btn btn-default come-go" disabled>往来邮件</button></div></div></li></ul>'}$("#sender-condition").append(m),1==a?startab='<i class="pub-icon star stared-icon" data-id="'+emailId+'" data-value="1"></i>':startab='<i class="pub-icon star star-icon" data-id="'+emailId+'" data-value="0"></i>',null!=n.name&&""!=n.name?fjr=n.name+n.value+"; ":fjr=n.value+"; ";for(var f="",v=0;v<s.length;v++)f+=null!=s[v].name&&""!=s[v].name?s[v].name+s[v].value+"; ":s[v].value+"; ";csr="";for(var g=0;g<l.length;g++)null!=l[g].name&&""!=l[g].name?csr+=l[g].name+l[g].value+"; ":csr+=l[g].value+"; ";var y="";if(csr&&(y='<li>                                        <div class="form-group">                                            <label class="control-label">抄送</label>                                            <input class="detailccs" disabled="disabled" value="'+csr+'">                                            <div class="clear"></div>                                        </div>                                    </li>',$("#ccs").empty().append(y)),$(".email-detail-theme").prepend(startab),$(".subject").text(i||"--").attr({"data-messageNumber":t.messageNumber,"data-folder":t.folder}),$(".detailSender").val(fjr),$(".detailRecipient").text(f),o&&(o=o.substring(0,o.lastIndexOf("."))),$(".sender-info-time").text(o||"--"),null!=d&&""!=d)for(var w="",v=0;v<d.length;v++)w+='<li data-url="'+d[v].value+'">                                    <div class="attachment-img" style="background-image: url(../images/new/cloudfile1.png); background-size: 100%;"></div>                                    <div class="attachment-info">                                        <h4 class="attachment-tit">'+d[v].name+'</h4>                                        <p class="attachment-size" data-size="'+d[v].size+'">'+parseFloat(d[v].size/1024).toFixed(2)+' KB</p>                                        <div class="attachment-handle">                                            <a id="down" data-name="'+d[v].name+'" data-url="'+d[v].value+'">下载</a>                                            <a class="previewEml" href="javascript:;">预览</a>                                            <a class="saveCloud" href="javascript:;">存云盘</a>                                        </div>                                    </div>                                </li>',$(".attachment-list").append(w);else $(".fujian").hide()},inboxMenu:function(){$.ajax({url:Base.sitUrl+"/api/email/outbox/v1/menus",type:"GET",success:function(t){if(!t.success)return void $.unLogin(t);for(var a=t.data,e=a.emailGroup,i=a.tags,n="",s="",l=0;l<e.length;l++)n+='<li data-id="'+e[l].id+'" data-accountId="'+e[l].name+'">'+e[l].name+'<span class="removeMenu">×</span></li>';for(var l=0;l<i.length;l++)s+='<li data-id="'+i[l].id+'" data-accountId="'+i[l].name+'">'+i[l].name+'<span class="removeMenu">×</span></li>';$("#groupsModal>.mbody>.group-list").empty().append(n),$("#tagsModal>.mbody>.label-list").empty().append(s)}})},rubishEmail:function(t,a){var e={ids:[t],value:a},i="data="+JSON.stringify(e);$.ajax({url:Base.sitUrl+"/api/email/outbox/v1/spam",type:"POST",data:i,success:function(t){if(!t.success)return void $.unLogin(t);parent.$.reHtml();var a=$("#mainTab",parent.document).find(".currentClass").index();parent.me.closeOne(a)}})},creatTask:function(t,a,e,i,n,s,l){var o={name:t,customerId:a,desc:e,createUse:i,remindTime:n,executionTimeType:s,executionTime:l},d="data="+JSON.stringify(o);$.ajax({url:Base.sitUrl+"/api/task/v1/task/save",type:"POST",data:d,success:function(t){if(!t.success)return void $.unLogin(t)}})},addGroups:function(t){var a={value:t},e='{"valueEnters":[{"value": "'+t+'"}]}';"data="+JSON.stringify(a);$.ajax({url:Base.sitUrl+"/api/email/setting/v1/group",type:"POST",data:{data:e},success:function(t){return t.success?($("#addTabName").val(""),void detailObj.inboxMenu(a.emailGroup)):void $.unLogin(t)}})},distributionGroup:function(t,a){var e={ids:t,value:a},i="data="+JSON.stringify(e);$.ajax({url:Base.sitUrl+"/api/email/outbox/v1/group",type:"POST",data:i,success:function(t){if(!t.success)return void $.unLogin(t)}})},addEmailLabel:function(t){var a={tagType:3,name:t};$.ajax({url:Base.sitUrl+"/api/user/v1/user/tag/save",type:"POST",data:a,success:function(t){return t.success?($("#addTagName").val(""),void detailObj.inboxMenu(a.tags)):void $.unLogin(t)}})},deleteTag:function(t){var a={id:t},e="data="+JSON.stringify(a);$.ajax({url:Base.sitUrl+"/api/email/v1/tag/delete",type:"POST",data:e,success:function(t){if(!t.success)return void $.unLogin(t)}})},distributionTag:function(t,a,e){var i={ids:t,value:a,name:e},n="data="+JSON.stringify(i);$.ajax({url:Base.sitUrl+"/api/email/v1/tag/add",type:"POST",data:n,success:function(t){if(!t.success)return void $.unLogin(t);var i='<li class="mark-p" data-id="'+a+'" style="border:1px solid #ff5720;border-radius:8px;"><span class="mark ellipsis">'+e+'</span><i class="pub-icon close-icon" style="display: none;"></i></li>';$(".marks-group").append(i),parent.$.reHtml()}})},deleteEmail:function(t,a){var e={ids:[t]},i="data="+JSON.stringify(e);$.ajax({url:Base.sitUrl+"/api/email/outbox/v1/delete",type:"POST",data:i,success:function(t){if(!t.success)return void $.Alert("删除，"+t.message);parent.$.reHtml();var a=$("#mainTab",parent.document).find(".currentClass").index();parent.me.closeOne(a)}})},starChange:function(t,a){var e={ids:[t],value:a},i="data="+JSON.stringify(e);$.ajax({url:Base.sitUrl+"/api/email/outbox/v1/star",type:"POST",data:i,success:function(t){return t.success?(parent.$.reHtml(),void parent.$.reInboxMenu()):void $.unLogin(t)}})},downloadFujian:function(t,a){var e={name:t,value:a},i="data="+JSON.stringify(e);window.location.href=Base.sitUrl+"/api/file/download?"+i}};$(document).on("click",".zhuizong",function(){"block"==$("#zhuizongDiv").css("display")?($(this).find("img").css("transform","rotate(0deg)"),$("#zhuizongDiv").hide()):($("#zhuizongDiv").show(),$(this).find("img").css("transform","rotate(180deg)"))}),$(document).on("mouseenter",".label-list li",function(){$(this).find(".removeMenu").show()}),$(document).on("mouseleave",".label-list li",function(){$(this).find(".removeMenu").hide()}),$(document).on("click",".star",function(t){$.EventFn(t),$(this).hasClass("star-icon")?($(this).removeClass("star-icon").addClass("stared-icon"),listVal=$(this).attr("data-value"),0==listVal&&(listVal=1),listId=$(this).attr("data-id"),detailObj.starChange(listId,1)):($(this).removeClass("stared-icon").addClass("star-icon"),listVal=$(this).attr("data-value"),1==listVal&&(listVal=0),listId=$(this).attr("data-id"),detailObj.starChange($(this).attr("data-id"),0))}),$("#tagsModal").on("click",">.mbody>.label-list>li>.removeMenu",function(t){$.EventFn(t);var a=$(this),e=$(this).parents("li").attr("data-id");$.ajax({url:Base.sitUrl+"/api/user/v1/user/tag/delete",type:"POST",dataType:"json",data:{id:e},success:function(t){return t.success?void a.parent().remove():void $.unLogin(t)}})}),$.getFrame=function(h){var obj=document.getElementById("myIframe").contentWindow.document.getElementById("data").value;obj=eval("("+obj+")"),detailObj.emailDetail(obj);var spaceH=$("html").height()-$("#header-h").height()-30;spaceH>h?$(".email-detail-main").height(spaceH):$(".email-detail-main").height(h)}})});