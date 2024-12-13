import { Make } from '../entities/Make';
import { Model } from '../entities/Model';

export interface VehicleRepo {
  getMakesForVehicleType(vehicleType: string): Promise<Make[]>;
  getModelsForMakeIdAndYear(makeId: number, year: number): Promise<Model[]>;
}
