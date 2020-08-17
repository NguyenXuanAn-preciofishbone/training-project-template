export class  BaseModel{
    private type: string;
    private name: string;
    private modified: string;
    private modifiedBy: string;

    constructor(type: string, name: string, modified: string, modifiedBy: string){
        this.type = type;
        this.name = name;
        this.modified = modified;
        this.modifiedBy = modifiedBy;
    }
}