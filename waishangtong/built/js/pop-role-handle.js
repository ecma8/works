require(["common"],function(){require(["maintab","validationLang"],function(e){function t(e){var t=$('[name="name"]'),n=$('[name="description"]');e.name&&t.val(e.name),e.description&&n.text(e.description),a.on("click",function(i){i.preventDefault();var a=$.trim(t.val()),r=$.trim(n.text());if(a!=e.name&&r!=e.description)return e.name=$.trim(t.val()),e.description=$.trim(n.text()),s.valid()&&$.AjaxFun({data:{_mt:"userSecurity_editRole",roleEntity:JSON.stringify(e)},success:function(e){e.success?parent.mainTab.destroy():$.Alert(e.message)}}),!1})}var n=$("#saveRole"),i=$("#cancelAddRole"),a=$("#editSaveRole"),r=$("#editCancelAddRole"),o=$.GetQueryString("roleid"),c=$("#addRoleForm"),s=$("#editRoleForm");c.validate(),s.validate(),i.on("click",function(){$.DestroyPopInPop()}),r.on("click",function(){$.DestroyPopInPop()}),null!=o&&$.AjaxFun({data:{_mt:"userSecurity_getRoles"},success:function(e){$.each(e.data,function(e,n){if(n.id==o)return void t(n)})}}),n.on("click",function(){if(c.valid()){var e=$.trim($('[name="name"]').val()),t=$.trim($('[name="description"]').text());$.AjaxFun({data:{_mt:"userSecurity_addRole",name:e,description:t},success:function(e){e.success?$.Alert("添加成功！","",function(){parent.location.href=parent.location.href}):$.Alert(e.message)}})}return!1})})});