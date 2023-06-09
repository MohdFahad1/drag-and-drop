let lists = document.getElementsByClassName("list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");
let selected;

// Function to display a message in the top right corner
function displayMessage(message) {
    const messageBox = document.createElement('div'); // Create a new message box element
    messageBox.className = 'message'; // Set the class of the message box
    messageBox.innerText = message; // Set the text content of the message box
    document.body.appendChild(messageBox); // Append the message box to the body

    // Remove the message box after 1 second
    setTimeout(() => {
        messageBox.remove(); 
    }, 1000);
}

// Function to attach drag and drop event listeners
function attachDragListeners() {
    for (list of lists) {
        list.addEventListener("dragstart", function (e) {
            selected = e.target; // Set the selected element to the current target
            selected.className += ' hold'; // Adding the "hold" class to the selected element

            // Hiding the selected element using a timeout
            setTimeout(() => {
                selected.className = ' hide';
            }, 0);
        });

        list.addEventListener('dragend', function (e) {
            selected = e.target; // Set the selected element to the current target
            selected.className = 'list'; // Reset the class of the selected element
        });
    }

    rightBox.addEventListener("dragover", function (e) {
        e.preventDefault(); // Prevent the default dragover behavior
    });

    rightBox.addEventListener("drop", function (e) {
        e.preventDefault();
        rightBox.appendChild(selected); // Append the selected element to the rightBox
        selected = null; // Reset the selected variable

         // Display a success message
        displayMessage("Item successfully dropped in second Box");
    });

    leftBox.addEventListener("dragover", function (e) {
        e.preventDefault(); // Prevent the default dragover behavior
    });

    leftBox.addEventListener("drop", function (e) {
        e.preventDefault();
        leftBox.appendChild(selected); // Append the selected element to the leftBox
        selected = null; // Reset the selected variable

         // Display a success message
        displayMessage("Item successfully dropped in first Box"); 
    });
}

attachDragListeners(); // Attaching the initial drag and drop event listeners

function resetBoxes() {
    // Reset the content of the rightBox
    rightBox.innerHTML = '<h2>Second Box</h2>'; 

    // Reset the content of the leftBox to its original state
    leftBox.innerHTML = `
        <h2>First Box</h2>
        <div class="list" draggable="true">Item 1</div>
        <div class="list" draggable="true">Item 2</div>
        <div class="list" draggable="true">Item 3</div>
        <div class="list" draggable="true">Item 4</div>
        <div class="list" draggable="true">Item 5</div>
    `; 

    attachDragListeners(); // Reattaching the drag and drop event listeners
}
