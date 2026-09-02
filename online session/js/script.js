

let changeColor = (element) => {

    let listItems = document.querySelectorAll("li")

    listItems.forEach((item) => {
        item.classList.remove("bg-primary", "text-white")
    })

    element.classList.add("bg-primary", "text-white")
}