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

    // TASK 4
    // Attach event listener to remove employee button
    removeButton.addEventListener("click", function() {
        removeEmployee(employeeCard);
    });

    // TASK 5
    // Add event listener to each employee card to allow editing
    employeeCard.addEventListener("dblclick", function(event) {
        console.log("yo");
        
        const clickedItem = event.target;
        const clickedText = clickedItem.textContent;
       
        if (clickedItem.closest(".employee-card") && clickedItem.matches("p, h3")) {
            const input = document.createElement("input");
            input.setAttribute("value", clickedText);
            clickedItem.replaceWith(input);  
            
            // Add save button
            const saveButton = document.createElement("button");
            saveButton.setAttribute("id", "saveButton");
            saveButton.textContent = "Save";
            input.insertAdjacentElement("afterend", saveButton);

            saveButton.addEventListener("click", function() {
                const inputText = input.value;
                const replacedText = document.createElement(clickedItem.tagName.toLowerCase());

                replacedText.textContent = inputText
                input.replaceWith(replacedText);
                saveButton.remove();
            })
        }
    })

    employeeContainerId.appendChild(employeeCard);
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

// TASK 4: IMPLEMENTING REMOVAL OF EMPLOYEE CARDS WITH EVENT BUBBLING

// Add functionality to remove employee button
function removeEmployee(employee) {
    employeeContainerId.removeChild(employee);
}

// Attach event listener to employeeContainer
employeeContainerId.addEventListener("click", function() {
    console.log("Employee section clicked!");
})

// Attach event listener to each employee card
document.querySelectorAll(".employee-card").forEach(card => {
    card.addEventListener("click", function(event) {
        console.log("Employee card clicked!");
        event.stopPropagation(); //Enable to prevent event bubbling
    })
})