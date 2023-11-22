 let buttons = document.querySelector(".btn-container")
 buttons.innerHTML = `
<button type="button" id="b1"  class="btn btn-outline-dark">All</button>
<button type="button" id="b2"  class="btn btn-outline-dark btn-item">Korea</button>
<button type="button" id="b3"  class="btn btn-outline-dark btn-item">Japan</button>
<button type="button" id="b4"  class="btn btn-outline-dark btn-item">China</button>`


 let d1 = document.querySelector("#d-1")
 let d2 = document.querySelector("#d-2")
 let d3 = document.querySelector("#d-3")

 let d4 = document.querySelector("#d-4")
 let d5 = document.querySelector("#d-5")
 let d6 = document.querySelector("#d-6")

 let d7 = document.querySelector("#d-7")
 let d8 = document.querySelector("#d-8")


 let b1 = document.querySelector("#b1")
 let b2 = document.querySelector("#b2")
 let b3 = document.querySelector("#b3")
 let b4 = document.querySelector("#b4")



b1.addEventListener("click",() => {
  d1.style.display = "block"
  d2.style.display = "block"
  d3.style.display = "block"
  d4.style.display = "block"
  d5.style.display = "block"
  d6.style.display = "block"
  d7.style.display = "block"
  d8.style.display = "block"
  
})

 
b2.addEventListener("click",() => {
  d1.style.display = "block"
  d2.style.display = "block"
  d3.style.display = "block"
  d4.style.display = "none"
  d5.style.display = "none"
  d6.style.display = "none"
  d7.style.display = "none"
  d8.style.display = "none"
  
})


 
b3.addEventListener("click",() => {
  d1.style.display = "none"
  d2.style.display = "none"
  d3.style.display = "none"
  d4.style.display = "none"
  d5.style.display = "block"
  d6.style.display = "block"
  d7.style.display = "none"
  d8.style.display = "none"
  
})



 
b4.addEventListener("click",() => {
  d1.style.display = "none"
  d2.style.display = "none"
  d3.style.display = "none"
  d4.style.display = "block"
  d5.style.display = "none"
  d6.style.display = "none"
  d7.style.display = "block"
  d8.style.display = "block"
  
})



