date= new Date();
document.getElementById('day_date').innerHTML = `${date.getHours()}:${date.getMinutes()}<br>${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`;

document.getElementById("input_val").addEventListener('input', function(){
  let input_value= document.getElementById('input_val').value;
  document.getElementById('country_name_h1').innerHTML= `${input_value}`;
  get_prayer_time(input_value)
})

function get_prayer_time(city_name){
  axios.get(`http://api.aladhan.com/v1/calendarByCity/2017/4?city=${city_name}&country=Egypt&method=2`)
  .then((response)=>{
    let respons=response.data.data;
    for(res of respons){
      document.getElementById('Fajr_time').innerHTML= `${res.timings.Fajr}`
      document.getElementById('sunrise_time').innerHTML= `${res.timings.Sunrise}`
      document.getElementById('duhr_time').innerHTML= `${res.timings.Dhuhr}`
      document.getElementById('asr_time').innerHTML= `${res.timings.Asr}`
      document.getElementById('majrib_time').innerHTML= `${res.timings.Maghrib}`
      document.getElementById('isha_time').innerHTML= `${res.timings.Isha}`
    }
  })
}
get_prayer_time("cairo");
