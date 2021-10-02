const item = document.querySelector(".item");
const placeholders = document.querySelectorAll(".placeholder");

item.addEventListener("dragstart", dragstart);
item.addEventListener("dragend", dragend);

for (const placeholder of placeholders) {
  placeholder.addEventListener("dragover", dragover);
  placeholder.addEventListener("dragenter", dragenter);
  placeholder.addEventListener("dragleave", dragleave);
  placeholder.addEventListener("drop", drop);
}

function dragstart(e) {
  e.target.classList.add("hold");
  setTimeout(() => e.target.classList.add("hide"), 0);
}

function dragend(e) {
  e.target.classList.remove("hold", "hide");
}

function dragover(e) {
    console.log('dragover')
    e.preventDefault()
}
function dragenter(e) {
    e.target.classList.add('hovered')
    console.log('dragcenter')

}
function dragleave(e) {
    e.target.classList.remove('hovered')
    console.log('dragleave')

}
function drop(e) {
    e.target.classList.remove('hovered')

    e.target.append(item)
    console.log('drop')
}

