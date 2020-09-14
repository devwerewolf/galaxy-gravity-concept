import { property } from "../../../decorators";
import TygraviBody from "../../scripts/Tygravi Body/TygraviBody";
import { GravityType } from "../GravityType/GravityType";

const { Area } = godot;

export class wwd_Area extends Area {
  @property({ default: 10 }) _gravity: number;
  @property({ default: GravityType.Attract }) _gravityType: GravityType;
  
  constructor() {
    super();
  }
  
  getOverlappingBodies<T>() {
    return this.get_overlapping_bodies() as T[];
  }
}