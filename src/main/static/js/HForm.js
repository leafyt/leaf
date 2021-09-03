function paramString2obj(serializedParams){function evalThem(str){var attributeName=str.split("=")[0],attributeValue=str.split("=")[1];if(!attributeValue)return;var array=attributeName.split(".");for(var i=1;i<array.length;i++){var tmpArray=Array();tmpArray.push("obj");for(var j=0;j<i;j++)tmpArray.push(array[j]);var evalString=tmpArray.join(".");eval(evalString)||eval(evalString+"={};")}eval("obj."+attributeName+"='"+attributeValue+"';")}var obj={},properties=serializedParams.split("&");for(var i=0;i<properties.length;i++)evalThem(properties[i]);return obj}function G_JSON_POST(e,t,n,r){$.ajax({type:"POST",url:e,data:t,contentType:"application/json; charset=utf-8",dataType:"json",success:function(e){n(e)},error:function(e){r(e)}})}function C_TIP(e,t,n,r){$.trim(n)==""&&(n=3e3),$.trim(r)==""&&(r="success"),$.omMessageTip.show({type:r,title:e,content:t,timeout:n})}function bindTip(e,t){var n=$(e),r=n.parent();if(!r.attr("f__error")){var i=$('<i f__error="true" class="c-f-error"></i>').appendTo(r);i.append(n),r.hasClass("om-combo")&&i.append($(".om-combo-trigger",r)),r=i}else r.addClass("c-f-error");n.hover(function(){if(r.hasClass("c-f-error")){var e=$("<span>",{"class":"c-f-error-tip",style:"text-align:left;"}).appendTo(r);e.html(t).show(),n.addClass("c_focus")}},function(){r.hasClass("c-f-error")&&($(".c-f-error-tip",r).remove(),n.removeClass("c_focus"))})}$.fn.form2json=function(){var e=this.serialize(),t=paramString2obj(e),n=decodeURIComponent(JSON.stringify(t));return $.parseJSON(n)},$.fn.gridValidate=function(e){var t=!0,n=[],r=$(this);return $.each(e,function(e,t){t.name&&t.editor&&t.editor.rules&&n.push(t.name)}),n.length==0?!1:($.each(r.omGrid("getData").rows,function(e,i){for(var s=0;s<n.length;s++){var o=i[n[s]];if($.trim(o)=="")return r.omGrid("editRow",e),t=!1,!1}}),t)};var RE_TEL=/^((\+?0?86\-?)|(\+?0{0,2}852\-?)|(\+?0{0,2}886\-?))?((0{0,2}[1-9][0-9]{2}\-?)|(0?[12][0-9]\-?))?[1-9][0-9]{5,7}(\-[0-9]{1,5}){0,3}$/,RE_MOB=/^(\+?0?86)?((0?1[3458][0-9]{9}))$/,RE_EMAIL=/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]{2,4}$/,RE_INT=/^[1-9][0-9]*$/,RE_INT_FLOAT=/^(([1-9][0-9]*)|0)(\.[0-9]+)?$/,G_VALIDATION_RULES={month:{validator:function(e){return/^(19\d{2})|(20\d{2})-([0][1-9]|[1][012])$/i.test(e)},message:"格式不正确,请输入1900-01开始到2099-12,正确格式:2011-01"},minLength:{validator:function(e,t){return e.length>=t[0]},message:"最少输入 {0} 个字符。"},length:{validator:function(e,t){var n=$.trim(e).length;return n>=t[0]&&n<=t[1]},message:"输入内容长度必须介于{0}和{1}之间."},phone:{validator:function(e){return!0},message:"格式不正确,请使用下面格式:020-88888888"},mobile:{validator:function(e){return!0},message:"手机号码格式不正确"},phoneOrMobile:{validator:function(e){return RE_MOB.test(e)||RE_TEL.test(e)},message:"电话或手机号码格式不正确!"},idcard:{validator:function(e){return/^\d{15}(\d{2}[A-Za-z0-9])?$/i.test(e)},message:"身份证号码格式不正确"},integer:{validator:function(e){return RE_INT.test(e)},message:"请输入整数"},intOrFloat:{validator:function(e){return RE_INT_FLOAT.test(e)},message:"请输入整数或小数，并确保格式正确"},qq:{validator:function(e){return/^[1-9]\d{4,9}$/i.test(e)},message:"QQ号码格式不正确"},chinese:{validator:function(e){return/^[\u0391-\uFFE5]+$/i.test(e)},message:"请输入中文"},english:{validator:function(e){return/^[A-Za-z]+$/i.test(e)},message:"请输入英文"},faxno:{validator:function(e){return/^((\(\d{2,3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}(\-\d{1,4})?$/i.test(e)},message:"传真号码不正确"},zip:{validator:function(e){return!0},message:"邮政编码格式不正确"},ip:{validator:function(e){return/d+.d+.d+.d+/i.test(e)},message:"IP地址格式不正确"},name:{validator:function(e){return/^[\u0391-\uFFE5]+$/i.test(e)|/^\w+[\w\s]+\w+$/i.test(e)},message:"请输入姓名"},yesno:{validator:function(e){return/^((\u662f)|(\u5426))+$/i.test(e)},message:"只能够输入是或否"},email:{validator:function(e){return RE_EMAIL.test(e)},message:"请输入有效的电子邮件账号(例：abc@126.com)"}};!function($){var HForm=function(e,t){this.$el=$(e),this.$opt=t};HForm.prototype={constructor:HForm,widgetBind:function(cfg){var $formEl=this.$el;$(".form-button1",$formEl).attr("type")=="submit"&&$formEl.attr("onsubmit","return false;"),$.each($("input[cb-code],input[cb-url],input[cb-source],input[calendar],input[tip],input[key-for]",$formEl),function(i,cb){var el=$(cb);el.attr("tip")&&window.setTimeout(function(){var e=$("<span>",{style:"position:relative;"}).insertBefore(el);e.append(el);var t=$("<div class='hc_field_tip'>"+el.attr("tip")+"</div>");e.append(t),t.css({position:"absolute",left:3,top:2,color:"#999"}),el.focus(function(){t.hide()}),el.blur(function(){$.trim($(this).val())==""&&t.show()}),t.click(function(){el.focus()}),$.trim(el.val())!=""&&t.hide()},500);if(el.attr("key-for")){var keyFor=el.attr("key-for"),keyType=el.attr("key-type")||"enter",_func=null;$("#"+keyFor,$formEl).length==0&&eval("(_func="+keyFor+")"),el.keydown(function(e){switch(e.keyCode){case 13:keyType=="enter"&&(_func?_func(el):$("#"+keyFor).click())}})}if(el.attr("calendar")){var w=el.width();el.width(w-20);var calCfg={};if(el.attr("timeRange")){var timeOn=el.attr("timeRange"),curDate=new Date,newDate=null;timeOn=="start"?newDate=new Date(curDate.getFullYear(),curDate.getMonth(),curDate.getDate(),0,0,0):timeOn=="end"&&(newDate=new Date(curDate.getFullYear(),curDate.getMonth(),curDate.getDate(),23,59,59)),$.extend(calCfg,{date:newDate})}el.attr("showTime")&&$.extend(calCfg,{showTime:!0}),el.omCalendar(calCfg)}else if(el.attr("cb-code")||el.attr("cb-url")||el.attr("cb-source")){var cbids=el.attr("cb-ids");cbids&&(cbids=","+cbids+",");var w=el.width();el.width(w-20);var _init_combo=function(cfg,dat){var _mergeCfg={};cfg?$.extend(_mergeCfg,cfg,{editable:!1,dataSource:dat,value:el.val()}):$.extend(_mergeCfg,{editable:!1,dataSource:dat,value:el.val()});if(el.attr("onChange")){var _func=eval("_func=("+el.attr("onChange")+")");$.extend(_mergeCfg,{onValueChange:function(e,t,n,r){window.setTimeout(function(){_func(t,n)},10)}})}el.attr("cb-disabled")&&$.extend(_mergeCfg,{disabled:!0}),el.attr("listMaxHeight")&&$.extend(_mergeCfg,{listMaxHeight:el.attr("listMaxHeight")}),el.omCombo(_mergeCfg)};if(el.attr("cb-source")){var dat=eval(el.attr("cb-source"));_init_combo(cfg,dat)}else{var url="";el.attr("cb-code")?url="../common/ui!exec.do?act=getCombo&code="+el.attr("cb-code"):el.attr("cb-url")&&(url=el.attr("cb-url")),G_JSON_GET(url,null,function(e){e&&(cbids&&e&&(e=$.grep(e,function(e,t){return cbids.indexOf(","+e.value+",")!=-1})),cfg&&cfg.optionAll&&(e=$.merge([{text:"--",value:""}],e)),_init_combo(cfg,e))},null,el)}}else if(el.attr("sug-url")){var url=el.attr("sug-url");el.omSuggestion({queryName:"_code",dataSource:G_URL_FMT(url),listMaxHeight:300,method:"POST",preProcess:function(e,t){if(t.status=="success")return t.values}})}else if(el.attr("sug-local")){var local=el.attr("sug-local");eval("(_sug_func="+local+")"),el.omSuggestion({localData:_sug_func(),listMaxHeight:300})}})},form2json:function(){var obj={},fieldEls=this.$el.serializeArray();return $.each($("input[type='checkbox']",this.$el),function(e,t){$(t).attr("checked")||t.name!=""&&fieldEls.push({name:t.name,value:""})}),$.each(fieldEls,function(i,field){var attrName=field.name,attrValue=field.value,__fc=function(){return $.trim(attrValue)};eval("_v = obj['"+attrName+"']=__fc();")}),obj},json2form:function(e){this.$el.json2form({data:e})},validate:function(){var $opt=this.$opt,$el=this.$el;$(".c-f-error",$el).removeClass("c-f-error");var __fieldValid=function(fEl){var fvalid=!0,fv=$.trim(fEl.val()),request=fEl.attr("request"),reg=fEl.attr("validate"),vmsg=fEl.attr("validmsg");if(fEl.attr("cb-code")||fEl.attr("cb-url")){if(fEl.css("display")=="none")return[!0,""];fv=="--"&&(fv="")}if(reg=="request")fvalid=fv!="";else if(reg.substring(0,1)=="/"&&reg.substring(reg.length-1)=="/")reg=reg.substring(1,reg.length-1),reg.substring(0,1)=="^"&&(reg=reg.substring(1)),reg.substring(reg.length-1)=="$"&&(reg=reg.substring(0,reg.length-1)),fvalid=request=="false"&&fv==""||eval("/^"+reg+"$/").test(fv);else{var pm=reg.indexOf("[")!=-1?eval(reg.substring(reg.indexOf("["))):undefined;reg=reg.indexOf("[")!=-1?reg.substring(0,reg.indexOf("[")):reg,G_VALIDATION_RULES[reg]&&(fvalid=request=="false"&&fv==""||G_VALIDATION_RULES[reg].validator(fv,pm),!fvalid&&$.trim(vmsg)==""&&(vmsg=G_VALIDATION_RULES[reg].message.replace(/\{\d\}/g,function(e){var t=e.substring(1,e.length-1);return pm[t]})))}return[fvalid,vmsg]},formValid=!0;return $.each($("[validate]",$el),function(e,t){var n=$(t),r=__fieldValid(n),i=r[0],s=r[1];if(!i){var o=n.parent();if(!o.attr("f__error")){var u=$('<i f__error="true" class="c-f-error"></i>').insertBefore(n);u.append(n),o.hasClass("om-combo")&&u.append($(".om-combo-trigger",o)),o=u}else o.addClass("c-f-error");$.trim(s)==""&&(s="不能为空!"),n.hover(function(){if(o.hasClass("c-f-error")){var e=$("<span>",{"class":"c-f-error-tip",style:"text-align:left;"}).appendTo(o);e.html(s).show(),n.addClass("c_focus")}},function(){o.hasClass("c-f-error")&&$opt.autoHide&&($(".c-f-error-tip",o).remove(),n.removeClass("c_focus"))}),n.blur(function(){var e=__fieldValid(n);e[0]&&o.removeClass("c-f-error")}),formValid=!1}}),formValid}},$.fn.HForm=function(e,t){var n=$(this),r=n.data("HForm"),i=$.extend({},$.fn.HForm.defaults,typeof e=="object"&&e);r||n.data("HForm",r=new HForm(this,i));if(typeof e=="string")return r[e](t);if(typeof e=="object")return n},$.fn.HForm.Constructor=HForm,$.fn.HForm.defaults={autoHide:!0}}(jQuery)