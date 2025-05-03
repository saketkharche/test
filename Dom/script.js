const form = document.getElementById("inputdata");
const nameInput = document.getElementById("name");
const cityInput = document.getElementById("city");
const tableBody = document.getElementById("table-body");

let editIndex = null;

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = nameInput.value;
    const city = cityInput.value;

    if (name === "" || city === "") {
        alert("Please fill in both fields.");
        return;
    }

    if (editIndex === null) {
        // CREATE
        const newRow = document.createElement("tr");

        newRow.innerHTML = `
            <td>${name}</td>
            <td>${city}</td>
            <td>
                <button onclick="editRow(this)">Edit</button>
                <button onclick="deleteRow(this)">Delete</button>
            </td>
        `;

        tableBody.appendChild(newRow);
    } else {
        // UPDATE
        const row = tableBody.rows[editIndex];
        row.cells[0].textContent = name;
        row.cells[1].textContent = city;
        editIndex = null;
    }

    form.reset();
});

// DELETE
function deleteRow(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}

// UPDATE - FILL FORM
function editRow(button) {
    const row = button.parentElement.parentElement;
    nameInput.value = row.cells[0].textContent;
    cityInput.value = row.cells[1].textContent;
    editIndex = row.rowIndex - 1; // -1 because of thead
}
