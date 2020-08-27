function callNewForm() {
    console.log("New");
}

function callUploadForm() {
    $('#Form').modal('show');
}

const btnNew = document.getElementById("btnNew");
btnNew?.addEventListener('click', callNewForm);

const btnUpload = document.getElementById("btnUpload");
btnUpload?.addEventListener('click', callUploadForm);