import { BaseModel } from "../model/_base-model";
import { saveData, updateData } from "../service/_database-service";
import { identity } from "lodash";

var currentFormData: FormData;

function submitUpload(event: Event) {
    console.log("upload submit button clicked");
    console.log(event);
    if (currentFormData != null) {
        saveData(currentFormData);
    }
    else {
        console.log("No file inputed");
    }
}

function submitUpdate(event: Event) {
    console.log("update submit button clicked");
    const tfNewFileName = <HTMLInputElement>document.getElementById("newFileName");
    var newName: string = tfNewFileName.value;
    var id = parseInt(<string>$('#updateForm').attr('data-id'));
    updateData(id, newName);
}

const btnUploadSubmit = document.getElementById('btnUploadSubmit');
btnUploadSubmit?.addEventListener('click', submitUpload);

const btnUpdateSubmit = document.getElementById("btnUpdateSubmit");
btnUpdateSubmit?.addEventListener('click', submitUpdate);

const inputFile = <HTMLInputElement>document.getElementById("fileItem");
inputFile.onchange = function (event) {
    var fileList = inputFile.files;
    if (fileList != null) {
        var formData = new FormData();
        formData.append('dataFile', fileList[0]);
        currentFormData = formData;
    }
}