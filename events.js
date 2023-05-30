// Есть ли обработчик? (function) => handler, listener, subscriber
// При вызове функции обработчик события формируется объект ({}) => event, ev, e
// Если есть, то function(e) => callback вызывается браузером

const element = document.getElementById("blockId")
const elementOne = document.getElementById("blockId1")

//Варианты создания обработчиков событий
//1 Вручную присвоить
const handler = (e) => {
    e.stopPropagation() // Остановили всплытие. elementOne не вызывается
    alert("orangered block is called")
}

element.onclick = handler

//2 Повесить встроенный в JS слушатель-обработчик события
element.addEventListener("click", handler) // Два параметра: Событие и функция для вызова при этом событии.
// (Третий необязательный параметр - отслеживание событие на стадии погружения)
element.removeEventListener("click", handler) //удаляем обработчик события


elementOne.addEventListener("click", (e) => {
    alert("purple block is called")
})


/*
Всплытие событий в JavaScript является одной из его особенностей.
Оно означает, что когда событие происходит на элементе DOM (Document Object Model),
оно также срабатывает на его родительских элементах вверх по иерархии.
Когда происходит событие на определенном элементе, JavaScript сначала обрабатывает это событие на самом элементе,
 а затем автоматически поднимается по иерархии родительских элементов. Это процесс называется всплытием событий.
 */

// e.target - Элемент, который вызвал событие (click);
// e.currentTarget - Элемент, который вызвал обработчик в процессе всплытия;
//e.stopPropagation() - предотвращает всплытие

//preventDefault()- отменим действие события ссылки по умолчанию

const a = document.getElementById("a")
a.addEventListener("click", (e) => {
    e.preventDefault()
    alert("Ссылка не работает")
    e.stopPropagation()
})