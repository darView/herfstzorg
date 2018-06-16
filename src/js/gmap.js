function initMap()
{
    var location = {lat: 52.349220, lng: 4.789619};
    var map      = new google.maps.Map(
        document.getElementById('map'), {zoom: 10, center: location});
    var marker   = new google.maps.Marker({position: location, map: map});
}
