const meals = [
    { id: 1, day: "Monday", mealType: "Breakfast", description: "Milo with bread and fried eggs" },
    { id: 2, day: "Monday", mealType: "Lunch", description: "Jollof rice with grilled chicken and coleslaw" },
    { id: 3, day: "Monday", mealType: "Dinner", description: "Banku with grilled tilapia and spicy pepper sauce" },
    // Add more meals here
];

exports.getMeals = (req, res) => {
    res.json(meals);
};
