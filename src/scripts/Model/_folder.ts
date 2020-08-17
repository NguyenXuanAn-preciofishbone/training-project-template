import { BaseModel } from "./_base-model";

class Folder extends BaseModel {

    private flag: string;

    constructor(type: string, name: string, modified: string, modifiedBy: string, path: string) {
        super(type, name, modified, modifiedBy, path);
        this.flag = "Folder";
    }
}