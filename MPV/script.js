// script.js
const inventoryList = document.getElementById("inventory-list");

function addProduct() {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>Producto Ejemplo</td>
        <td>10</td>
        <td>2024-12-31</td>
        <td><button onclick="deleteProduct(this)">Eliminar</button></td>
    `;
    inventoryList.appendChild(row);
}

function deleteProduct(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}
