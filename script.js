"use strict";
const submitBtn = document.getElementById("submit-btn");
const idInput = document.getElementById("input-id");
const nameInput = document.getElementById("input-name");
const ageInput = document.getElementById("input-age");
const typeInput = document.getElementById("input-type");
const weightInput = document.getElementById("input-weight");
const lengthInput = document.getElementById("input-length");
const colorInput = document.getElementById("input-color-1");
const breedInput = document.getElementById("input-breed");
const vaccinatedInput = document.getElementById("input-vaccinated");
const dewormedInput = document.getElementById("input-dewormed");
const sterilizedInput = document.getElementById("input-sterilized");
const tableBodyEl = document.getElementById("tbody");
const healthyBtn = document.getElementById("healthy-btn");
const calculateBmiBtn = document.getElementById('calculate-bmi-btn');
const petArr = [];
const data1 = {
  id: "P001",
  name: "Tom",
  age: "3",
  type: "Cat",
  weight: 5,
  length: 50,
  color: "red",
  breed: "Tabby",
  vaccinated: true,
  dewormed: true,
  sterilized: true,
  bmi: "?",
  date: new Date(2022, 2, 1),
};
const data2 = {
  id: "P002",
  name: "Tyke",
  age: "5",
  type: "Dog",
  weight: 3,
  length: 40,
  color: "green",
  breed: "Mixed",
  vaccinated: false,
  dewormed: false,
  sterilized: false,
  bmi: "?",
  date: new Date(2022, 2, 1),
};
petArr.push(data1);
petArr.push(data2);
submitBtn.addEventListener("click", function (e) {
  const data = {
    id: idInput.value,
    name: nameInput.value,
    type: typeInput.value,
    weight: parseInt(weightInput.value),
    length: parseInt(lengthInput.value),
    age: parseInt(ageInput.value),
    color: colorInput.value,
    breed: breedInput.value,
    vaccinated: vaccinatedInput.checked,
    dewormed: dewormedInput.checked,
    sterilized: sterilizedInput.checked,
    date: new Date(),
    bmi: '?',
  };
  //console.log(data);

  // validate
  const validate = validateData(data);

  if (validate) {
    petArr.push(data);
    renderTableData(petArr);
    clearInput();
  }
});
renderTableData(petArr);

function renderTableData(petArr) {
  tableBodyEl.innerHTML = "";
  for (let i = 0; i < petArr.length; i++) {
    const row = document.createElement("tr"); //tạo 1 thẻ tr
    row.innerHTML = `
							<th scope="row">${petArr[i].id}</th>
							<td>${petArr[i].name}</td>
							<td>${petArr[i].age}</td>
							<td>${petArr[i].type}</td>
							<td>${petArr[i].weight} kg</td>
							<td>${petArr[i].length} cm</td>
							<td>${petArr[i].breed}</td>
							<td>
								<i class="bi bi-square-fill" style="color:${petArr[i].color}"></i>
							</td>
							<td><i class="bi ${
                petArr[i].vaccinated
                  ? "bi-check-circle-fill"
                  : " bi-x-circle-fill "
              }"></i></td>
							<td><i class="bi ${
                petArr[i].dewormed
                  ? "bi-check-circle-fill"
                  : " bi-x-circle-fill "
              }"></i></td>
							<td><i class="bi ${
                petArr[i].sterilized
                  ? "bi-check-circle-fill"
                  : " bi-x-circle-fill "
              }"></i></td>
               <td>${petArr[i].bmi}</td>
							<td>${petArr[i].date.getDate()}/${petArr[i].date.getMonth() + 1}/${petArr[
      i
    ].date.getFullYear()}</td>
							<td><button class="btn btn-danger" onclick="deletePet('${
                petArr[i].id
              }')">Delete</button></td>
							</td>
						</tr>
						`;
    tableBodyEl.appendChild(row);
  }
}
function deletePet(petId) {
  const isDeleted = confirm("Are you sure?");
  // Confirm before deletePet
  if (isDeleted) {
    //thực hiện xóa
    for (let i = 0; i < petArr.length; i++) {
      if (petId === petArr[i].id) {
        // xóa khỏi mảng
        petArr.splice(i, 1);
        renderTableData(petArr);
      }
    }
  }
}
function clearInput() {
  idInput.value = "";
  nameInput.value = "";
  ageInput.value = "";
  typeInput.value = "Select Type";
  weightInput.value = "";
  lengthInput.value = "";
  colorInput.value = "";
  breedInput.value = "";
  vaccinatedInput.checked = false;
  dewormedInput.checked = false;
  sterilizedInput.checked = false;
}

function validateData(data) {
  let isValidate = true;
  // if(data.id.trim().length === 0){
  // 	alert('Không được để trống trường ID !');
  // 	isValidate = false;
  // }
  // if(data.name.trim().length === 0){
  // 	alert('Không được để trống trường Name !');
  // 	isValidate = false;
  // }
  // if(isNaN(data.age)){
  // 	alert('Không được để trống trường Age !');
  // 	isValidate = false;
  // }
  // if(isNaN(data.weight)){
  // 	alert('Không được để trống trường Weight !');
  // 	isValidate = false;
  // }
  // if(isNaN(data.length)){
  // 	alert('Không được để trống trường Length !');
  // 	isValidate = false;
  // }

  // for(let i = 0; i < petArr.length; i++){
  //    if(data.id === petArr[i].id){
  // 	   alert('ID must unique!');
  // 	   isValidate = false;
  // 	   break;
  //     }
  // }
  // if(data.age <1 || data.age > 15){
  // 	alert('Age must be between 1 and 15!');
  // 	isValidate
  // }
  // if(data.weight <1 || data.age > 15){
  // 	alert('weight must be between 1 and 15!');
  // 	isValidate
  // }
  // if(data.length <1 || data.age > 100){
  // 	alert('Length must be between 1 and 15!');
  // 	isValidate
  // }
  // if(data.type ==='Select Type'){
  // 	alert('Please selection Type!');
  // 	isValidate = false;
  // }
  // if(data.breed ==='Select Breed'){
  // 	alert('Please selection Breed!');
  // 	isValidate = false;
  // }
  return isValidate;
}
let healthycheck = true;
healthyBtn.addEventListener("click", function () {
  if (healthycheck === true) {
    // hiển thị thú cưng khỏe mạnh
    const healthyPetArr = [];
    for (let i = 0; i < petArr.length; i++) {
      if (petArr[i].vaccinated && petArr[i].dewormed && petArr[i].sterilized) {
        // thêm thú cưng thứ i đó vào mảng haelthyPetArr
        healthyPetArr.push(petArr[i]);
      }
    }
    //
    // gọi hàm hiển thị
    renderTableData(healthyPetArr);

    // sau đó đổi thành nút Show all pet
    healthyBtn.textContent = "Show All Pet";
    healthycheck = false;
  } else {
    renderTableData(petArr);
    healthyBtn.textContent = "Show Healthy Pet";
    healthycheck = true;
  }
});

calculateBmiBtn.onclick = function(){
  for (let i =0; i<petArr.length; i++){
    petArr[i].bmi = 
    petArr[i].type === 'Dog'
    ? ((petArr[i].weight)*703 /petArr[i].length**2).toFixed(2)
    : ((petArr[i].weight)*886 /petArr[i].length**2).toFixed(2);
  }

  renderTableData(petArr)

}
