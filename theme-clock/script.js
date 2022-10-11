const hourEl=document.querySelector('.hour')
const minuteEl=document.querySelector('.minute')
const secondEl=document.querySelector('.second')
const timeEl=document.querySelector('.time')
const dateEl=document.querySelector('.date')
const toggleBtn=document.querySelector('.toggle')

 const days=['Pazar','Pazartesi','Salı','Çarşamba','Perşembe','Cuma','Cumartesi'];
 const months=['Ocak','Şubat','Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık'];

 toggleBtn.addEventListener('click',(e)=>{
    const html= document.querySelector('html')
   if(html.classList.contains('dark')){
       html.classList.remove('dark')
       e.target.innerText='Koyu Tema'
   }else{
       html.classList.add('dark')
       e.target.innerText='Açık Tema'
   }

})
function setTime(){
const time= new Date();
const month= time.getMonth()
const day= time.getDay()
const date= time.getDate()
const hours= time.getHours()
const minutes= time.getMinutes()
const seconds= time.getSeconds()

hourEl.style.transform=`translate(-50%,-100%) rotate(${scale(hours,0,11,0,360)}deg)`
minuteEl.style.transform=`translate(-50%,-100%) rotate(${scale(minutes,0,59,0,360)}deg)`
secondEl.style.transform=`translate(-50%,-100%) rotate(${scale(seconds,0,59,0,360)}deg)`

timeEl.innerHTML=`${hours<10? `0${hours}`:hours}:${minutes<10? `0${minutes}`:minutes} `
dateEl.innerHTML=`${days[day]} ${months[month]} <span class="circle">${date}</span>`
}

 // StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
  setTime()
  setInterval(setTime,1000)