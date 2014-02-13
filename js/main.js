$('.header__slide').cycle({
  fx: 'scrollHorz',
  timeout: 6000,
  speed: 600
});

/* prototype */
var ArrayProto = Array.prototype, 
    ObjProto = Object.prototype, 
    FuncProto = Function.prototype;
/* native */
var slice = ArrayProto.slice;
/* extend */
var overrideProperties = function(obj) {
  var override = slice.call(arguments, 1)[0];
  for (var prop in obj) {
    obj[prop] = override[prop] || obj[prop];
  }
  return obj;
};
var scrollPoint = function(options) {
  var setting = overrideProperties({
    context: window,
    enable: true,
    offset: 0,
    scrollOrientation:'scrollY', 
    triggerOnce: false,
    handler: function() {}
  }, options || {});
  setting.context.onscroll = function() {
    if (setting.offset <= setting.context[setting.scrollOrientation]) {
      if (setting.enable) setting.handler();
      setting.enable = false;
    } else if (!setting.triggerOnce) {
      if (!setting.enable) setting.handler();
      setting.enable = true;
    }
  };
};
scrollPoint({
  offset: window.innerHeight || window.clientHeight,
  handler: function() {
    document.querySelector('.sidebar').classList.toggle('sidebar--active');
  }
});