import Entity, { EntityType } from "./Entity";

export default class Food extends Entity {

  constructor() {
    super(EntityType.Food);
  }

  /**
   * TODO
   */
  consume(): void {
  }
}