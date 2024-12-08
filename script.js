document.addEventListener('DOMContentLoaded', function() {
    const foodMenu = [
        { week: 1, day: 'Monday', meal: 'Breakfast', foodItems: 'Milo with bread and fried eggs', verification: '' },
        { week: 1, day: 'Monday', meal: 'Lunch', foodItems: 'Jollof rice with grilled chicken and coleslaw', verification: '' },
        { week: 1, day: 'Monday', meal: 'Dinner', foodItems: 'Banku with grilled tilapia and spicy pepper sauce', verification: '' },
        { week: 1, day: 'Tuesday', meal: 'Breakfast', foodItems: 'Tombrown porridge with groundnuts', verification: '' },
        { week: 1, day: 'Tuesday', meal: 'Lunch', foodItems: 'Boiled yam with kontomire stew and boiled egg', verification: '' },
        { week: 1, day: 'Tuesday', meal: 'Dinner', foodItems: 'Rice balls with groundnut soup (Nkate nkwan)', verification: '' },
        // Add the remaining rows here...
    ];

    const foodMenuTable = document.getElementById('food-menu');

    foodMenu.forEach(function(item) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.week}</td>
            <td>${item.day}</td>
            <td>${item.meal}</td>
            <td>${item.foodItems}</td>
            <td>${item.verification}</td>
        `;
        foodMenuTable.appendChild(row);
    });
});
