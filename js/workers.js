function showAddEmployeeForm() {
    const employeeForm = document.querySelector('.employee-form');
    employeeForm.style.display = 'block';
}

function addEmployee() {
    const employeeName = document.getElementById('employeeName').value;
    const employeePhone = document.getElementById('employeePhone').value;
    const employeeJob = document.getElementById('employeeJob').value;

    
    console.log("Çalışan eklendi:");
    console.log("İsim: " + employeeName);
    console.log("Telefon: " + employeePhone);
    console.log("İş: " + employeeJob);

    
    document.getElementById('employeeName').value = '';
    document.getElementById('employeePhone').value = '';
    document.getElementById('employeeJob').value = '';

    const employeeForm = document.querySelector('.employee-form');
    employeeForm.style.display = 'none';
}