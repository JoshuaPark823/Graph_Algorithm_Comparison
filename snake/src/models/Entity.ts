export enum EntityType {
  Empty,
  Snake,
  Food,
  Wall
}

export default class Entity {

  private _type!: EntityType;

  constructor(type?: EntityType | undefined) {
    this._type = type ?? EntityType.Empty;
  }

  getType(): EntityType {
    return this._type;
  }

  setType(type: EntityType): void {
    this._type = type;
  }
}