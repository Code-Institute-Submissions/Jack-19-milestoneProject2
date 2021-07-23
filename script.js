document.addEventListener("DOMContentLoaded", handler);



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
      






function myMap() {
 
  var mapProp= {
    center:new google.maps.LatLng(51.505751,-0.083742),
    zoom:12,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
const myMarks = [{"lat":51.505751,"lng":-0.083742,"name":"jack"},
                 {"lat":51.505455,"lng":-0.075356,"name":"dave"},
                 {"lat":51.503186,"lng":-0.050903,"name":"rosie"},
                ];
for(let i=0; i<myMarks.length; i++){

  const marker=new google.maps.Marker({
    position: new google.maps.LatLng(myMarks[i].lat, myMarks[i].lng),
    map:map,
    title:myMarks[i].name
  });
};

myMap();