document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0; // Індекс поточного дня
    const mealDays = document.querySelectorAll(".meal-day"); // Отримуємо всі блоки для днів
    const prevButton = document.getElementById("prev-day");
    const nextButton = document.getElementById("next-day");

    // Відображаємо перший день за замовчуванням
    mealDays[currentIndex].classList.add("active");

    // Функція для перемикання між днями
    function switchDay(index) {
        mealDays[currentIndex].classList.remove("active"); // Приховуємо поточний день
        currentIndex = index; // Оновлюємо індекс
        mealDays[currentIndex].classList.add("active"); // Показуємо новий день
    }

    // Обробники для кнопок
    prevButton.addEventListener("click", function () {
        if (currentIndex > 0) {
            switchDay(currentIndex - 1); // Перехід до попереднього дня
        }
    });

    nextButton.addEventListener("click", function () {
        if (currentIndex < mealDays.length - 1) {
            switchDay(currentIndex + 1); // Перехід до наступного дня
        }
    });
});

/*тренування*/
document.addEventListener("DOMContentLoaded", function () {
    // Масив тренувань
    const trainings = [
        { type: "Кардіо", duration: "30 хв", image: "cardio1.jpg" },
        { type: "Силові", duration: "45 хв", image: "gym1.jpg" },
        { type: "Розтяжка", duration: "20 хв", image: "zastavka.jpg" }
    ];

    const trainingCardsContainer = document.getElementById("training-cards");
    const logList = document.getElementById("log-list");

    // Функція для додавання картки тренування
    function addTrainingCard(training, index) {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${training.image}" alt="${training.type} тренування">
            <h3>${training.type} тренування</h3>
            <p>Тривалість: ${training.duration}</p>
            <button class="start-button" data-index="${index}">Почати тренування</button>
        `;

        trainingCardsContainer.appendChild(card);
    }

    // Додаємо картки тренувань
    for (let i = 0; i < trainings.length; i++) {
        addTrainingCard(trainings[i], i);
    }

    // Масив для журналу тренувань
    const workoutLog = [];

    // Обробник для кнопки "Почати тренування"
    trainingCardsContainer.addEventListener("click", function (event) {
        if (event.target.classList.contains("start-button")) {
            const index = event.target.getAttribute("data-index");
            const training = trainings[index];
            
            // Додаємо тренування до журналу
            const logEntry = `${training.type} тренування, тривалість: ${training.duration}`;
            workoutLog.push(logEntry);

            // Оновлюємо журнал
            const logItem = document.createElement("li");
            logItem.textContent = logEntry;
            logList.appendChild(logItem);

            // Оновлюємо статус кнопки
            event.target.textContent = "Тренування завершено";
            event.target.disabled = true; // Відключаємо кнопку після завершення тренування

            // Додаємо повідомлення для користувача
            alert(`${training.type} тренування розпочато! Тривалість: ${training.duration}`);
        }
    });
});


function openModal(modalId) {
    closeAllModals();
    document.getElementById(modalId).style.display = "flex";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

function switchModal(currentModal, nextModal) {
    closeModal(currentModal);
    openModal(nextModal);
}

function closeAllModals() {
    let modals = document.getElementsByClassName("modal");
    for (let modal of modals) {
        modal.style.display = "none";
    }
}

// Закриття модальних вікон при кліку за межами
window.onclick = function(event) {
    let modals = document.getElementsByClassName("modal");
    for (let modal of modals) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
};

// Обробка входу в систему
document.getElementById("registerForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    loginSuccess();
});

document.getElementById("loginForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    loginSuccess();
});

function loginSuccess() {
    localStorage.setItem("loggedIn", "true");
    closeAllModals();
    document.getElementById("profile-icon").style.display = "block";
}

// Функція виходу
function logout() {
    alert("Ви вийшли з акаунту");
    localStorage.removeItem("loggedIn");
    window.location.href = "index.html";
}
