function loadStyle(src){
  var link = document.createElement('link'); link.rel = 'stylesheet'; link.type = 'text/css'; link.href = src; document.head.appendChild(link);
}

window.twdLayer = window.twdLayer || [];

window.twdLayer.push({
  element: "#header-desktop-search-input",
  container: "#js-page-view .tweakwise-container",
  endpoint: "https://navigator-dynamic.tweakwise.com/generic/search/" + window.twKey,
  debug: false,
  products: {
    mobile: 2,
    tablet: 3,
    desktop: 5
  },
  components: {
    facetCollectionFooter: true
  }
});
window.twdLayer.push({
  element: "#header-mobile-search-input", 
  connect: "#header-desktop-search-input" 
});


var ws = document.createElement("script");
ws.type = "text/javascript";
ws.async = !0;
ws.src = "https://navigator-dynamic.tweakwise.com/22/js/jq-search?v="+window.twKey;
ws.onload = function(){
  
  $body = $(document.body);
  $body.on('click.twn', '.twn__facets-filter', function(e) {
    $body.toggleClass('twn-has-facets-open');
  });
  $body.on('click.twn', '.twn__product', function(e) {
    window.closeTweakWise();    
  });
  $body.on('click.twn', '.twn__header-close', function(e) {
    $('input[name=q]').val('').trigger('change').parent().removeClass('dynamic-label--active');
    $('input[name=s]').val('').trigger('change').parent().removeClass('dynamic-label--active');
  });
  $body.on('submit.twn', '.sticky__search', function(e) {
    e.preventDefault();
    return false;
  });
}
var s = document.getElementsByTagName("script")[0];
s.parentNode.insertBefore(ws, s);

window.closeTweakWise = function() {
  var sf = document.getElementById('header-desktop-search-input');
  if(sf && sf !== null && typeof sf.__twd !== 'undefined') {
    !!sf.__twd.visible && sf.__twd.hide();
  }
};

loadStyle('https://navigator-dynamic.tweakwise.com/22/css/search?v='+window.twKey);
loadStyle(BIA.THEME_URL+'/build/tweakwise/tws.css');
