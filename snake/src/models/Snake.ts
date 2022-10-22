import Entity, { EntityType } from "./Entity";

export default class Snake extends Entity {
  constructor() {
    super(EntityType.Snake)
  }
}