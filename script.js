
function findpier(){

  const val4 ="please visit pier one";

  const checkboxes = Array.from(document.querySelectorAll('.box:checked'));

   checkboxes.forEach((checkbox, i)=>{
     const val=checkbox.value;
     if (val == 'val4'){
       document.getElementById('sightResult').innerHTML=val4;
     }
   })
}






function myMap() {
var mapProp= {
  center:new google.maps.LatLng(51.508742,-0.120850),
  zoom:5,
};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
