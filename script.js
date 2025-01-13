const list1 = document.querySelector("#list-1")
const list2 = document.querySelector("#list-2")
const list3 = document.querySelector("#list-3")
const list4 = document.querySelector("#list-4")
const star1 = document.querySelector("#img-1")
const star2 = document.querySelector("#img-2")
const star3 = document.querySelector("#img-3")
const star4 = document.querySelector("#img-4")

function showHideAnswer1() {
  let existingDiv = list1.querySelector(".answer")

  if (existingDiv) {
    list1.removeChild(existingDiv)
    star1.src = "./images/icon-plus.svg"
  } else {
    let newDiv = document.createElement("div")
    newDiv.classList.add("answer")

    let newPh = document.createElement("p")
    newPh.innerText =
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It’s suitable for all levels and ideal for portfolio building."

    newDiv.append(newPh)
    list1.append(newDiv)
    star1.src = "./images/icon-minus.svg"
  }
}

function showHideAnswer2() {
  let existingDiv = list2.querySelector(".answer")

  if (existingDiv) {
    list2.removeChild(existingDiv)
    star2.src = "./images/icon-plus.svg"
  } else {
    let newDiv = document.createElement("div")
    newDiv.classList.add("answer")

    let newPh = document.createElement("p")
    newPh.innerText =
      "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."

    newDiv.append(newPh)
    list2.append(newDiv)
    star2.src = "./images/icon-minus.svg"
  }
}

function showHideAnswer3() {
  let existingDiv = list3.querySelector(".answer")

  if (existingDiv) {
    list3.removeChild(existingDiv)
    star3.src = "./images/icon-plus.svg"
  } else {
    let newDiv = document.createElement("div")
    newDiv.classList.add("answer")

    let newPh = document.createElement("p")
    newPh.innerText =
      "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"

    newDiv.append(newPh)
    list3.append(newDiv)
    star3.src = "./images/icon-minus.svg"
  }
}

function showHideAnswer4() {
  let existingDiv = list4.querySelector(".answer")

  if (existingDiv) {
    list4.removeChild(existingDiv)
    star4.src = "./images/icon-plus.svg"
  } else {
    let newDiv = document.createElement("div")
    newDiv.classList.add("answer")

    let newPh = document.createElement("p")
    newPh.innerText =
      "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."

    newDiv.append(newPh)
    list4.append(newDiv)
    star4.src = "./images/icon-minus.svg"
  }
}

star1.addEventListener("click", showHideAnswer1)
star2.addEventListener("click", showHideAnswer2)
star3.addEventListener("click", showHideAnswer3)
star4.addEventListener("click", showHideAnswer4)