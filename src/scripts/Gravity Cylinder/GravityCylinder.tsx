import { wwd_Area } from "../../models/wwd_Area/wwd_Area";
import { GravityType } from "../../models/GravityType/GravityType";
import TygraviBody from "../Tygravi Body/TygraviBody";
import { property } from "../../../decorators";

const { print } = godot;

export enum CylinderGravityType {
  Height,
  Radius
}

export default class GravityCylinder extends wwd_Area {
  @property({ default: CylinderGravityType.Height }) cylinderGravityType: CylinderGravityType;
  
  constructor() {
    super();
  }
  
  _ready() {
    const cylinderShape = this.shape as godot.CylinderShape;
    print(cylinderShape.height);
  }
  
  _physics_process(fixedDelta: number) {
    const bodies = this.getOverlappingBodies<TygraviBody>();
    
    for (let body of bodies) {
      const speed = fixedDelta * this.gravity;
      let target: godot.Vector3;
      let direction: godot.Vector3;
      
      switch (this.cylinderGravityType) {
        case CylinderGravityType.Height:
          break;
        case CylinderGravityType.Radius:
          break;
      }
    }
  }
}