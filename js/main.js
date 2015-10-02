//main.js (New MBC website)

$(document).ready(function(){
    $('a[href*=#]').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
      && location.hostname == this.hostname) {
        var $target = $(this.hash);
        $target = $target.length && $target
        || $('[name=' + this.hash.slice(1) +']');
        if ($target.length) {
          var targetOffset = $target.offset().top;
          $('html,body')
          .animate({scrollTop: targetOffset}, 1000);
         return false;
        }
      }
    });
});

(function init_map() {
  var var_location = new google.maps.LatLng(32.043352, -84.390862);

  var var_mapoptions = {
    center: var_location,
    zoom: 14
  };

  var var_marker = new google.maps.Marker({
      position: var_location,
      map: var_map,
      title:"Maranatha BC"});

  var var_map = new google.maps.Map(document.getElementById("map-container"),
      var_mapoptions);

  var_marker.setMap(var_map);	

}());

google.maps.event.addDomListener(window, 'load', init_map);