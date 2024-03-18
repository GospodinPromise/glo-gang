const registerButton = document.querySelector(".register");
const userList = document.querySelector(".spisok");
let bazaDannih = JSON.parse(localStorage.getItem("bazaDannih")) || [];
const avtoriz = document.querySelector('.avtoriz');

// Функция для воссоздания элементов списка из Local Storage
function renderList() {
    userList.innerHTML = ""; // Очищаем список перед добавлением элементов
    bazaDannih.forEach(user => {
        const userElement = document.createElement("li");
        userElement.innerHTML = `Имя: ${user.firstName}, Фамилия: ${user.lastName}, Зарегистрирован: ${user.regDate}`;
        userList.appendChild(userElement);
        userElement.addEventListener("click", function() {
            bazaDannih = bazaDannih.filter(u => u !== user); // Удаление элемента из массива
            localStorage.setItem("bazaDannih", JSON.stringify(bazaDannih)); // Обновление Local Storage
            userElement.remove(); // Удаление элемента из списка при клике
        });
    });
}

// Вызов функции для воссоздания элементов списка при загрузке страницы
renderList();

registerButton.addEventListener("click", function() {
    const fullName = prompt("Введите через пробел имя и фамилию");
    const [firstName, lastName] = fullName.trim().split(" ");

    if (fullName.split(" ").length !== 2) {
        alert("Ошибка. Введите корректные данные");
        return;
    }

    const login = prompt("Введите логин");
    const password = prompt("Введите пароль");
  
    const registrationDate = new Date().toLocaleString();
  
    const user = {
    firstName: firstName,
    lastName: lastName,
    login: login,
    password: password,
    regDate: registrationDate
    };

    bazaDannih.push(user);
    localStorage.setItem("bazaDannih", JSON.stringify(bazaDannih));
  
    renderList(); // Обновление списка с новым пользователем
});

avtoriz.addEventListener('click', function() {
    const text = document.querySelector('.text').textContent.split(' ')
    const loginPrompt = prompt('Введите логин');
    const passwordPrompt = prompt('Введите пароль');

    const foundUser = bazaDannih.find(user => user.login === loginPrompt && user.password === passwordPrompt);

    if (foundUser) {
        text[1] = foundUser.firstName;
        document.querySelector('.text').textContent = text.join(' ');
    }
});





