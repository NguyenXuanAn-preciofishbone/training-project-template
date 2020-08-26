export class BaseModel {
  id: Int16Array;

  type: string;

  name: string;

  dateModified: string;

  modifiedBy: string;

  path: string;

  constructor(
    id: Int16Array,
    type: string,
    name: string,
    modified: string,
    modifiedBy: string,
    path: string,
  ) {
    this.id = id;
    this.type = type;
    this.name = name;
    this.dateModified = modified;
    this.modifiedBy = modifiedBy;
    this.path = path;
  }
}
