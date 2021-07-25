
//runs code only when DOM content finished loading
document.addEventListener("DOMContentLoaded", handler);

//find pier function

function findpier(){

  const thBar ="North greenwhich pier, a boat ride from her will give you a brilliant view of the barrier";
  const cutSa ="Greenwhich pier, this pier is located right next to the Cutty Sark";
  const towBr ="Tower pier, this pier is located next to the bridge. Excelent selfie oppurtunity";
  const Belf ="Tower pier, sail past from the Belfast from here";
  const lnBr ="Tower pier, sail underneath the bridge form here";
  const golH ="London bridge pier, located right next to the Golden Hind";
  const shG ="South bank pier, grab a great view from here";
  const melBr ="Southbank pier, sail under this amzaing bridge ";
  const watBr ="Waterloo pier, located next to this bridge";
  const lonbr ="London eye pier, located in front of the eye";
  const biB ="Westminster pier, a short walk from Big ben";
  const wesBr ="Westminster pier, located right next to the bridge";

  

  const checkboxes = Array.from(document.querySelectorAll('.box:checked'));

   checkboxes.forEach((checkbox, i)=>{
     const val=checkbox.value;
     if (val == 'val0'){
       document.getElementById('sightResult').innerHTML=thBar;
      }else if (val == 'val1'){
        document.getElementById('sightResult').innerHTML=cutSa;
      }else if (val == 'val2'){
        document.getElementById('sightResult').innerHTML=towBr;
      }else if (val == 'val3'){
        document.getElementById('sightResult').innerHTML=Belf;
      }else if (val == 'val4'){
       document.getElementById('sightResult').innerHTML=lnBr;
      }else if (val == 'val5'){
       document.getElementById('sightResult').innerHTML=golH;
      }else if (val == 'val6'){
       document.getElementById('sightResult').innerHTML=shG;
      }else if (val === 'val7'){
       document.getElementById('sightResult').innerHTML=melBr;
      }else if (val == 'val8'){
       document.getElementById('sightResult').innerHTML=watBr;
      }else if (val == 'val9'){
       document.getElementById('sightResult').innerHTML=lonbr;
      }else if (val == 'val10'){
       document.getElementById('sightResult').innerHTML=biB;
      }else if (val == 'val11'){
       document.getElementById('sightResult').innerHTML=wesBr;
      }
   });
}
      
//google maps api function, feature with markers and labels

function myMap() {
 
  const london = {lat:51.508742, lng:-0.120850};

  const markers = [
    {lat:51.497309, lng:0.037261, "name":"Thames Barrier"},
    {lat:51.503133, lng:-0.003691, "name":"o2 Arena"},
    {lat:51.482900, lng:-0.009763, "name":"Cutty Sark / Greenwhich"},
    {lat:51.505831, lng:-0.075166, "name":"Tower Bridge"},
    {lat:51.506552, lng:-0.081367, "name":"HMS Belfast"},
    {lat:51.508061, lng:-0.087783, "name":"London Bridge"},
    {lat:51.506899, lng:-0.090315, "name":"Golden Hind"},
    {lat:51.508141, lng:-0.097353, "name":"Shakespeares Globe"},
    {lat:51.509891, lng:-0.098662, "name":"Mellenium Bridge"},
    {lat:51.508288, lng:-0.116622, "name":"Waterloo Bridge"},
    {lat:51.503133, lng:-0.119884, "name":"London Eye"},
    {lat:51.500689, lng:-0.124605, "name":"Big Ben"},
    {lat:51.500856, lng:-0.121772, "name":"Westminster Bridge"},
  ];

  var mapProp = {
    center:london,
    zoom:12,
  };

  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

  for(i=0;i<markers.length;i++){
    const marker = new google.maps.Marker({
      position:{lat: markers[i].lat, lng: markers[i].lng},
      map: map,
      title:markers[i].name
    });
  };
}
window.onload = (event)=>{
myMap();
};