// TASK 2: ADDING EMPLOYEE CARDS DYNAMICALLY

// Identify employee container and employee card
const employeeContainerId = document.getElementById("employeeContainer");
const employeeCardId = document.querySelector(".employee-card");

// Function
function createEmployeeCard(employeeName, position) {

    // Create employee card  
    const employeeCard = document.createElement("div");

    // Set class attribute for all cards
    employeeCard.setAttribute("class", "employee-card");

    // Populate the card with employee name and position
    employeeCard.innerHTML = "<h3>" + employeeName + "</h3><p>" + position + "</p>";

    // Adding remove employee button
    const removeButton = document.createElement("button");
    removeButton.setAttribute("id", "removeButton");
    removeButton.textContent = "Remove Employee";
    employeeCard.appendChild(removeButton);

    // Attach event listener to remove employee button
    removeButton.addEventListener("click", function() {
        removeEmployee(employeeCard);
    });

    employeeContainerId.appendChild(employeeCard);
}

// Create function to remove employee
function removeEmployee(employee) {
    employeeContainerId.removeChild(employee);
}

// Test Cases
createEmployeeCard("Luana", "Student Assistant");
createEmployeeCard("Zach", "Assignment Coordinator");
createEmployeeCard("Amy", "Assistant Director of Occupancy");

// TASK 3: CONVERTING NODELIST TO ARRAYS FOR BULK UPDATES

// Selecting all employee cards
const employeeCardNodeList = document.querySelectorAll(".employee-card");

// Converting into array
const employeeCardArray = Array.from(employeeCardNodeList);

// Update employee card appearance
employeeCardArray.forEach(card => {
    card.style.border = "3px solid dodgerblue"
});