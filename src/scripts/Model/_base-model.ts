export class BaseModel {

    name: string;

    modified: number;

    modifiedBy: string;

    type: string;

    path: string;

    fileData: any;

    constructor(
        name: string,
        modified: number,
        modifiedBy: string,
        type: string,
        path: string,
        fileData: any
    ) {
        this.name = name;
        this.modified = modified;
        this.modifiedBy = modifiedBy;
        this.type = type;
        this.path = path;
        this.fileData = fileData;
    }
}
