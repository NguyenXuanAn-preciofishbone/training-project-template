import { BaseModel } from "../model/_base-model";
import { saveData } from "../service/_database-service";

var currentFormData: FormData;

function submit(event: Event) {
    if (currentFormData != null) {
        saveData(currentFormData);
    }
    else {
        console.log("No file inputed");
    }
}

const btnSubmit = document.getElementById('btnSubmit');
btnSubmit?.addEventListener('click', submit);

const inputFile = <HTMLInputElement>document.getElementById("fileItem");
inputFile.onchange = function (event) {
    var fileList = inputFile.files;
    if (fileList != null) {
        var formData = new FormData();
        formData.append('dataFile', fileList[0]);
        currentFormData = formData;
    }
}