$(document).ready(function() {
 var e = "",
  a = "",
  n = "",
  t = "",
  i = "",
  r = "",
  o = "",
  l = "",
  d = "",
  s = "http://uclafund.ucla.edu/your-ucla/",
  c = document.getElementById("giveNowAmount");
 c.value = 20;
 var u = document.getElementById("inpOtherAmount");
 u.value = null;
 var h = document.getElementById("value01-span"),
  m = document.getElementById("value02-span");
 $(".cat-wrapper").click(function() {
  $(this).hasClass("selected") && location.reload(), "" === n && (e = "<i class='fa-li fa " + $(this).data("icon-class") + "'></i>" + $(this).data("fund-name"), n = $(this).data("fund-id"), o = $(this).data("fund-color"), $("#cat01-wrapper").html($(this).html())), $(this).siblings().hasClass("selected") && (a = "<i class='fa-li fa " + $(this).data("icon-class") + "'></i>" + $(this).data("fund-name"), t = $(this).data("fund-id"), l = $(this).data("fund-color"), $("#cat02-wrapper").html($(this).html())), $(this).addClass("selected"), 2 === $(".selected").length && (document.body.scrollTop = document.documentElement.scrollTop = 0, d = s + "img/share/" + n + "-" + t + ".jpg", $("#header").fadeOut(function() {
   $("#header img").attr("src", d), $("#header img").on("error", function() {
    d = s + "img/share/" + t + "-" + n + ".jpg", $("#header img").attr("src", d)
   }), $("#header-h1").hide(), $("#header").fadeIn()
  }), $("#share-img").attr("src", d), $("#share-img").on("error", function() {
   d = s + "img/share/" + t + "-" + n + ".jpg", $("#share-img").attr("src", d)
  }), $("#share-img").css("opacity", 0), setTimeout(function() {
   $("#share-img").fadeTo("slow", 1), $("#spinner").hide()
  }, 1500), $("#fund01-label").html(e).css("color", o), $("#fund02-label").html(a).css("color", l), $(".clearSelectionsBtn").fadeIn(), $("#spinner").show(), $("#categories-row").fadeOut(), $("#results").show(), $(".incentive").show(), $(".fb-share-btn").click(function(e) {
   e.preventDefault();
   var a = "https://www.facebook.com/dialog/feed?app_id=847462862016371&caption=UCLA Fund&picture=" + d + "&description= Bruins are more than just brilliant scholars—they are fiercely driven by a diversity of passions. What passions fuel your Bruin pride?&link=http://uclafund.ucla.edu/your-ucla/&redirect_uri=http://uclafund.ucla.edu/your-ucla/";
   window.open(a, "_blank")
  }))
 }), $(".clearSelectionsBtn").click(function() {
  $(".incentive").hide(), $(".selected").removeClass("selected fund02 fund01"), $("#cat01-wrapper").html(""), $("#cat02-wrapper").html(""), d = "", fund01 = "", fund02 = "", n = "", t = "", $(h).html("0"), $(m).html("0"), $(c).val(""), $("#fund01-label").css("color", "#0054a6"), $("#fund02-label").css("color", "#0054a6"), c.value = 20, f.noUiSlider.set(50), $("#radioAmt1").prop("checked", !0), u.value = "", $(".clearSelectionsBtn").fadeOut(), $("#header").slideDown(), $("#categories-row").slideDown(), $("#results").slideUp(), $("#header").fadeOut(function() {
   $("#header img").attr("src", "img/2015header.jpg"), $("#header-h1").show(), $("#header").fadeIn()
  })
 }), $('input:radio[name="radioAmt"]').change(function() {
  c.value = $(this).val(), m.innerHTML = c.value * f.noUiSlider.get() / 100, h.innerHTML = c.value * Math.abs(f.noUiSlider.get() - 100) / 100
 }), $("#radioAmtOther").change(function() {
  $(u).focus()
 }), $("#inpOtherAmount").focus(function() {
  $("#radioAmtOther").prop("checked", !0)
 }), $("#radioAmt1").click(function() {
  $(u).val("")
 }), $("#radioAmt2").click(function() {
  $(u).val("")
 });
 var f = document.getElementById("slider");
 noUiSlider.create(f, {
  start: 50,
  step: 25,
  connect: !1,
  range: {
   min: 0,
   max: 100
  },
  pips: {
   mode: "values",
   values: [0, 25, 50, 75, 100],
   density: 4,
   stepped: !0
  }
 }), $(".noUi-value").each(function() {
  switch ($(this).html()) {
   case "0":
    $(this).html("");
    break;
   case "25":
    $(this).html("");
    break;
   case "50":
    $(this).html("");
    break;
   case "75":
    $(this).html("");
    break;
   case "100":
    $(this).html("");
    break;
   default:
    return
  }
 }), u.addEventListener("keyup", function() {
  c.value = u.value, m.innerHTML = u.value * f.noUiSlider.get() / 100, h.innerHTML = u.value * Math.abs(f.noUiSlider.get() - 100) / 100
 }), u.addEventListener("blur", function() {
  $(u).val() < 10 && ($(u).val(10), c.value = u.value), h.innerHTML = u.value * f.noUiSlider.get() / 100, m.innerHTML = u.value * Math.abs(f.noUiSlider.get() - 100) / 100
 }), f.noUiSlider.on("update", function() {
  m.innerHTML = c.value * f.noUiSlider.get() / 100, h.innerHTML = c.value * Math.abs(f.noUiSlider.get() - 100) / 100
 }), $(".noUi-handle").mousedown(function() {
  $(u).blur()
 }), $("#giveNowBtn").click(function(e) {
  e.preventDefault();
  var a = "http://giving.ucla.edu/Campaign/Donate.aspx?&SiteNum=790",
   i = "",
   r = "",
   o = a,
   l = "",
   d = "",
   s = "",
   c = "",
   u = "",
   f = "",
   p = "",
   v = $.deparam.querystring();
   i = v.DonorID || v.DonorId || v.Donorid || v.donorID || v.donorId || v.donorid || v.id || v.ID, r = v.LName || v.Lname || v.lname || v.lName || v.LNAME, l = v.SCode, s = v.Code, d = v.Finder, c = n, u = h.innerHTML, f = t, p = m.innerHTML, o = $.param.querystring(o, {
   LName: r,
   DonorID: i,
   Fund: c,
   Amount: u,
   F2: f,
   A2: p,
   SCode: l,
   Finder: d,
   Code: s
  }), window.open(o, "_blank")
 });
 var p = function(e) {
  if ("" == e) return {};
  for (var a = {}, n = 0; n < e.length; ++n) {
   var t = e[n].split("=");
   2 == t.length && (a[t[0]] = decodeURIComponent(t[1].replace(/\+/g, " ")))
  }
  return a
 }(window.location.search.substr(1).split("&"));
 "undefined" != typeof p.fname && $("span.person").html(p.fname + "!")
});