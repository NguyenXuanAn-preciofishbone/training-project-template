import { BaseModel } from "./_base-model";

class Folder extends BaseModel{

    private flag: string;

    constructor(type: string, name: string, modified: string, modifiedBy: string){
        super(type, name, modified, modifiedBy);
        this.flag = "Folder";
    }
}