// Получаем все теги переключатели
const allATags = document.getElementsByTagName("a")
const book = document.getElementById("book")

function toggler(Buttons) {
    for (button of Buttons) {
        button.addEventListener('click',(ev) => {
            let flag = true // Флаг для проверки надобности измениня DOM дерева
            ev.preventDefault() // Отменяем стандартное поведение обновления страницы
            if (ev.target.className.includes("active")) {
                flag = false 
            }
            // Логика смены значения
            if (flag) {
                // Получаем все активные теги на данный момент
                const activeTextSize = document.getElementsByClassName("font-size_active")[0]
                const activeTextColor = document.getElementsByClassName("text-color_active")[0]
                const activeBgColor = document.getElementsByClassName("bg-color_active")[0]
                // Вытаскиваем дату из кликнутого тега
                const data = ev.target.dataset
                // Проверяем её и задаем нужное нам поведение
                switch(Object.keys(data)[0]) {
                    case "size":
                        activeTextSize.classList.toggle("font-size_active")
                        ev.target.classList.toggle("font-size_active")
                        if (Object.values(data)[0] == "small") { // Маленький шрифт
                            book.className = "book book_fs-small"
                        } else {
                            book.className = "book book_fs-big" // Большой шрифт
                        }
                        break
                    case undefined: // Средний шрифт
                        activeTextSize.classList.toggle("font-size_active")
                        ev.target.classList.toggle("font-size_active")
                        book.className = "book"
                        break
                    case "textColor": // Цвет текста
                        activeTextColor.classList.toggle("text-color_active")
                        ev.target.classList.toggle("text-color_active")
                        book.style.color = Object.values(data)[0]
                        break
                    case "bgColor" : // Цвет фона
                        activeBgColor.classList.toggle("bg-color_active")
                        ev.target.classList.toggle("bg-color_active")
                        book.style.backgroundColor = Object.values(data)[0]
                        break
                    default:
                        break
                }

            }
        })
    }
}


toggler(allATags)


// Первое решение
// const sizeButtons = document.getElementsByClassName("font-size")
// for (size of sizeButtons) {
//     size.addEventListener('click',(ev) => {
//         ev.preventDefault()
//         let activeButton = document.getElementsByClassName("font-size_active")[0]

//         // Check for active class and size of text

//         if (ev.target.classList.contains("font-size_small") &&
//          !(ev.target.classList.contains("font-size_active"))){
//             console.log('SMAL')
//             console.log(ev.target.classList[0],ev.target.classList[1])
//             book.className = "book book_fs-small"
//             activeButton.classList.toggle("font-size_active")
//             ev.target.classList.toggle("font-size_active")
            
//         }
//         else if (ev.target.classList.contains("font-size_big") &&
//         !(ev.target.classList.contains("font-size_active"))){
//             console.log('BIG')
//             book.className = "book book_fs-big"
//             activeButton.classList.toggle("font-size_active")
//             ev.target.classList.toggle("font-size_active")
            
//         } else if((ev.target.classList == "font-size") &&
//         ev.target.classList != "font-size_active") {
//             console.log("NORMAL")
//             book.className = "book"
//             activeButton.classList.toggle("font-size_active")
//             ev.target.classList.toggle("font-size_active")
//         }
//     })
// }
