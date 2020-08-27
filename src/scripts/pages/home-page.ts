import ready from '../utilities/_helper';
import renderGrid from '../components/_grid';
import "../components/_form"
import "../components/_navigation"
import "../components/_header"
import { loadData } from '../service/_database-service'
import { DataFileMetaData } from '../model/_DataFileMetaData'

ready(() => {
    if (!sessionStorage.filePath) {
        sessionStorage.filePath = './';
    }
    const filePath = sessionStorage.filePath;

    loadData()
        .then((data: DataFileMetaData[]) => {
            renderGrid(data);
        });
});
