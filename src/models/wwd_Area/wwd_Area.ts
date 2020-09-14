import { property } from "../../../decorators";
import { GravityType } from "../GravityType/GravityType";

const { Area } = godot;

export class wwd_Area extends Area {
  @property({ default: 10 }) gravity: number;
  @property({ default: GravityType.Attract }) gravityType: GravityType;
  
  get shapes() {
    const shapeOwnerIDs = this.get_shape_owners() as number[];
    
    const allShapes: godot.Shape[][] = shapeOwnerIDs.map(ownerID => {
      const shapeCount = this.shape_owner_get_shape_count(ownerID);
      let shapes = [];
      
      for (let shapeID = 0; shapeID < shapeCount; shapeID++) {
        const shape = this.shape_owner_get_shape(ownerID, shapeID);
        shapes.push(shape);
      }
      
      return shapes;
    });
    
    return allShapes.flat();
  }
  
  get shape() {
    return this.shapes[0];
  }
  
  constructor() {
    super();
  }
  
  getOverlappingBodies<T>() {
    return this.get_overlapping_bodies() as T[];
  }
}