import ready from '../utilities/_helper';
import renderGrid from '../components/_grid';
import { loadData } from '../service/_database-service'
import { BaseModel } from '../model/_base-model'

ready(() => {
    if (!sessionStorage.filePath) {
        sessionStorage.filePath = './';
    }
    const filePath = sessionStorage.filePath;

    var headerFilePath = <HTMLElement>document.getElementById('headerFilePath');
    headerFilePath.innerHTML = filePath;

    const data = loadData()
        .then((data: BaseModel[]) => {
            renderGrid(data);
        });
});
