// form //

// let form = document.getElementById("form");
// let password = document.querySelector(".password");
// let email = document.querySelector(".email");
// let warning = document.getElementById("warning")
// let select = document.getElementById("cities")


// email.addEventListener("keyup",function () {
    
//     if (email.value.trim()=="") {
//         warning.classList.remove("d-none")
//     }
//     else{
//         warning.classList.add("d-none")
//     }
// })

// email.addEventListener("change",function () {
//     console.log("changed");
// })

// select.addEventListener("change",function () {
//     console.log(this.value);
// })


// form.addEventListener("submit",function (e) {
//     e.preventDefault();
//     if (email.value.trim()=="") {
//         warning.classList.remove("d-none")
//     }
//     else{
//         warning.classList.add("d-none")
//     }
// })



// drag-drop

// let dragElements = document.querySelectorAll(".item");
// let dropArea = document.querySelector("#drop-area");

// let id;
// dragElements.forEach(element => {
//     element.addEventListener("dragstart",function (e) {
    
//          e.dataTransfer.setData("id",e.target.id)

        // id = e.target.id;
 
//     })
// });


// dropArea.addEventListener("drop",function (e) {
    
//     let id = e.dataTransfer.getData("id")
//     e.target.append(document.getElementById(id))
// })

// dragElement.addEventListener("dragend",function (e) {
//     e.target.style.backgroundColor = "hotpink";
// })
// dragElement.addEventListener("drag",function (e) {
//     console.log("on drag");
// })

// dropArea.addEventListener("dragover",function (e) {
//     e.preventDefault();
    
// })


let upload = document.getElementById("upload");

upload.addEventListener("click",function () {
    this.nextElementSibling.click();
})

upload.nextElementSibling.onchange = function (e) {
    console.log(e);
}