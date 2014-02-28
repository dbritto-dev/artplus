/* help functions */
var extend = function(out) {
  out = out || {};
  for (var i = 1; i < arguments.length; i++) {
    if (!arguments[i])
      continue;
    for (var key in arguments[i]) {
      if (arguments[i].hasOwnProperty(key))
        out[key] = arguments[i][key];
    }
  }
  return out;
};
/* aside menu */
var scrollPoint = function(options) {
  var setting = extend({
    context: window,
    enable: true,
    offset: 0,
    scrollOrientation:'scrollY', 
    triggerOnce: false,
    handler: function() {}
  }, options || {});
  setting.context.onscroll = function() {
    if (setting.offset <= setting.context[ setting.scrollOrientation ]) {
      if ( setting.enable ) setting.handler();
      setting.enable = false;
    } else if ( !setting.triggerOnce ) {
      if ( !setting.enable ) setting.handler();
      setting.enable = true;
    }
  };
};
scrollPoint({
  offset: window.innerHeight || window.clientHeight,
  handler: function() {
    var _sidebar = document.querySelector('.sidebar'),
        _header = document.querySelector('.header');
        _articles = document.querySelector('.articles'),
        _footer = document.querySelector('.footer');
    _sidebar.classList.toggle('sidebar--active');
    _header.classList.toggle('header--inactive');
    _articles.classList.toggle('articles--active');
    _footer.classList.toggle('footer--active');
  }
});
/*  slider */
$('.header__slide').cycle({
  fx: 'scrollHorz',
  timeout: 6000,
  speed: 600
});