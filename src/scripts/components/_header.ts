function pathBack() {
    //if (sessionStorage.filePath != "./") {
    //    let filePath: string = sessionStorage.filePath;
    //    let splited: string[] = filePath.split("/");
    //    let newFilePath: string = "";
    //    for (let i = 0; i < splited.length - 2; i++) {
    //        newFilePath += splited[i];
    //        newFilePath += "/";
    //    }
    //    sessionStorage.filePath = newFilePath;
    //    console.log(sessionStorage.filePath);

    //} else {
    //    console.log("At root");
    //}
    //location.reload();
    console.log("Back");
}

var headerFilePath = <HTMLElement>document.getElementById('headerFilePath');
headerFilePath.innerHTML = sessionStorage.filePath;

const btnBack = document.getElementById('btnBack');
btnBack?.addEventListener('click', pathBack);