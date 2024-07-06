const ExpenceForm = document.getElementById("expenceform");
const description = document.getElementById("description");
const catagory = document.getElementById("catagory");
const amount = document.getElementById("amount");
const table = document.getElementById("table");
const tbody = document.getElementById("tbody");

ExpenceForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const descriptionValue = description.value;
  const catagoryValue = catagory.value;
  const amountValue = amount.value;

  if (document && catagory && !isNaN(amountValue)) {
    const newRow = document.createElement("tr");
    newRow.innerHTML = ` 
    <td>${descriptionValue}</td>
    <td>${catagoryValue}</td>
    <td>${amountValue}</td>`;
    tbody.appendChild(newRow);

    description.value = "";
    catagory.value = "";
    amount.value = "";
  }
});
