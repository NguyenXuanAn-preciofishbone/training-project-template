import { saveData } from '../service/_database-service';
import { BaseModel } from '../Model/_base-model';

const renderGrid = () => {
  // TODO: implement code to Render grid
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

function submit(e: any): void {
  e.preventDefault();
  const path: string =".";
  const tfType = <string>$('#tfType').val();
  const tfName = <string>$('#tfName').val();
  const tfModified = <string>$('#tfModified').val();
  const tfModifiedBy = <string>$('#tfModifiedBy').val();
  if (validateInput(tfType, tfName, tfModified, tfModifiedBy)) {
    const created: BaseModel = new BaseModel(tfType,tfName, tfModified, tfModifiedBy, path);
    saveData(created);
  }
}

const btnSubmit = document.getElementById('btnSubmit');
btnSubmit?.addEventListener('click', submit);

const btnAdd = document.getElementById('btnAdd');
btnAdd?.addEventListener('click', callAddForm);

export default renderGrid;
