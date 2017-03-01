require(["common"],function(){require(["maintab","blockUI"],function(t){var i=top.funcList;$("[data-code]").each(function(){for(var t=0;t<i.length;t++)i[t].code==$(this).attr("data-code")&&$(this).removeClass("none")}),t.init();var e=parseInt($.GetQueryString("id")),n=$("#detailQuoForm"),o=$.GetQueryString("showbtn");o||$(".quotation-btn-group").show(),n.on("click",".form-group>button",function(i){$.EventFn(i);var n=$(this).attr("data-type");"edit"==n?t.showTab(Base.url+"/html/pop-quotation-add.html?type=1&id="+e+"&v="+window.ver,"编辑报价"):"copy"==n?t.showTab(Base.url+"/html/pop-quotation-add.html?type=0&id="+e+"&v="+window.ver,"新建报价"):"export"==n&&a.toExport()});var a={unit:{price:[],quantity:[]},getQuoInfoById:function(){$.ajax({url:Base.sitUrl+"/api/quotation/v1/quotation/get",data:{id:e},type:"POST",dataType:"json",success:function(t){if(!t.success)return void $.unLogin(t);var i=t.data,e=i.productQuotationProductEnters,o=a.unit.price,r=a.unit.quantity,u="";n.find(".items-infos");if(n.find(".quo-title>span").text(i.name),n.find(".custInfo-name").text(i.createUserName||"匿名"),n.find(".custInfo-addr").text(i.toAddress),n.find(".custInfo-no").text(i.quotationNo),n.find(".custInfo-seller").text(i.seller),n.find(".custInfo-date").text(i.quotationDate||""),n.find(".quo-title>label>span").text(i.createTime),n.find(".quo-total>span").text(i.totalPrice),n.find(".quo-head").html(i.header),n.find(".quo-foot").html(i.tail),e.length>0){for(var s=0;s<e.length;s++){for(var l="$",d="",c=e[s].productPhoto||"../images/user.jpg",f=0;f<o.length;f++)if(o[f].id==e[s].fobPriceCurrency){l=o[f].value;break}for(var p=0;p<r.length;p++)if(r[p].id==e[s].orderQuantityUnit){d=r[p].value;break}u+='<ul class="items-infos">                                            <li>'+(s+1)+'</li>                                            <li><img src="'+c+'" alt="产品图片" />                                                <p><label>Product Name:</label><span>'+e[s].productName+"</span></p>                                            </li>                                            <li>"+e[s].orderQuantity+d+"</li>                                            <li>"+l+" "+e[s].fobPrice+"</li>                                            <li>"+e[s].remark+'</li>                                            <div class="clear"></div>                                        </ul>'}n.find(".items-title").after(u),n.find(".items-infos img").error(function(){$(this).prop("src","../images/user.jpg")}),n.find(".items-infos img").load(function(){for(var t=$(".items-infos"),i=t.children("li"),e=[],n=0;n<t.length;n++)e.push(t.eq(n).children("li").eq(1).height());e.sort(function(t,i){return i-t});for(var o=0;o<i.length;o++)i.eq(o).css("height",e[0])})}}})},toExport:function(){$.ajax({url:Base.sitUrl+"/api/export/v1/quotation",type:"POST",data:{id:e},dataType:"json",complete:function(t){parent.location.href=Base.sitUrl+"/api/export/v1/quotation?id="+e}})},getUnitGroup:function(t){$.ajax({url:Base.sitUrl+"/api/sys/v1/sys/dictionary/get",data:{group:t},type:"POST",dataType:"json",success:function(i){if(!i.success)return void $.unLogin(i);var e=i.data;e.length>0&&("currency"==t?a.unit.price=e:"unit"==t&&(a.unit.quantity=e))}})}};$("#btn-email").on("click",function(){var i=e;t.showTab(Base.url+"/html/pop-email-new.html?showType=right&modelType=100&ids="+i+"&v="+window.ver,"新建邮件")}),$.when(a.getUnitGroup("currency")).then(a.getUnitGroup("unit")).then(a.getQuoInfoById(e))})});