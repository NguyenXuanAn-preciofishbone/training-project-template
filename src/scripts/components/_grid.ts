import { saveData } from '../service/_database-service';
import { loadData } from '../service/_database-service';
import { deleteData } from '../service/_database-service';
import { BaseModel } from '../model/_base-model';

const renderGrid = (data: BaseModel[]) => {
    // TODO: implement code to Render grid
    var table = <HTMLElement>document.getElementById('table');
    data.forEach((element: BaseModel) => {
        if (element.type == "folder") {
            const tableRow = `
            <tr class="folderRecord" data-name="${element.name}">
                <td class="text-right">
                    <i class="ms-Icon ms-Icon--FabricFolder"></i>
                </td>
                <td>${element.name}</td>
                <td>${element.dateModified}</td>
                <td>${element.modifiedBy}</td>
                <td>
                    <button class="updateButton" data-id="${element.id}">update</button>
                    <button class="deleteButton" data-id="${element.id}">delete</button>
                </td>
            </tr>
            `;
            table.innerHTML += tableRow;
        } else {
            const tableRow = `
            <tr>
                <td class="text-right">
                    <i class="ms-Icon ms-Icon--OpenFile"></i>
                </td>
                <td>${element.name}</td>
                <td>${element.dateModified}</td>
                <td>${element.modifiedBy}</td>
                <td>
                    <button class="updateButton" data-id="${element.id}">update</button>
                    <button class="deleteButton" data-id="${element.id}">delete</button>
                </td>
            </tr>
        `;
            table.innerHTML += tableRow;
        }
    })

    $('.updateButton').click(function (event) {
        $('#form').modal('show');
        deleteData($(this).data('id'));
    })

    $('.deleteButton').click(function (event) {
        deleteData($(this).data('id'));
        event.stopPropagation();
        location.reload();
    })

    $('.folderRecord').click(function (event) {
        sessionStorage.filePath += $(this).data('name') + "/";
        console.log('folder clicked');
        console.log(sessionStorage.filePath);
        location.reload();
    })

    $('#tfType').change(function (event) {
        console.log('type changed');
    })
}

function validateInput(
    type: string,
    name: string,
    modified: string,
    modifiedBy: string,
): boolean {
    if (
        type === '' ||
        name === '' ||
        modified === '' ||
        modifiedBy === ''
    ) {
        console.log('Please input all required field');
        return false;
    }
    console.log('Input validated');
    return true;
}

function optionSelected() {
    console.log("hello world");
}

function callAddForm(): void {
    $('#form').modal('show');
}

function submit(): void {
    const path: string = sessionStorage.filePath;
    const tfType = <string>$('#tfType').val();
    const tfName = <string>$('#tfName').val();
    const tfModified = <string>$('#tfModified').val();
    const tfModifiedBy = <string>$('#tfModifiedBy').val();
    if (!localStorage.id) {
        localStorage.id = 0;
    } else {
        localStorage.id += 1;
    }
    const id = localStorage.id;
    if (validateInput(tfType, tfName, tfModified, tfModifiedBy)) {
        const created: BaseModel = new BaseModel(id, tfType, tfName, tfModified, tfModifiedBy, path);
        saveData(created);
    }
}

function pathBack() {
    if (sessionStorage.filePath != "./") {
        let filePath: string = sessionStorage.filePath;
        let splited: string[] = filePath.split("/");
        let newFilePath: string = "";
        for (let i = 0; i < splited.length - 2; i++) {
            newFilePath += splited[i];
            newFilePath += "/";
        }
        sessionStorage.filePath = newFilePath;
        console.log(sessionStorage.filePath);

    } else {
        console.log("At root");
    }
    location.reload();
}

const btnSubmit = document.getElementById('btnSubmit');
btnSubmit?.addEventListener('click', submit);

const btnAdd = document.getElementById('btnAdd');
btnAdd?.addEventListener('click', callAddForm);

const btnBack = document.getElementById('btnBack');
btnBack?.addEventListener('click', pathBack);

export default renderGrid;
