$(function(){$.fn.smoothScroll=function(){function e(e){return function(t){var n=e.href||$(this).attr("href")||$(this).attr("data-href");if(!n||!n[0]==="#")return;var r=$(n).offset(),i=r?r.top:0;i=Math.max(i-e.offset,0);var s=$("body").scrollTop(),o=e.blend,u=Math.abs(i-s)/(.001*e.speed);u=o*u+(1-o)*e.duration;$("html, body").animate({scrollTop:i},u);e.history&&history.pushState&&history.pushState(null,null,n);var a=$(this).parents(".dropdown-menu").prevAll(".dropdown-toggle");a.length&&a.dropdown("toggle");t.preventDefault()}}var t=0;return function(n){typeof n=="string"&&(n={href:n});typeof n=="object"&&n.jquery&&(n={href:n});var r=$.extend({speed:750,duration:750,href:null,blend:.25,offset:0,history:!0},n);if(r.href&&typeof r.href=="object"&&r.href.jquery){var i=r.href,s=i.attr("id");if(!s){s="scrollId"+ ++t;i.attr("id",s)}r.href="#"+s}return this.each(function(){var t=$(this),n=t.data("scrollSmooth-click");n&&t.unbind("click",n);var i=e(r);t.data("scrollSmooth-click",i);t.click(i)})}}();var e=function(){var e=[],t=null,n=function(){if(!t)if(e.length){var r=e.shift();r();t=window.setTimeout(function(){t=null;n()},250)}else t=null};$(".A-waypointFade").each(function(){var t=$(this),r=t.attr("data-settings").split(";"),i=r[0],s=parseInt(r[1])||750,o=parseInt(r[2])||800,u=!1;t.css({opacity:0}).waypoint(function(){if(!u){u=!0;e.push(function(){t.animate({opacity:1},s)});n()}},{offset:o})})},t=function(){if(window.isIE7orLess){$(".A-counter").animate({opacity:1},750);return}$(".A-counter").each(function(){var e=$(this);e.css({opacity:0});var t=parseFloat(e.attr("data-start")),n=parseFloat(e.attr("data-end")),r=e.attr("data-prefix")||"",i=e.attr("data-waypoint")||null,s=parseInt(e.attr("data-offset"))||200,o=parseInt(e.attr("data-delay"))||0,u=parseInt(e.attr("data-duration"))||2e3,a=(new Date).valueOf()+o,f=function(e){return 1.8*e-.8*e*e},l=function(t,n){e.css({opacity:n});var i=r+_.numberFormat(t,0),s=_.map(i.split(""),function(e){var t=e==","?".3em":".55em";return $("<div/>").text(e).css({display:"inline-block",width:t})});e.html(s)},c=null,h=function(e){var r=(new Date).valueOf(),i=(r-a)/u;e!==undefined&&(i=e);if(i>=1){l(n,1);window.clearInterval(c);c=null}else if(i<.01)l(t,0);else{var s=Math.max(0,Math.round((n-t)*f(i)+t));l(s,f(i))}},p=_.once(function(){_.delay(function(){a=(new Date).valueOf();c=window.setInterval(h,50)},o)});if(i){$(i).mousemove(p);$(i).waypoint(p,{offset:s})}else p();h(0)})},n=_.once(function(){var e=$("#tenm-parent"),t=$("#tenm-mask"),n=$("#tenm-graphic"),r=function(){var r=24,s=Math.min(1100,e.width()),o=Math.floor(400/1100*s/r)*r;s=Math.floor(o*1100/400);e.css({height:o*1.2});n.css({height:o});t.css({height:o});_.each(i,function(e){e.css({width:s})});return s};n.css({"line-height":"1px"});var i=[],s=Math.floor(400/14);for(var o=0;o<s;o++){var u=$("<div/>"),a=$("<img/>").attr("src","img/person-row.png");a.opacity=0;a.y=o;a.attr("id","myimg-"+i.length);a.css({opacity:a.opacity});i.push(a);u.append(a);n.append(u)}$(window).resize(r);var f=r(),l=function(e){var t=r(),n=Math.floor(s*e);for(var o=0;o<i.length;++o){var u=o<=n?1:1/(1+o-n),a=i.length-o-1;i[a].stop().animate({opacity:u},50)}$("#tenm-mask").css({opacity:1})};$(window).on("scroll",function(){var e=.35,n=0,r=$(this).scrollTop(),i=$(window).height(),s=t.offset().top,o=t.outerHeight(),u=r+i/2,a=s+o/2-(u+n),f=1-a/(i*e);f=Math.min(1,Math.max(0,f));l(f)})}),r=_.once(function(e){var t=$("#chancellorsociety"),n=$("#chancellortotal"),r=$("#chancellortotaltext");if(e){var i=1200;t.stop().animate({left:0,width:"71%"},i);n.stop().animate({left:"71%",width:"27%"},i);_.delay(function(){r.stop().animate({opacity:1},250)},i)}else{t.css({left:0,width:"71%"});n.css({left:"71%",width:"27%"});r.css({opacity:1})}}),i=_.once(function(){var e=.95,t=[];$(".A-parallaxBG").each(function(){var e=$(this),n={};n.$elem=e;var r=e.attr("data-parallax").split(";");n.size=_.map(r[0].split("x"),function(e){return parseInt(e)});n.scale=n.size[1]-e.outerHeight();e.css({"background-size":""+n.size[0]+"px "+n.size[1]+"px"});t.push(n)});var n=function(e,t){var n=-t*e.scale;e.$elem.css({"background-position":"center "+n+"px"})};$(window).on("scroll",function(){var r=$(window).scrollTop(),i=$(window).height();_.each(t,function(t){var s=t.$elem.offset().top,o=t.$elem.outerHeight(),u=r+i*.8,a=o/2*(1-e),f=o*(1-e),l=o+f*2,c=(u-(s-f))/l;c=(r+i-(s+o))/i;c=Math.min(1,Math.max(0,c));n(t,c)})})}),s=_.once(function(e){var t=Math.min(Math.floor($("#maps-graphic-column1").width()*.95),350);if(e){var n=Math.floor(t*.85);$(".map-image").css({width:n,height:n}).animate({width:t,height:t,opacity:1},800)}else $(".map-image").css({width:t,height:t,opacity:1})}),o={};o.width=$(window).width();o.small=!0;o.width>460&&(o.medium=!0);o.width>786&&(o.large=!0);o.width>1100&&(o.xlarge=!0);if(o.xlarge){n();i()}else{$("#tenm-parent").hide();$("#tenm-static").show()}if(o.large){$(".navbar").find("a").smoothScroll();t();e();$("#chancellors-graphic").waypoint(function(){r(!0)},{offset:800});$(".map-image").waypoint(function(){s(!0)},{offset:800})}else{$(".A-counter").css("opacity",1);r(!1);s(!1)}$("<img/>").attr("src","img/ucla-1.1.jpg").load(function(){$(this).remove();$("#intro").css("background-image","url(img/ucla-1.1.jpg)");window.isIE7orLess||$(".header").find("h1,p").animate({opacity:1,marginTop:10},800)});$("#thank_you").waypoint(function(){$(".thank, .you").animate({opacity:1,marginLeft:0},1e3)},{offset:700});$(".video-wrapper").fitVids()});var url="myaccount.support.ucla.edu/login/auth/login.aspx?al=Y&lg=Y&action=g&Code=E0614&SiteNum=485",id="",lname="",redirectUrl=url;$(document).ready(function(){var e=$.deparam.querystring(),t=e.DonorID||e.DonorId||e.Donorid||e.donorID||e.donorId||e.donorid;lname=e.LName||e.Lname||e.lname||e.lName||e.LNAME;t!=null&&t.replace(/\s/g,"")!=""&&(redirectUrl=$.param.querystring(url,{LName:lname,DonorID:t}));$(".give-now-btn").attr("href","http://"+redirectUrl)});