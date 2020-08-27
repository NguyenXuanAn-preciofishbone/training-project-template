export class DataFileMetaData {

    id: number

    name: string

    createdBy: string

    dateModified: string

    constructor(
        id: number,
        name: string,
        createdBy: string,
        dateModified: string
    ) {
        this.id = id;
        this.name = name;
        this.createdBy = createdBy;
        this.dateModified = dateModified;
    }
}