let wrapper=document.querySelector(".wrapper"),wheel=document.querySelector(".wheel"),modal=document.querySelector(".modal");function rotate(){wheel.classList.add("active"),setInterval((()=>{modal.classList.add("active")}),6e3),setInterval((()=>{modal.classList.add("opacity")}),6500)}function adaptationElements(){const e=window.innerWidth/window.innerHeight,t=e>=2.17?"modificate1":e>=1.5?"modificate2":e>1?"modificate3":"modificate4";wrapper.className=`wrapper ${t}`}adaptationElements(),window.addEventListener("resize",adaptationElements);