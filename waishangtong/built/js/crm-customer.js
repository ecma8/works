require(["common"],function(){require(["maintab","blockUI","datetimepickerCN","jquery"],function(e){function t(){$(".modals").removeClass("active"),$("#assigns").val(""),$("#btn-assign").hide(),k={arr:[],tmp:[]}}function a(e,t){var a="";$.each(e,function(e,t){for(var s="",n="",i="",o=0;o<5;o++)s+=o<t.starLevel?'<i class="s-updownBg s-star2"></i>':'<i class="s-updownBg s-unstar2"></i>';if(""==t.customerTags)n="none";else for(var o=0;o<2&&!(o>=t.customerTags.length);o++)t.customerTags[o].tagName.length>8&&(t.customerTags[o].tagName=t.customerTags[o].tagName.substring(0,7)+"..."),i+='<li class="tags-li"><span data-tagId="'+t.customerTags[o].id+'">'+t.customerTags[o].tagName+'</span><i class="s-updownBg s-dels3"></i></li>';var r="";if(0==t.countries&&(r="none",t.countries="12"),""!==t.followUpUsers&&null!==t.followUpUsers)for(var o=0;o<t.followUpUsers.length;o++){if(y==t.followUpUsers[o].userId){var l=t.followUpUsers[o].userName;break}var l=t.followUpUsers[0].userName}else var l="";if(""==t.statusName||null==t.statusName){t.statusName=""}if(""!==t.followUpUser&&null!==t.followUpUser&&void 0!==t.followUpUser&&t.followUpUser.length>4&&(t.followUpUser=t.followUpUser.substring(0,3)+"..."),""!==t.customerSourceName&&null!==t.customerSourceName&&void 0!==t.customerSourceName)if(t.customerSourceName.length>6)var d=t.customerSourceName.substring(0,5)+"...";else var d=t.customerSourceName;""!==t.name&&null!==t.name&&void 0!==t.name&&$.GetLength(t.name)>40&&(t.name=t.name.substring(0,40)+"..."),null!=t.statusColour&&""!=t.statusColour||(t.statusColour="#bbb"),null!=t.statusName&&""!=t.statusName||(t.statusName="无"),a+='<tr data-id="'+t.id+'" data-highSeas="'+t.highSeas+'"><td><div class="checker"><span><input name="batch" type="checkbox" data-id="'+t.id+'"></span></div></td><td style="text-align: center;padding: 8px 0;"><span class="s-status" style="float:none;background-color: '+t.statusColour+';">'+g(t.statusName.substring(0,1))+'</span></td><td class="sortsName"><a href="../html/pop-customer-detail.html?id='+t.id+"&v="+window.ver+'" data-maintab><span  class="s-special">'+g(t.name)+'</span></a><br><span class="recentNews">'+g(t.recentNews)+'</span></td><td class="starLevelOp">'+s+"</td><td><span>"+g(l)+'</span></td><td title="'+g(t.customerSourceName)+'"><span>'+g(d)+'</span></td><td style="position:relative;"><img src="../images/country/PNG/'+t.countries+'.png" alt="国家" style="display:'+r+'" /><ul class="'+n+'">'+i+'</ul></td><td class="sortsTime">'+g(t.createTime)+"</td></tr>"}),$(".trNone").remove(),$(".page_info>table>tbody").empty().html(a);var s=t,n=T.pageSize,i=Math.ceil(s/n);T.lastpage=i,$.Page({total:s,_class:".page",nowNum:T.currentPage,allNum:i,callback:function(e,t){T.currentPage=e,U.filter()}})}function s(e,t){var a="";$.each(e,function(e,t){for(var s="",n="",i="",o=0;o<5;o++)s+=o<t.starLevel?'<i class="s-updownBg s-star2"></i>':'<i class="s-updownBg s-unstar2"></i>';if(""==t.customerTags)n="none";else for(var o=0;o<2&&!(o>=t.customerTags.length);o++)t.customerTags[o].tagName.length>8&&(t.customerTags[o].tagName=t.customerTags[o].tagName.substring(0,7)+"..."),i+='<li class="tags-li"><span data-tagId="'+t.customerTags[o].id+'">'+t.customerTags[o].tagName+'</span><i class="s-updownBg s-dels3"></i></li>';var r="";if(0==t.countries&&(r="none",t.countries="12"),""!==t.followUpUsers&&null!==t.followUpUsers)for(var o=0;o<t.followUpUsers.length;o++){if(y==t.followUpUsers[o].userId){var l=t.followUpUsers[o].userName;break}var l=t.followUpUsers[0].userName}else var l="";if(""==t.statusName||null==t.statusName){t.statusName=""}if(""!==t.followUpUser&&null!==t.followUpUser&&void 0!==t.followUpUser&&t.followUpUser.length>4&&(t.followUpUser=t.followUpUser.substring(0,3)+"..."),""!==t.customerSourceName&&null!==t.customerSourceName&&void 0!==t.customerSourceName)if(t.customerSourceName.length>6)var d=t.customerSourceName.substring(0,5)+"...";else var d=t.customerSourceName;""!==t.name&&null!==t.name&&void 0!==t.name&&$.GetLength(t.name)>40&&(t.name=t.name.substring(0,40)+"..."),null!=t.statusColour&&""!=t.statusColour||(t.statusColour="#bbb"),null!=t.statusName&&""!=t.statusName||(t.statusName="无"),a+='<tr data-id="'+t.id+'" data-highSeas="'+t.highSeas+'"><td><div class="checker"><span><input name="batch" type="checkbox" data-id="'+t.id+'"></span></div></td><td style="text-align: center;padding: 8px 0;"><span class="s-status" style="float:none;background-color: '+t.statusColour+';">'+g(t.statusName.substring(0,1))+'</span></td><td class="sortsName"><a href="../html/pop-customer-detail.html?id='+t.id+"&v="+window.ver+'" data-maintab><span  class="s-special">'+g(t.name)+'</span></a><br><span class="recentNews">'+g(t.recentNews)+'</span></td><td class="starLevelOp">'+s+"</td><td><span>"+g(l)+'</span></td><td title="'+g(t.customerSourceName)+'"><span>'+g(d)+'</span></td><td style="position:relative;"><img src="../images/country/PNG/'+t.countries+'.png" alt="国家" style="display:'+r+'" /><ul class="'+n+'">'+i+'</ul></td><td class="sortsTime">'+g(t.createTime)+"</td></tr>"}),$(".trNone").remove(),$(".page_info>table>tbody").empty().html(a);var s=t,n=T.pageSize,i=Math.ceil(s/n);T.lastpage=i,$.Page({total:s,_class:".page",nowNum:T.currentPage,allNum:i,callback:function(e,t){T.currentPage=e,U.filter()}})}function n(){var e="";return $(".page_info .table tbody td input[type=checkbox]:checked").each(function(){var t=$(this).attr("data-id");e+=t+","}),e=e.substring(0,e.length-1)}function i(){$.ajax({url:Base.sitUrl+"/api/customer/v1/customer/left/filters",type:"POST",dataType:"json",data:{data:"{}"},success:function(e){if(!e.success)return void $.unLogin(e);for(var t=e.data.groups,a=e.data.tags,s="",n="",i="",o='<li data-value="">全部分组</li>',r=0;r<t.length;r++)s+='<li data-value="'+t[r].id+'">'+t[r].name+" <span>("+(t[r].totalCount||"无")+")</span></li>",n+='<li data-value="'+t[r].id+'">'+t[r].name+" <span>("+(t[r].totalCountHighSeas||"无")+")</span></li>";for(var r=0;r<a.length;r++){if($.GetLength(a[r].name)>13)var l=$.autoAddEllipsis(a[r].name,12);else var l=a[r].name;i+='<li data-value="'+a[r].id+'" title="'+a[r].name+'">'+l+"</li>"}$(".group-list").empty().append(o).append(s),$(".highsea-list").empty().append(o).append(n),$(".label-list").empty().append(i),$("#groupsModal").find("ul").empty().append(s),$("#tagsModal").find("ul").empty().append(i)}})}function o(e){$.ajax({url:Base.sitUrl+"/api/user/v1/user/tag/save",type:"POST",dateType:"json",data:{tagType:1,name:e},success:function(e){return e.success?($.Alert("添加成功！"),i(),$(".addGroup").hide(),$(".s-close").addClass("s-add"),void $(".s-add").removeClass("s-close")):void $.unLogin(e)}})}function r(){$.ajax({url:Base.sitUrl+"/api/org/v1/org/staff/customer/status/list",type:"POST",dataType:"json",success:function(e){if(!e.success)return void $.unLogin(e);for(var t=e.data,a='<option value="0">全</option>',s=0;s<t.length;s++){var n=t[s].name;a+='<option value="'+t[s].id+'">'+n+"</option>"}$("#statusList").empty().append(a)}})}function l(){$.ajax({url:Base.sitUrl+"/api/org/v1/org/staff/customer/source/list",type:"POST",dataType:"json",success:function(e){if(!e.success)return void $.unLogin(e);for(var t=e.data,a="<option value='0'>请选择</option>",s=0;s<t.length;s++)a+='<option value="'+t[s].id+'">'+t[s].name+"</option>";$("#sourceList").empty().append(a)}})}function d(){$.ajax({url:Base.sitUrl+"/api/sys/v1/sys/dictionary/get",type:"POST",data:{group:"customer.type"},dataType:"json",success:function(e){if(!e.success)return void $.unLogin(e);for(var t=e.data,a="<option value='0'>请选择</option>",s=0;s<t.length;s++)a+='<option value="'+t[s].id+'">'+t[s].value+"</option>";$("#custType").empty().append(a)}})}function c(){$.ajax({url:Base.sitUrl+"/api/customer/v1/customer/group/list",type:"POST",data:{group:"customer.type"},dataType:"json",success:function(e){if(!e.success)return void $.unLogin(e);for(var t=e.data,a="<option value='0'>请选择</option>",s=0;s<t.length;s++)a+='<option value="'+t[s].id+'">'+t[s].name+"</option>";$("#custGroup").empty().append(a)}})}function u(){$.ajax({url:Base.sitUrl+"/api/user/v1/user/tag/list?tagType=1",dataType:"json",success:function(e){if(!e.success)return void $.unLogin(e);for(var t=e.data,a="",s=0;s<t.length;s++)a+='<li data-id="'+t[s].id+'">'+t[s].name+"</li>";$("#filter-tag .tag-list").empty().append(a)}})}function p(){for(var e=$.countries,t='<option value="0">选择国家地区</option>',a=0;a<e.length;a++)t+='<option value="'+e[a].id+'">'+e[a].cn+" - "+e[a].en+"</option>";$("#countryList").empty().append(t)}function f(){$.ajax({url:Base.sitUrl+"/api/product/v1/product/type/list",type:"POST",dataType:"json",success:function(e){if(!e.success)return void $.unLogin(e);for(var t=e.data,a='<option value="0">请选择</option>',s=0;s<t.length;s++)a+='<option value="'+t[s].id+'">'+t[s].name+"</option>";$("#pdtType").empty().append(a)}})}function m(){$.ajax({url:Base.sitUrl+"/api/customer/v1/underling/customer",type:"POST",dataType:"json",success:function(e){if(!e.success)return void $.unLogin(e);for(var t=e.data,a="",s="",n=0;n<t.length;n++)a+='<option value="'+t[n].id+'">'+t[n].name+"</option>",s+='<li data-value="'+t[n].id+'">'+t[n].name+"</li>";var i='<option value="">不限</option>';$("#followerList").empty().append(i).append(a),$("#salesModal").find("ul").empty().append(s),$("#sharesModal").find("ul").empty().append(s),$("#myModal .modal-body>ul").empty().append(s)}})}function v(e){$.ajax({url:Base.sitUrl+"/api/customer/v1/customer/list/query",type:"POST",dataType:"json",data:{data:e},beforeSend:function(e){$.BlockUI()},complete:function(e,t){$.UnblockUI()},success:function(e){if(!e.success)return void $.unLogin(e);var t=e.data.results,s=e.data.totalItem;if(a(t,s),""==t){var n='<div class="trNone"><div class="trnone-info"><img src="../images/empty-customer.png" alt="" /><p class="trnone-text">暂无客户</p></div><a href="pop-customer-add.html" class="trnone-btn btn btn-primary" data-code="customer_add" data-maintab></i><span>创建客户</span></a></div>';$(".page_info>table").after(n)}}})}function g(e){return null==e?"":e}var h=top.funcList;$("[data-code]").each(function(){for(var e=0;e<h.length;e++)h[e].code==$(this).attr("data-code")&&$(this).removeClass("none")}),e.init(),$(".r-titles").hide();var y=parent.document.getElementById("pageLeftUserName").innerText;$.sessionKeyIdFunc=function(){var e=$("#pageLeftUserName",parent.document).attr("data-id");return e},$(document).on("click",".starLevelOp>i",function(e){$.EventFn(e);var t=$(this).parent().children("i");$(this).hasClass("s-unstar2")?b.goodFn(t,$(this).index()):b.nagativeFn(t,$(this).index());var a=$(this).parents("tr").attr("data-id"),s=$(this).parents(".starLevelOp").find(".s-star2").length,n={id:a,starLevel:s,setType:"setStar"};$.ajax({url:Base.sitUrl+"/api/customer/v1/customer/set",type:"POST",dataType:"json",async:!1,data:{data:JSON.stringify(n)},success:function(e){return e.success?void U.filter():void $.unLogin(e)}})});var b={index:1,goodFn:function(e,t){for(var a=0;a<e.length;a++){if(a>t)return;e.eq(a).removeClass("s-unstar2").addClass("s-star2")}},nagativeFn:function(e,t){for(var a=0;a<e.length;a++)a>t?e.eq(a).removeClass("s-star2").addClass("s-unstar2"):e.eq(a).removeClass("s-unstar2").addClass("s-star2")},mFn:function(e){for(var t=e,a=0;a<t.length;a++)(a+1)%2==0&&t.eq(a).css("margin-right",0)}};$("#custFilter li a").on("click",function(e){$.EventFn(e),$(this).parent().attr("active")||$(this).parent().addClass("active").siblings("li").removeClass("active"),"group-list"==$(this).parent().find("ul").attr("class")||"label-list"==$(this).parent().find("ul").attr("class")||"highsea-list"==$(this).parent().find("ul").attr("class")?($(this).parent().find("ul").addClass("active"),$(this).parent().find(".s-up2").addClass("s-down2"),$(this).parent().find(".s-down2").removeClass("s-up2")):($(this).parent().find("ul").removeClass("active"),$(this).parent().find(".s-up2").removeClass("s-down2"),$(this).parent().find(".s-down2").addClass("s-up2"))}),$(".page-left").on("click","#custFilter .s-up2",function(e){$.EventFn(e),$(this).parents("li").find("ul").addClass("active"),$(this).addClass("s-down2"),$(this).parents("li").find(".s-down2").removeClass("s-up2")}),$(".page-left").on("click","#custFilter .s-down2",function(e){$.EventFn(e),$(this).parents("li").find("ul").removeClass("active"),$(this).addClass("s-up2"),$(this).parents("li").find(".s-up2").removeClass("s-down2")}),$(".page-left").on("click","#custFilter .s-add",function(e){$.EventFn(e),$(this).parents("li").find("ul").addClass("active"),$(this).parents("li").find(".addGroup").show(),$(this).addClass("s-close"),$(this).parents("li").find(".s-close").removeClass("s-add")}),$(".page-left").on("click","#custFilter .s-close",function(e){$.EventFn(e),$(this).parents("li").find("ul").addClass("active"),$(this).parents("li").find(".addGroup").hide(),$(this).addClass("s-add"),$(this).parents("li").find(".s-add").removeClass("s-close")}),$("#batchClose").on("mouseenter",function(){$(this).addClass("s-updownBg s-dels4").removeClass("fa fa-times")}),$("#batchClose").on("mouseleave",function(){$(this).addClass("fa fa-times").removeClass("s-updownBg s-dels4")}),$(".mclose").on("click",function(){t()}),$(".my_customer").on("click",function(){$(".r-titles .model-name").text("我的客户")}),$(".my_tag").on("click",function(){$(".r-titles .model-name").text("标签")}),$(".page_info>table>tbody").delegate("input[name=batch]","click",function(e){var t=e||window.event;t.stopPropagation();var a=custObj.getAllChecked();a.dist.indexOf("0")!=-1&&$("#btn-assigns").attr("disabled","disabled"),a.share.indexOf("0")!=-1&&$("#btn-shares").attr("disabled","disabled"),a.del.indexOf("0")!=-1&&$("#btn-dels").attr("disabled","disabled")}),$(".btn-addLabel").on("click",function(){$(".u-labels").hasClass("active")?($(this).find("i").removeClass("fa-times").addClass("fa-plus"),$(".u-labels").removeClass("active")):($(this).find("i").addClass("fa-times").removeClass("fa-plus"),$("#labelName").val(""),$(".u-labels").addClass("active"))}),$("#btn-assigns,#btn-shares").on("click",function(){k={arr:[],tmp:[]},$("#salesModal").addClass("active").css("left",$(this).position().left-52).siblings(".modals").removeClass("active")});var k={arr:[],tmp:[]};$("#btn-groups").on("click",function(){$("#groupsModal").addClass("active").siblings().removeClass("active")}),$("#btn-tags").on("click",function(){$("#tagsModal").addClass("active").css("marginLeft","90px").siblings().removeClass("active")}),$("#btn-assigns").on("click",function(){$("#salesModal").addClass("active").css("marginLeft","52px").siblings().removeClass("active")}),$("#btn-shares").on("click",function(){$("#sharesModal").addClass("active").css("marginLeft","250px").siblings().removeClass("active")}),$("#output").click(function(){var e=n();parent.location.href=Base.sitUrl+"/api/customer/v1/export?data="+JSON.stringify({ids:e})});var T={homepage:1,currentPage:1,lastpage:null,pageSize:20,conditions:[]},C={homepage:1,currentPage:1,lastpage:null,pageSize:20,conditions:[]},N={homepage:1,currentPage:1,lastpage:null,pageSize:20,keyword:""},U={filter:function(){$.ajax({url:Base.sitUrl+"/api/customer/v1/customer/list/query",data:{data:JSON.stringify(T)},type:"POST",dataType:"json",beforeSend:function(e){$.BlockUI()},complete:function(e,t){$.UnblockUI()},success:function(e){if(!e.success)return void $.unLogin(e);$("#filterModal").is(":hidden")||$("#filterModal").modal("hide");var t=e.data.results,s=e.data.totalItem;if(t.length>0)a(t,s);else{var n='<div class="trNone"><div class="trnone-info"><img src="../images/empty-customer.png" alt="" /><p class="trnone-text">暂无客户</p></div><a href="pop-customer-add.html" class="trnone-btn btn btn-primary" data-code="customer_add" data-maintab></i><span>创建客户</span></a></div>';$(".page_info>table>tbody").empty(),$(".page_info>table").after(n),$(".page").empty()}}})},del:function(){$.ajax({url:Base.sitUrl+"/api/customer/v1/customer/list/query",data:{data:JSON.stringify(C)},type:"POST",dataType:"json",beforeSend:function(e){$.BlockUI()},complete:function(e,t){$.UnblockUI()},success:function(e){if(!e.success)return void $.unLogin(e);$("#filterModal").is(":hidden")||$("#filterModal").modal("hide");var t=e.data.results,a=e.data.totalItem;if(t.length>0)s(t,a);else{var n='<div class="trNone"><div class="trnone-info"><img src="../images/empty-customer.png" alt="" /><p class="trnone-text">暂无客户</p></div><a href="pop-customer-add.html" class="trnone-btn btn btn-primary" data-code="customer_add" data-maintab></i><span>创建客户</span></a></div>';$(".page_info>table>tbody").empty(),$(".page_info>table").after(n),$(".page").empty()}}})},repeatFilter:function(){$.ajax({url:Base.sitUrl+"/api/customer/v1/list/duplicate/customer/by/keyword",type:"POST",data:{data:JSON.stringify(N)},beforeSend:function(e){$.BlockUI()},complete:function(e,t){$.UnblockUI()},success:function(e){if(""!=e.data.results){$("#img_con").css("display","none"),$(".table-responsive").css("display","block");var t=e.data.totalItem,a=(N.pageSize,e.data.totalPage);$.Page({total:t,_class:".page",nowNum:N.currentPage,allNum:a,callback:function(e,t){N.currentPage=e,U.repeatFilter()}});for(var s="",e=e.data.results,n=0;n<e.length;n++){var i=e[n].contactNames;i=i?i.substr(0,12):e[n].contactNames;var o;o=e[n].statusName?e[n].statusName.substr(0,1):e[n].statusName;var r=e[n].followUpUsers;r=r.length>0?e[n].followUpUsers[0].userName:"",s+="<tr class='table_title'><td><div class='table_status' style='background:"+e[n].statusColour+"'>"+g(o)+"</div></td><td>"+g(e[n].name)+"</td><td>"+g(i)+"</td><td>"+g(e[n].defaultEmail)+"</td><td>"+g(e[n].phone)+"</td><td>"+g(r)+"</td><td>"+g(e[n].createTime)+"</td></tr>"}$("#table_info").empty(),$("#table_info").append(s)}else $(".table-responsive").css("display","none"),$("#img_con").css("display","block")}})}};$("#inputQuick,#custName").on("keyup",function(){var e=$("#inputQuick").val()||$("#custName").val();if("none"==$("#btn-underling-pop").css("display"))var t={currentPage:1,pageSize:10,keyword:e};else var s=$("#btn-underling-pop").attr("data-id"),t={id:s,currentPage:1,pageSize:10,keyword:e};13==event.keyCode&&$.ajax({url:Base.sitUrl+"/api/customer/v1/customer/list/query/keyword",type:"POST",dataType:"json",data:{data:JSON.stringify(t)},success:function(e){if(!e.success)return void $.unLogin(e);var t=e.data.results,s=e.data.totalItem;a(t,s)}})}),$("#groupsModal").on("click","ul li",function(){var e=$(this).attr("data-value"),t=n(),a={ids:t,customerGroupId:e,setType:"group"};$(".page_info .table tbody td input[type=checkbox]:checked").length<1?$.Alert("请选择要分组人员"):$.ajax({url:Base.sitUrl+"/api/customer/v1/customer/set",type:"POST",dataType:"json",data:{data:JSON.stringify(a)},success:function(e){return e.success?($("#groupsModal").removeClass("active"),U.filter(),void $.Alert("操作成功")):void $.unLogin(e)}})}),$("#tagsModal").on("click","ul li",function(){var e=$(this).attr("data-value"),t=n(),a={ids:t,tagId:e,setType:"tag"};$(".page_info .table tbody td input[type=checkbox]:checked").length<1?$.Alert("请选择标记人员"):$.ajax({url:Base.sitUrl+"/api/customer/v1/customer/set",type:"POST",dataType:"json",data:{data:JSON.stringify(a)},success:function(e){return e.success?($("#tagsModal").removeClass("active"),void U.filter()):void $.unLogin(e)}})}),$("#salesModal").on("click","ul li",function(){var e=$(this).attr("data-value"),t=n(),a={ids:t,userId:e,setType:"allot"};$(".page_info .table tbody td input[type=checkbox]:checked").length<1?$.Alert("请选择要分配人员"):$.ajax({url:Base.sitUrl+"/api/customer/v1/customer/set",type:"POST",dataType:"json",data:{data:JSON.stringify(a)},success:function(e){return e.success?($("#salesModal").removeClass("active"),U.filter(),void $.Alert("操作成功")):void $.unLogin(e)}})}),$("#sharesModal").on("click","ul li",function(){var e=$(this).attr("data-value"),t=n(),a={ids:t,userId:e,setType:"share"};$(".page_info .table tbody td input[type=checkbox]:checked").length<1?$.Alert("请选择要分组人员"):$.ajax({url:Base.sitUrl+"/api/customer/v1/customer/set",type:"POST",dataType:"json",data:{data:JSON.stringify(a)},success:function(e){return e.success?($("#sharesModal").removeClass("active"),U.filter(),void $.Alert("操作成功")):void $.unLogin(e)}})}),$(document).on("click",".tags-li .s-dels3",function(e){$.EventFn(e);var t=$(this).parent().find("span").attr("data-tagid"),a={id:t,setType:"delTag"};$.ajax({url:Base.sitUrl+"/api/customer/v1/customer/set",type:"POST",dataType:"json",data:{data:JSON.stringify(a)},success:function(e){return e.success?void U.filter():void $.unLogin(e)}})}),$("#tagsAdd").on("click",function(){var e=$("#labelNames").val();o(e)}),$("#filterModal").on("click",".checked-tags",function(){$(this).next().toggle()}),$("#filterModal").on("click",".tag-list li",function(){var e=$(this);e.parent().hide();for(var t=e.parent().prev(".checked-tags").find(".tag-cont"),a=0;a<t.length;a++)if(e.attr("data-id")==t.eq(a).attr("data-id"))return;var s='<span class="tag-cont" data-id="'+$(this).attr("data-id")+'"><span class="mark ellipsis">'+$(this).text()+'</span><i class="close-icon"></i></span>';e.parent().prev(".checked-tags").append(s)}),$("#filterModal").on("click",".checked-tags .mark",function(e){$.EventFn(e)}),$("#filterModal").on("click",".checked-tags .close-icon",function(e){$.EventFn(e),$(this).parent().remove()}),$("#pdtType").change(function(){var e=$(this).val();$.ajax({url:Base.sitUrl+"/api/product/v1/product/type/sublist?pid="+e,type:"POST",dataType:"json",success:function(e){if(!e.success)return void $.unLogin(e);for(var t=e.data,a="",s=0;s<t.length;s++)a+='<option value="'+t[s].id+'">'+t[s].name+"</option>";$("#pdtType2").empty().append('<option value="">请选择产品类型</option>').append(a)}})}),$("#pdtType2").change(function(){var e=$(this).val();$.ajax({url:Base.sitUrl+"/api/product/v1/product/type/sublist?pid="+e,type:"POST",dataType:"json",success:function(e){if(!e.success)return void $.unLogin(e);for(var t=e.data,a="",s=0;s<t.length;s++)a+='<option value="'+t[s].id+'">'+t[s].name+"</option>";$("#pdtType3").empty(),$("#pdtType3").append('<option value="">请选择产品类型</option>'),$("#pdtType3").append(a)}})}),$("#pdtType3").change(function(){var e=$(this).val();$.ajax({url:Base.sitUrl+"/api/product/v1/product/type/sublist?pid="+e,type:"POST",dataType:"json",success:function(e){if(!e.success)return void $.unLogin(e);for(var t=e.data,a="",s=0;s<t.length;s++)a+='<option value="'+t[s].id+'">'+t[s].name+"</option>";$("#pdtType4").empty(),$("#pdtType4").append('<option value="">请选择产品类型</option>'),$("#pdtType4").append(a)}})}),$("#inlineCheckbox").change(function(){var e=$(this).prop("checked");1==e?($("input[name=checkstar]").prop("checked",!0),$("input[name=checkstar]").parent().addClass("checked")):($("input[name=checkstar]").prop("checked",!1),$("input[name=checkstar]").parent().removeClass("checked"))}),$("input[name=checkstar]").change(function(){var e=$(this).prop("checked");if(1==e){for(var t=0;t<$("input[name=checkstar]").length;t++)if(!$("input[name=checkstar]").eq(t).prop("checked")&&0!=t)return;$("#inlineCheckbox").prop("checked",!0).parent().addClass("checked")}else $("#inlineCheckbox").prop("checked",!1).parent().removeClass("checked")}),$("#screen").click(function(e){$.EventFn(e);var t=$("#statusList").val(),a=$("#keyword").val(),s=$("input[name=checktag]:checked").val(),n="",i="",o=$("#lastTime").val(),r=$("#countryList").val(),l=$("#custGroup").val(),d=$("#custType option:selected").index(),c=$("#sourceList").val(),u="",p=$("#followType input[type=radio]:checked").val();if($(".checkstar").find("input[type=checkbox]:checked").length>0)if(1==$("#inlineCheckbox").prop("checked"))n="1,2,3,4,5,";else for(var f=0;f<$(".checkstar").find("input[type=checkbox]:checked").length;f++)n+=$(".checkstar").find("input[type=checkbox]:checked").eq(f).val()+",";var m=n.substring(0,n.length-1);if($(".checked-tags").children("span.tag-cont").length>0)for(var f=0;f<$(".checked-tags").children("span.tag-cont").length;f++)i+=$(".checked-tags").children("span.tag-cont").eq(f).attr("data-id")+",";else i+="0";var v=i.substring(0,i.length-1),g=$("#pdtType option:selected").val(),h=$("#pdtType2 option:selected").val(),y=$("#pdtType3 option:selected").val(),b=$("#pdtType4 option:selected").val();void 0!==b&&""!==b?u=b:void 0!==y&&""!==y?u=y:void 0!==h&&""!==h?u=h:void 0!==g&&""!==g&&(u=g),T.conditions=[];var k;""!=t&&0!=t&&(k={filedName:"status",operateType:"=",filedValue:t},T.conditions.push(k)),""!=a&&(T.keyword=a),""!=m&&(T.starLevels=m),""!=v&&(T.containsTags=s?s:1,T.tagIds=v),""!=o&&0!=o&&(T.latestContactDays=o),""!=r&&0!=r&&(k={filedName:"countries",operateType:"=",filedValue:r},T.conditions.push(k)),""!=l&&"0"!=l&&(T.customerGroupId=l),""!=d&&"0"!=d&&(T.customerType=d),""!=c&&"0"!=c&&(k={filedName:"customerSource",operateType:"=",filedValue:c},T.conditions.push(k)),""!=u&&"0"!=u&&(T.productType=u),void 0!=p&&(T.followStatus=p?p:0),""==t&&""==a&&""==m&&""==v&&""==o&&""==r&&""==l&&""==d&&""==c&&""==u&&""==p&&(T.conditions=[]),T.currentPage=1,U.filter()}),$("#reset").click(function(){$("#filterModal input#keyword").val(""),$("input[name=checkstar]").prop("checked",!1).parent().removeClass("checked"),$("input[name=checktag]").prop("checked",!1).parent().removeClass("checked"),$(".checked-tags").empty(),$("#lastTime,#statusList,#countryList,#custGroup,#custType,#sourceList").val("0"),$(".pdtType select").val(0),$("#followType input").prop("checked",!1).parent().removeClass("checked")}),$("#btn-underling").on("click",function(e){$(this).hasClass("on")&&(U.filter(),$("#btn-underling-pop").hide(),$(this).removeClass("on"),$(this).attr("data-toggle","modal"),$(this).attr("data-target","#myModal"),$.EventFn(e))}),$("#myModal .modal-body>ul").on("click",">li",function(){var e=$(this).attr("data-value"),t=$(this).text();$("#btn-underling").attr("data-toggle",""),$("#btn-underling").attr("data-target",""),$("#btn-underling").addClass("on"),$("#btn-underling-pop").text(t),$("#btn-underling-pop").attr("data-id",e),$("#btn-underling-pop").show(),$("#underling-close").click(),T.conditions=[{filedName:"followUpUser",operateType:"=",filedValue:e}],U.filter()}),$("#btn-filter").on("click",function(){r(),l(),p(),d(),c(),u(),f()}),$("#custFilter").on("click",".group-list li",function(){$(".label-list").find("li.active").removeClass("active"),$(this).addClass("active").siblings("li").removeClass("active"),$("#highSeas").removeClass("active"),$("#btn-groups").attr("disabled",!1),$("#btn-tags").attr("disabled",!1),$("#btn-assigns").attr("disabled",!1),$("#btn-shares").attr("disabled",!1),$("#btn-dels").attr("disabled",!1),$("#output").attr("disabled",!1),$("#nohighSeas-btn").attr("disabled",!0);var e=$(this).attr("data-value");T.currentPage=1,0==$(this).index()?T.conditions=[{filedName:"highSeas",operateType:"=",filedValue:0}]:T.conditions=[{filedName:"customerGroupId",operateType:"=",filedValue:e},{filedName:"highSeas",operateType:"=",filedValue:0}];var t=JSON.stringify(T);$(".r-titles .model-name").text("分组客户"),""==e?U.filter():v(t)}),$("#custFilter .highsea-list").on("click","li",function(){$(".label-list").find("li.active").removeClass("active"),$(this).addClass("active").siblings("li").removeClass("active"),$("#btn-dels").attr("disabled",!1),$("#nohighSeas-btn").attr("disabled",!0);var e=$(this).attr("data-value");T.currentPage=1,0==$(this).index()?T.conditions=[{filedName:"highSeas",operateType:"=",filedValue:1}]:T.conditions=[{filedName:"customerGroupId",operateType:"=",filedValue:e},{filedName:"highSeas",operateType:"=",filedValue:1}];var t=JSON.stringify(T);$(".r-titles .model-name").text("公海客户"),""==e?U.filter():v(t)}),$("#custFilter").on("click",".label-list li",function(){$(".group-list").find("li.active").removeClass("active"),$(this).addClass("active").siblings("li").removeClass("active"),$("#highSeas").removeClass("active"),$("#btn-groups").attr("disabled",!1),$("#btn-tags").attr("disabled",!1),$("#btn-assigns").attr("disabled",!1),$("#btn-shares").attr("disabled",!1),$("#btn-dels").attr("disabled",!1),$("#output").attr("disabled",!1),$("#nohighSeas-btn").attr("disabled",!0);var e=$(this).attr("data-value");T.currentPage=1,T.conditions=[{filedName:"tagId",operateType:"=",filedValue:e}];var t=JSON.stringify(T);$(".r-titles .model-name").text("客户"),v(t)}),$("#nohighSeas-btn").on("click",function(e){$.EventFn(e);var t=n(),a={ids:t};$.ajax({url:Base.sitUrl+"/api/customer/v1/into/private/seas",type:"POST",dataType:"json",data:{data:JSON.stringify(a)},success:function(e){$("#highSeas").parent().click(),i()}})}),$("#btn-recover").on("click",function(e){$.EventFn(e);var t=n(),a={ids:t,setType:"retrieve"};$.ajax({url:Base.sitUrl+"/api/customer/v1/customer/set",type:"POST",dataType:"json",data:{data:JSON.stringify(a)},success:function(e){return e.success?(console.log("success"),void location.reload()):void $.unLogin(e)}})}),$("#btn-dels").on("click",function(){var e=0;if($(".page_info .table tbody td input[type=checkbox]:checked").each(function(){var t=$(this).parents("tr").attr("data-highSeas");1==t&&($.Alert($(this).parents("tr").find(".sortsName span").text()+"是公海客户,您不能删除"),e=1)}),1!=e){var t=n(),a="delete",s={ids:t,setType:a};s=JSON.stringify(s),""==t?$.Alert("请选择要删除人员"):$.Confirm("确认删除？","",function(){$.ajax({url:Base.sitUrl+"/api/customer/v1/customer/set",type:"POST",dataType:"json",data:{data:s},success:function(e){return e.success?($(".m_batch").stop().animate({left:"-100%"},function(){$(".m_batch").removeClass("active")}),$.Alert("删除成功！"),void U.filter()):void $.unLogin(e)}})})}}),$(".table thead th").on("click",function(){var e=$(this),t=$(".table:first tbody tr");"sortsName"==e.attr("id")?e.find(".s-updownBg").hasClass("s-reorderList")?(e.find(".s-updownBg").removeClass("s-reorderList").addClass("s-orderList"),t=t.sort(function(e,t){return $(e).find(".s-special").text().localeCompare($(t).find(".s-special").text())})):(e.find(".s-updownBg").addClass("s-reorderList").removeClass("s-orderList"),t=t.sort(function(e,t){return $(t).find(".s-special").text().localeCompare($(e).find(".s-special").text())})):"sortsTime"==e.attr("id")?e.hasClass("up")?(e.find(".s-updownBg").addClass("s-reorderList").removeClass("s-orderList"),e.removeClass("up"),t=t.sort(function(e,t){return new Date($(e).find(".sortsTime").text()).getTime()-new Date($(t).find(".sortsTime").text()).getTime()})):(e.find(".s-updownBg").addClass("s-orderList").removeClass("s-reorderList"),e.addClass("up"),t=t.sort(function(e,t){return new Date($(t).find(".sortsTime").text()).getTime()-new Date($(e).find(".sortsTime").text()).getTime()})):"sortsStar"==$(this).attr("id")&&(e.hasClass("up")?(e.find(".s-updownBg").addClass("s-orderList").removeClass("s-reorderList"),e.removeClass("up"),t=t.sort(function(e,t){return $(t).find(".starLevelOp .s-star2").length-$(e).find(".starLevelOp .s-star2").length})):(e.find(".s-updownBg").addClass("s-reorderList").removeClass("s-orderList"),e.addClass("up"),t=t.sort(function(e,t){return $(e).find(".starLevelOp .s-star2").length-$(t).find(".starLevelOp .s-star2").length}))),$(".table:first tbody").empty().append(t)}),$(document).on("click","tbody tr td",function(){var e=$(this).find("div.checker");1!=e.length&&$(this).parent().find(".sortsName a").click()}),$("#find_comm").on("click",function(){$("#search_info").css("display","block"),$("#table_info").empty(),$("#focus_search").val(""),$("#img_con").css("display","none"),$("#hide_img").css("display","none"),$(".table-responsive").css("display","none"),$("#search_info .page").empty(),$(".r-titles .model-name").text("客户查重")}),$("#click_other").on("click",function(){$("#search_info").css("display","none"),$(".r-titles .model-name").text("公海客户")}),$("#focus_search").on("keyup",function(){$("#hide_img").show()}),$("#hide_img").on("click",function(){$("#focus_search").val(""),$(this).hide()}),$("#click_search").on("click",function(){var e=$("#focus_search").val();""==e?$.Alert("请输入内容"):(N.keyword=e,U.repeatFilter())}),$("#find_delete").on("click",function(){$("#search_info").css("display","none"),C.isDel=1,U.del(),$("#btn-recover").attr("disabled",!1),$("#btn-groups").attr("disabled",!0),
$("#btn-tags").attr("disabled",!0),$("#btn-assigns").attr("disabled",!0),$("#btn-shares").attr("disabled",!0),$("#btn-dels").attr("disabled",!0),$("#output").attr("disabled",!0),$("#nohighSeas-btn").attr("disabled",!0),$(".r-titles .model-name").text("已删除客户")}),U.filter(),i(),m()})});