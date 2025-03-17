let friends = [];
let friendsList = document.getElementById("friendsList");
let resultMessage = document.getElementById("resultMessage");
let friendInput = document.getElementById("friendInput");
let drawButton = document.getElementById("drawButton");
let addButton = document.getElementById("addButton");
let resetButton = document.getElementById("resetButton");
let alertMessage = document.getElementById("alertMessage");
let alertVisible = false;

friendInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); 
        addFriend();
    }
});

// Function to show alert message in case of input error
function showAlert(message) {
    if (alertVisible) return;

    alertVisible = true;
    alertMessage.textContent = message; 
    alertMessage.style.display = "block";
    setTimeout(function() {
        alertMessage.style.display = "none";
        alertVisible = false;
    }, 2000);
}

// Function to add a friend to the list
function addFriend() {
    let inputFriend = friendInput.value.trim();

    // Validation for valid name
    if (inputFriend === "" || !/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(inputFriend)) {
        showAlert("¡Error! Ingrese un nombre válido");
        friendInput.value = "";
        return;
    }

    // Validation for numeric data
    if (/\d/.test(inputFriend)) {
        showAlert("Por favor no ingreses números");
        friendInput.value = "";
        return;
    }

    // Check for duplicate name
    if (friends.some(friend => friend.toUpperCase() === inputFriend.toUpperCase())) {
        showAlert("El amigo que ingresaste ya está en la lista");
        friendInput.value = "";
        return;
    }

    friends.push(inputFriend);

    let newFriend = document.createElement('li'); 
    newFriend.textContent = inputFriend;

    friendsList.appendChild(newFriend);
    resultMessage.textContent = "¡Tu amigo ha sido añadido!"; 
    friendInput.value = "";
}

document.getElementById("drawButton").removeAttribute('disabled');

// Function to manage button states
function manageButtons(disable) {
    drawButton.disabled = disable;
    friendInput.disabled = disable;
    addButton.disabled = disable;
}

// Function to draw a secret friend and show the result on screen
function drawFriend() {
    let index = Math.floor(Math.random() * friends.length);

    // Check if there are at least 3 friends in the list
    if (friends.length === 0) {
        resultMessage.textContent = "Por favor. Ingrese algún dato";
    } else if (friends.length < 3) {
        resultMessage.textContent = "Ingrese 3 amigos o más para poder iniciar";
    } else {
        resultMessage.innerHTML = `¡Tu amigo secreto es <span class="subrayado">${friends[index]}</span>!`;
        friendInput.value = "";

        const listItems = document.querySelectorAll('ul li');
        listItems.forEach((item, i) => {
            if (i === index) {
                item.classList.add('selected');
            } else {
                item.classList.remove('selected');
            }
        });

        // Disable inputs after the draw
        manageButtons(true);
    }
}
