document.addEventListener("DOMContentLoaded", function () {
    fetchMeals();

    const printButton = document.getElementById("print-btn");
    printButton.addEventListener("click", function () {
        window.print();
    });
});

function fetchMeals() {
    fetch("http://localhost:5000/api/meals")
        .then((response) => response.json())
        .then((meals) => {
            const mealList = document.getElementById("meal-list");
            mealList.innerHTML = meals
                .map(
                    (meal) => `
                    <div class="card mb-3">
                        <div class="card-body">
                            <h5 class="card-title">${meal.day} - ${meal.mealType}</h5>
                            <p class="card-text">${meal.description}</p>
                        </div>
                    </div>
                `
                )
                .join("");
        })
        .catch((error) => console.error("Error fetching meals:", error));
}
