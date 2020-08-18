export class BaseModel {
  id: Int16Array;

  fileType: string;

  fileName: string;

  dateModified: string;

  modifiedBy: string;

  filePath: string;

  constructor(
    id: Int16Array,
    type: string,
    name: string,
    modified: string,
    modifiedBy: string,
    path: string,
  ) {
    this.id = id;
    this.fileType = type;
    this.fileName = name;
    this.dateModified = modified;
    this.modifiedBy = modifiedBy;
    this.filePath = path;
  }
}
