import { property } from "../../../decorators";
import { wwd_Area } from "../../models/wwd_Area/wwd_Area";

const { KinematicBody, Vector3 } = godot;

export default class TygraviBody extends KinematicBody {
  @property({ default: Vector3.ZERO }) velocity: godot.Vector3;
  @property({ default: 0.1 }) margin: number;
  
  positionIsWithinMargin(translation: godot.Vector3) {
    const distanceFromTarget = this.translation.distance_to(translation);
    return distanceFromTarget <= this.margin;
  }
  
  increaseVelocity(amount: number) {
    //@ts-ignore
    this.velocity += amount;
  }
  
  decreaseVelocity(amount: number) {
    //@ts-ignore
    this.velocity -= amount;
  }
  
  zeroOutVelocity() {
    this.velocity = Vector3.ZERO;
  }
  
  resetPosition(translation: godot.Vector3) {
    this.translation = translation;
  }
}
