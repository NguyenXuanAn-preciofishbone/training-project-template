import { BaseModel } from '../model/_base-model';
import { UPLOAD_PATH, DELETE_PATH, PUT_PATH } from '../utilities/_route'
import { GET_PATH } from '../utilities/_route'

export function saveData(currentFormData: FormData) {
    console.log(currentFormData);
    console.log("at save data");

    $.ajax({
        url: UPLOAD_PATH,
        type: 'POST',
        data: currentFormData,
        processData: false,
        contentType: false,
        success: function (result) {
            console.log(result);
        }
    });
}

export function loadData(): any {
    return new Promise(function (resolve, reject) {
        fetch(GET_PATH)
            .then(response => {
                return response.json();
            })
            .then(data => {
                resolve(data);
            })
    });
}

export function deleteData(id:number) {
    console.log('in delete data function');
    $.ajax({
        url: DELETE_PATH + id,
        type: 'DELETE',
        processData: false,
        contentType: false,
        success: function (result) {
            console.log(result);
        }
    });
}

export function updateData(id:number, name: string) {
    console.log('in update data function');
    console.log(id);
    console.log(name);

    $.ajax({
        url: PUT_PATH + id + "/" + name,
        type: 'PUT',
        success: function(result) {
            console.log(result);
        }
      });
}
