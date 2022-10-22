import Entity, { EntityType } from "./Entity";

class Tile {

  private _entity!: Entity;

  constructor() {
    this._entity = new Entity();
  }

  getEntity(): Entity {
    return this._entity;
  }

  setEntity(entity: Entity): void {
    this._entity = entity;
  }

  isEmpty(): boolean {
    return this._entity.getType() !== EntityType.Empty;
  }
}

export default Tile