import { VehicleRepo } from '../../domain/repositories/VehicleRepo';
import { Model } from '../../domain/entities/Model';

export class GetVehicleModelsUseCase {
  constructor(private repo: VehicleRepo) {}

  async execute(makeId: number, year: number): Promise<Model[]> {
    return this.repo.getModelsForMakeIdAndYear(makeId, year);
  }
}
