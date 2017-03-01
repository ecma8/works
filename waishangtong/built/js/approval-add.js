require(["common"],function(){require(["maintab","angular","ZeroClipboard","ueditorLang","blockUI","jqform","ztree"],function(e,t){e.init();var o=angular.module("approvalAddModule",[]);o.config(["$httpProvider",function(e){e.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",e.defaults.transformRequest.unshift(function(e,t){var o,a=[];for(o in e)e.hasOwnProperty(o)&&a.push(encodeURIComponent(o)+"="+encodeURIComponent(e[o]));return a.join("&")})}]),o.controller("approvalAdd",["$scope","$http",function(e,t){function o(){var o={keyword:""};t({method:"get",url:Base.sitUrl+"/api/org/v1/org/principal/list",params:o}).success(function(t){if($.UnblockUI(),!t.success)return void $.Alert(t.message);var o=t.data;o.length>0&&(e.approverList=r(o),e.fullapproverList=e.approverList)})}function a(o){e.approvalBusinessLoadCondition.type=e.postData.bizType,e.approvalBusinessLoadCondition.name=o;var r=e.approvalBusinessLoadCondition;t({method:"get",url:Base.sitUrl+"/api/export/v1/list",params:r}).success(function(t){if($.UnblockUI(),!t.success)return void $.Alert(t.message);var r=t.data,p=r.totalItem,s=Math.ceil(p/e.approvalBusinessLoadCondition.pageSize);switch($.Page({total:p,_class:".page",nowNum:e.approvalBusinessLoadCondition.currentPage,allNum:s,callback:function(t,r){e.approvalBusinessLoadCondition.currentPage=t,a(o)}}),e.approvalBusinessLoadCondition.type){case 1:break;case 2:e.piResult=r;break;case 3:e.quotationResult=r;break;case 4:e.orderResult=r}})}function r(e){for(var t=0;t<e.length;t++)e[t].name.length>0&&(escape(e[t].name).indexOf("%u")<0?e[t].shortName=e[t].name.substring(0,2).toUpperCase():e[t].shortName=e[t].name.substring(0,1));return e}e.hasApprover=!1,e.selectedApprovers=[],e.approverList=[],e.fullapproverList=[],e.isShowAddApproversPopup=!1,e.approvalBusinessLoadCondition={name:"",type:0,currentPage:1,pageSize:20},e.piResult={currentPage:0},e.quotationResult={currentPage:0},e.orderResult={currentPage:0},e.approvalBusinessPopupOpend=!1,e.postData={subject:"",bizType:0,bizId:0,bizName:"",status:1,remark:"",approvalApproverEnters:[],approvalAttachmentEnters:[]},e.openAddApproversPopup=function(){e.isShowAddApproversPopup=!0,e.fullapproverList.length>0||o()},e.closeAddApproversPopup=function(){e.isShowAddApproversPopup=!1},e.selectedApprover=function(t,o){o.stopPropagation(),e.selectedApprovers.push(t),e.isShowAddApproversPopup=!1,e.hasApprover=e.selectedApprovers.length>0,e.fullapproverList.remove(t)},e.removeSelectedApprover=function(t,o){o.stopPropagation(),e.selectedApprovers.remove(t),e.fullapproverList.push(t)},e.searchApprovers=function(t){if(e.approverList=[],void 0==t||null==t||""==t)return e.approverList=e.fullapproverList,!0;for(var o=0;o<e.fullapproverList.length;o++)e.fullapproverList[o].name.indexOf(t)>-1&&e.approverList.push(e.fullapproverList[o])},e.removeApprovalBusiness=function(){e.postData.bizType=0,e.postData.bizId=0,e.postData.bizName=""},e.addAttachment=function(){$("#up-files").click()},e.removeAttachment=function(t,o){e.postData.approvalAttachmentEnters.remove(t)},e.openAddApprovalBusinessPopup=function(t){e.approvalBusinessLoadCondition.currentPage=1,e.approvalBusinessPopupOpend=!0,e.postData.bizType=t,a("")},e.closeAddApprovalBusinessPopup=function(){e.postData.bizType=0,e.approvalBusinessLoadCondition={name:"",type:0,currentPage:1,pageSize:20},e.pi=[],e.quotation=[],e.order=[]},e.searApprovalBusiness=function(e){a(e)},e.saveApproval=function(){if(""==e.postData.subject)return void $.Alert("请填写审批主题");if(0==e.hasApprover)return void $.Alert("请添加审批人");if(""==$("#added-files .no-active").html())return void $.Alert("请选择审批对象");for(var o=0;o<e.selectedApprovers.length;o++)e.postData.approvalApproverEnters.push({userId:e.selectedApprovers[o].id});4==e.postData.bizType?e.postData.bizType=3:2==e.postData.bizType?e.postData.bizType=2:$(".add-quotation").attr("data-id")&&(e.postData.bizType=1);var a={data:angular.toJson(e.postData)};t({method:"post",url:Base.sitUrl+"/api/approval/v1/add",data:a}).success(function(e){return $.UnblockUI(),e.success?($.DestroyPopInPop(),void parent.location.reload()):void $.Alert(e.message)})},e.changeStyle=function(t){var o=t.target;$(o).parents(".modelDwon").find("div.radio").find("span.checked").removeClass("checked"),$(o).parent().addClass("checked"),e.postData.bizId=Number($(o).val()),e.postData.bizName=$(o).parent().parent().next().text()},e.choiceAttachment=function(t){for(var o=t.files,a=!0,r=0;r<o.length;r++){var p=Math.round(o[r].size/1024*100)/100/1024;if(p>20){$.Alert("上传附件需小于20MB"),a=!1;break}}a&&$("#form_file").ajaxForm({url:Base.sitUrl+"/api/file/upload",beforeSend:function(){$.BlockUI()},complete:function(){$.UnblockUI()},success:function(t){if(!t.success)return void $.unLogin(t);for(var a=t.data.split(","),r=0;r<o.length;r++)e.postData.approvalAttachmentEnters.push({name:o[r].name,url:a[r],size:o[r].size});e.$apply()}}).submit()}}]),angular.bootstrap(document.body,["approvalAddModule"]);window.ZeroClipboard=t;$.GetQueryString("id"),$.GetQueryString("type"),$.GetQueryString("typeCloud"),$.GetQueryString("typeTask"),$.GetQueryString("emailTask"),$.GetQueryString("modelType"),$.GetQueryString("name"),parseInt($.GetQueryString("ids"));$(".downs").on("click",".dropdowns ul>li",function(e){$.EventFn(e),$(this).hasClass("active")||$(this).addClass("active")}),$("#added-files").on("click",".removeLi",function(){$(this).parents("li").remove()}),$("#added-appendix").on("click",".removeLi",function(){$(this).parents("li").remove()}),$(".salesman").on("click",".remove_sales",function(){$(this).parent().remove()})})});