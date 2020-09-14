import { wwd_Area } from "../../models/wwd_Area/wwd_Area";
import { GravityType } from "../../models/GravityType/GravityType";
import TygraviBody from "../Tygravi Body/TygraviBody";

const { print } = godot;

export default class GravitySphere extends wwd_Area {
  constructor() {
    super();
  }
  
  _physics_process(fixedDelta: number) {
    const bodies = this.getOverlappingBodies<TygraviBody>();
    
    for (let body of bodies) {
      if (body.positionIsWithinMargin(this.translation) === false) {
        // Figure out velocity offset
        const speed = fixedDelta * this.gravity;
        const target = this.translation;
        const direction = body.translation.direction_to(target);
        //@ts-ignore
        const velocityOffset: number = speed * direction;
        
        switch (this.gravityType) {
          case GravityType.Attract:
            body.increaseVelocity(velocityOffset);
            break;
          case GravityType.Repel:
            body.decreaseVelocity(velocityOffset);
            break;
        }
        
        body.move_and_slide(body.velocity);
      }
    }
  }
}