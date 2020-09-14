import { property } from "../../../decorators";
import { wwd_Area } from "../../models/wwd_Area/wwd_Area";

const { KinematicBody, Vector3 } = godot;

export default class TygraviBody extends KinematicBody {
  @property({ default: Vector3.ZERO }) _velocity: godot.Vector3;
  @property({ default: Vector3.ONE }) _target: godot.Vector3;
  @property({ default: 1 }) _margin: number;
  
  positionIsWithinMargin() {
    const distanceFromTarget = this.translation.distance_to(this._target);
    return distanceFromTarget <= this._margin;
  }
  
  increaseVelocity(amount: number) {
    //@ts-ignore
    this._velocity += amount;
  }
  
  decreaseVelocity(amount: number) {
    //@ts-ignore
    this._velocity -= amount;
  }
}
