function run(e,t,n){let r='<div class="alert alert-'+t+'">'+n+"</div>";$(e).html(r).slideDown(300)}!function(e){e.fn.glitch=function(t){return this.each((function(n,r){let a=e.extend({chars:"!<>-_\\/[]{}—=+*^?#________",charTime:10,finalText:void 0,done:function(){console.log("done!")}},t),o=(e.Deferred(),(r=e(r)).text(),new(function(){let t={};function n(e,n){void 0===n&&(t.chars=a.chars),t.element=e,t.originalText=a.finalText||e.text(),t.scrambledText=function(){let e=[];for(var n=0;n<t.originalText.length;n++)e.push(o());return e}()}function o(){return t.chars[Math.floor(Math.random()*t.chars.length)]}function s(e,t,n){return t>e.length-1?e:e.substr(0,t)+n+e.substr(t+1)}function i(n){let r=e.Deferred(),i=Math.floor(40*Math.random())+10,u=Math.floor(2*Math.random())+a.charTime,c=setInterval((function(){0===u?(clearInterval(c),r.resolve(),t.element.text(s(t.element.text(),n,t.originalText.charAt(n)))):(t.element.text(s(t.element.text(),n,o())),u--)}),i);return r.promise()}return n.prototype.getScrambledText=function(){return t.scrambledText.join("")},n.prototype.animate=function(){let t=e.Deferred(),n=[];for(var a=0;a<r.text().length;a++)n.push(i(a));return Promise.all(n).then((function(){t.resolve()})),t.promise()},n}())(r));r.text(o.getScrambledText()),o.animate().then((function(){a.done(r)}))}))}}(jQuery),$("span#header").glitch({charTime:60}),$("span#premium").click((function(){tod.warning({status:"Caution",message:"This feature is only for premium user",align:"topcenter"})})),$("span#change").click((function(){$("input#newkey").slideDown(),$("span#change").slideUp()})),$(document).ready((function(){$("#app-change-apikey").submit((function(e){const t=$("#email").val(),n=$("#newkey").val();return t&&n?n.length<6||n.length>10?tod.danger({status:"Error",message:"Apikey minimum 6 - 10 characters",align:"topcenter"}):/^[A-Za-z0-9]+$/.test(n)?(e.preventDefault(),$(this).ajaxSubmit({url:"/action/changekey",beforeSubmit:function(){},success:function(e){if(!e.status)return tod.danger({status:"Error",message:e.msg,align:"topcenter"});tod.success({status:"Success",message:e.msg,align:"topcenter"}),$("#isKey").html(n),$("#newkey").slideUp(300),$("#change").slideDown(300)},resetForm:!1})):tod.danger({status:"Error",message:"Apikey must be letters and numbers",align:"topcenter"}):tod.danger({status:"Error",message:"Enter a new apikey",align:"topcenter"}),!1}))})),$(document).ready((function(){$("#app-check-key").submit((function(e){return $("#apikey").val()?(e.preventDefault(),$(this).ajaxSubmit({url:"/action/checkkey",beforeSubmit:function(){$("#keyNotif").slideUp()},success:function(e){if(!e.status)return tod.danger({status:"Error",message:e.msg,align:"topcenter"});run("#keyNotif","success","Request Limit : [ "+e.limit+" / "+e.total+" ]")},resetForm:!1})):tod.danger({status:"Error",message:"Enter your apikey",align:"topcenter"}),!1}))})),$(document).ready((function(){$("#app-claim").submit((function(e){return $("#email").val()&&$("#referral").val()?(e.preventDefault(),$(this).ajaxSubmit({url:"/action/claim",beforeSubmit:function(){},success:function(e){if(!e.status)return tod.danger({status:"Error",message:e.msg,align:"topcenter"});window.location="/panel"},resetForm:!1})):tod.danger({status:"Error",message:"Enter a referral code",align:"topcenter"}),!1}))})),$(document).ready((function(){$("#app-modify").submit((function(e){return $("#email").val()&&$("#action").val()?(e.preventDefault(),$(this).ajaxSubmit({url:"/action/modify",beforeSubmit:function(){},success:function(e){if(!e.status)return tod.danger({status:"Error",message:e.msg,align:"topcenter"});window.location="/panel/users"},resetForm:!1})):tod.danger({status:"Error",message:"Choose action",align:"topcenter"}),!1}))})),$(document).ready((function(){$("#app-upgrade").submit((function(e){return $("#email").val()&&$("#paket").val()&&$("#waktu").val()?(e.preventDefault(),$(this).ajaxSubmit({url:"/action/upgrade",beforeSubmit:function(){$("#upgradeNotif").slideUp()},success:function(e){if(!e.status)return run("#upgradeNotif","danger",e.msg);run("#upgradeNotif","success",e.msg)},resetForm:!1})):tod.danger({status:"Error",message:"Complete the forms",align:"topcenter"}),!1}))})),$(document).ready((function(){$("#app-log").submit((function(e){return $("#todo").val()&&$("#content").val()?(e.preventDefault(),$(this).ajaxSubmit({url:"/action/log",beforeSubmit:function(){$("#logNotif").slideUp()},success:function(e){if(!e.status)return run("#logNotif","danger",e.msg);run("#logNotif","success",e.msg)},resetForm:!0})):tod.danger({status:"Error",message:"Complete the forms",align:"topcenter"}),!1}))})),$(document).ready((function(){$("#app-exchange").submit((function(e){return $("#email").val()&&$("#price").val()?(e.preventDefault(),$(this).ajaxSubmit({url:"/action/exchange",beforeSubmit:function(){$("#exchNotif").slideUp()},success:function(e){if(!e.status)return run("#exchNotif","danger",e.msg);run("#exchNotif","success",e.msg),$("#balance").html(e.balance)},resetForm:!0})):tod.danger({status:"Error",message:"Complete the forms",align:"topcenter"}),!1}))})),$(document).ready((function(){$("#app-change-log").submit((function(e){return $("#todo").val()&&$("#content").val()&&$("#id").val()?(e.preventDefault(),$(this).ajaxSubmit({url:"/action/changelog",beforeSubmit:function(){$("#logNotif").slideUp()},success:function(e){if(!e.status)return run("#logNotif","danger",e.msg);run("#logNotif","success",e.msg)},resetForm:!0})):tod.danger({status:"Error",message:"Complete the forms",align:"topcenter"}),!1}))}));