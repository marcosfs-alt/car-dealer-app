import { VehicleRepo } from '../../../domain/repositories/VehicleRepo';
import { Make } from '../../../domain/entities/Make';
import { Model } from '../../../domain/entities/Model';
import { VpicClient } from './VpicClient';

export class VehicleRepoImpl implements VehicleRepo {
  constructor(private vpicClient: VpicClient) {}

  async getMakesForVehicleType(vehicleType: string): Promise<Make[]> {
    const data = await this.vpicClient.getMakesForVehicleType(vehicleType);
    return data.Results.map((item) => ({
      MakeId: item.MakeId,
      MakeName: item.MakeName,
      VehicleTypeName: item.VehicleTypeName,
    }));
  }

  async getModelsForMakeIdAndYear(
    makeId: number,
    year: number
  ): Promise<Model[]> {
    const data = await this.vpicClient.getModelsForMakeIdYear(makeId, year);
    return data.Results.map((item) => ({
      MakeId: item.MakeId,
      MakeName: item.MakeName,
      Model_ID: item.Model_ID,
      Model_Name: item.Model_Name,
    }));
  }
}
