export class BaseModel{
    private fileType: string;
    private fileName: string;
    private dateModified: string;
    private modifiedBy: string;
    filePath: string;

    constructor(type: string, name: string, modified: string, modifiedBy: string, path: string){
        this.fileType = type;
        this.fileName = name;
        this.dateModified = modified;
        this.modifiedBy = modifiedBy;
        this.filePath = path;
    }
}