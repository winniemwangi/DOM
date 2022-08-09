var changeColor = document.getElementById("bg")
changeColor.style.background = "Silver"

var fontColor = document.getElementById("title")
fontColor.style.color = "green"

var titleTags = document.getElementById("tags")
titleTags.style.textTransform = "uppercase"

var titletags = document.getElementById("tag")
titletags.style.textTransform = "uppercase"

var addFruit = document.createElement("li")
var addfruit = document.createTextNode("Peach")
addFruit.appendChild(addfruit)
var fruitList = document.getElementById("fruList")
fruitList.append(addFruit)

var addVege = document.createElement("li")
var addvege = document.createTextNode("Cabbage")
addVege.appendChild(addvege)
var vegeList = document.getElementById("vegList")
vegeList.append(addVege)