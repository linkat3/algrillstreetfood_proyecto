function addData() {
    const name = document.getElementById("nameInput").value;
    const lname = document.getElementById("lnameInput").value;
    const email = document.getElementById("emailInput").value;
    const mobileDetails = document.getElementById("numberInput").value;

    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${lname}</td>
        <td>${email}</td>
        <td>${mobileDetails}</td>
        <td>
            <button onclick="editData(this)">Editar</button>
            <button onclick="deleteData(this)">Eliminar</button>
        </td>
    `;

    document.getElementById("tableBody").appendChild(newRow);
}

function editData(button) {
    const row = button.parentNode.parentNode;
    const nameCell = row.cells[0];
    const emailCell = row.cells[1];

    const nameInput = document.createElement("input");
    nameInput.value = nameCell.textContent;
    nameCell.innerHTML = "";
    nameCell.appendChild(nameInput);

    const lnameInput = document.createElement("input");
    lnameInput.value = nameCell.textContent;
    nameCell.innerHTML = "";
    nameCell.appendChild(lnameInput);

    const emailInput = document.createElement("input");
    emailInput.value = emailCell.textContent;
    emailCell.innerHTML = "";
    emailCell.appendChild(emailInput);

    button.textContent = "Guardar";
    button.onclick = saveData;
}

function saveData(button) {
    // Lógica para guardar los datos editados
    // ...

    // Restaurar la vista original
    // ...

    button.textContent = "Editar";
    button.onclick = editData;
}

function deleteData(button) {
    const row = button.parentNode.parentNode;
    row.remove();
}

 

function anular(){

window.location.reload();

}