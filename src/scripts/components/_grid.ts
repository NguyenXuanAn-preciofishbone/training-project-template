import { DataFileMetaData } from '../model/_DataFileMetaData'
import { deleteData, updateData } from '../service/_database-service';

const renderGrid = (data: DataFileMetaData[]) => {
    // TODO: implement code to Render grid
    
    var table = <HTMLElement>document.getElementById('table');
    data.forEach((element: DataFileMetaData) => {
        // if (element.type == "folder") {
        //     const tableRow = `
        //     <tr class="folderRecord" data-name="${element.name}">
        //         <td class="text-right">
        //             <i class="ms-Icon ms-Icon--FabricFolder"></i>
        //         </td>
        //         <td>${element.name}</td>
        //         <td>${element.modified}</td>
        //         <td>${element.modifiedBy}</td>
        //         <td>
        //             <button class="updateButton" data-id="${element.id}">update</button>
        //             <button class="deleteButton" data-id="${element.id}">delete</button>
        //         </td>
        //     </tr>
        //     `;
        //     table.innerHTML += tableRow;
        // } else {
            const tableRow = `
            <tr>
                <td class="text-right">
                    <i class="ms-Icon ms-Icon--OpenFile"></i>
                </td>
                <td><a href="https://localhost:44395/api/datafile/download/${element.id}">${element.name}</a></td>
                <td>${element.dateModified}</td>
                <td>${element.createdBy}</td>
                <td>
                    <button class="updateButton" data-id="${element.id}" data-name="${element.name}">update</button>
                    <button class="deleteButton" data-id="${element.id}">delete</button>
                </td>
            </tr>
        `;
            table.innerHTML += tableRow;
        })
    // })

    $('.updateButton').click(function () {
        console.log('update button clicked');
        $('#updateForm').attr('data-id',$(this).data('id'));
        $('#updateForm').modal('show');
    })

    $('.deleteButton').click(function () {
        console.log('delete button click');
        deleteData($(this).data('id'));
        location.reload();
    })

    // $('.folderRecord').click(function () {
    //     console.log('folder clicked');
    // })
    
}

export default renderGrid;
