import { saveData } from '../service/_database-service';
import { loadData } from '../service/_database-service';
import { deleteData} from '../service/_database-service';
import { BaseModel } from '../Model/_base-model';

const renderGrid = (filePath: string) => {
  // TODO: implement code to Render grid

  // file path in header
  var headerFilePath = <HTMLElement>document.getElementById('headerFilePath');
  headerFilePath.innerHTML = filePath;

  // table
  var data: BaseModel[] = loadData(filePath);
  var table = <HTMLElement>document.getElementById('table');
  data.forEach((element: BaseModel) => {
    if (element.fileType == "folder") {
      const tableRow = `
      <tr class="folderRecord" data-name="${element.fileName}">
        <td class="text-right">
          <i class="ms-Icon ms-Icon--FabricFolder"></i>
        </td>
        <td>${element.fileName}</td>
        <td>${element.dateModified}</td>
        <td>${element.modifiedBy}</td>
        <td>
          <button>update</button>
          <button>delete</button>
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
        <td>${element.fileName}</td>
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

  $('.updateButton').click(function(){
    console.log($(this).data('id'));
  })

  $('.deleteButton').click(function(){
    deleteData($(this).data('id'));
  })

  console.log($('.folderrecord'))

  $('.folderRecord').click(function(){
    sessionStorage.filePath += $(this).data('name')+"/";
    console.log('folder clicked');
    console.log(sessionStorage.filePath);
    location.reload();
  })
  
};

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

const btnSubmit = document.getElementById('btnSubmit');
btnSubmit?.addEventListener('click', submit);

const btnAdd = document.getElementById('btnAdd');
btnAdd?.addEventListener('click', callAddForm);

export default renderGrid;
