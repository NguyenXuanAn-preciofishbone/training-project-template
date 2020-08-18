import { BaseModel } from "./_base-model";

class Folder extends BaseModel {

    private flag: string;

    constructor(id: Int16Array, type: string, name: string, modified: string, modifiedBy: string, path: string) {
        super(id, type, name, modified, modifiedBy, path);
        this.flag = "Folder";
    }
}