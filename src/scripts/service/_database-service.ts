import { BaseModel } from '../Model/_base-model';
import { DummyData } from '../data/_mockup-data';

export function saveData(basemodel: BaseModel) {
  if (localStorage.data) {
    const currentData = JSON.parse(
      localStorage.getItem('data') || '{}',
    );
    currentData.push(basemodel);
    localStorage.data = JSON.stringify(currentData);
  } else {
    const dataArray = [];
    dataArray[0] = basemodel;
    localStorage.data = JSON.stringify(dataArray);
  }
  console.log('Success saved data to local storage');
}

export function loadData(path: string) {
  const allData = JSON.parse(localStorage.getItem('data') || '{}');
  const filteredData: BaseModel[] = [];
  allData.forEach((element: BaseModel) => {
    if (element.filePath === path) filteredData.push(element);
  });
  return filteredData;
}

export function deleteData(id: Int16Array) {
  const allData = JSON.parse(localStorage.getItem('data') || '{}');
  const filteredData: BaseModel[] = [];
  allData.forEach((element: BaseModel) => {
    if (element.id != id) filteredData.push(element);
  });
  localStorage.data = JSON.stringify(filteredData);
  location.reload();
}

export function updateData(id: Int16Array, updatedRecord: BaseModel) {
  deleteData(id);
  saveData(updatedRecord);
  location.reload();
}
