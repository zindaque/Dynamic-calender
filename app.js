
const currentDate=document.querySelector(".current-date");
const months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const dayTag=document.querySelector(".days");
const prevNextIcon=document.querySelectorAll(".icons i");


// getting current date
let date=new Date(),
currYear=date.getFullYear(),
currMonth=date.getMonth();

const renderCalender=()=>{
    let firstDayOfMonth=new Date(currYear,currMonth,1).getDay();
    let lastDateOfMonth=new Date(currYear,currMonth+1,0).getDate();
    let lastDayOfMonth=new Date(currYear,currMonth,lastDateOfMonth).getDay();
    let lastDateOfLastMonth=new Date(currYear,currMonth,0).getDate();
    let liTag='';

    for (let i = firstDayOfMonth; i>0; i--) {
        liTag +=`<li class="inactive">${lastDateOfLastMonth - i + 1}</li>`;
        
    }

    for (let i = 1; i <= lastDateOfMonth; i++) {
        let isToday=i ===date.getDate() && currMonth === new Date().getMonth() && currYear=== new Date().getFullYear() ?"active":"";
             

        liTag +=`<li class="${isToday}">${i}</li>`;
        
    }

    for (let i = lastDayOfMonth; i < 6; i++) {
        liTag +=`<li class="inactive">${i-lastDayOfMonth+ 1}</li>`;
    }



    currentDate.innerText=`${months[currMonth]} ${currYear}`;
    dayTag.innerHTML=liTag;
}
renderCalender();

prevNextIcon.forEach(icon =>{
    icon.addEventListener("click", ()=>{
       const newMonth=icon.id==="prev" ? currMonth-1 : currMonth + 1;
       if(newMonth<0){
        currYear-=1;
        currMonth= 11;
       }else if (newMonth>11){
        currYear+=1;
        currMonth=0;
       }else {
        currMonth=newMonth;
       }



    //    if(currMonth<0 || currMonth>11){
    //     date=new Date(currYear,currMonth, new Date().getDate());
    //     currYear=date.getFullYear();
    //     currMonth=date.getMonth();
    //    }else {
    //     date=new Date();
    //    }
       renderCalender();
    });
});