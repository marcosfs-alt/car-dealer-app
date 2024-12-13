import { VehicleRepo } from '../../domain/repositories/VehicleRepo';
import { Make } from '../../domain/entities/Make';

export class GetVehicleMakesUseCase {
  constructor(private repo: VehicleRepo) {}

  async execute(vehicleType: string): Promise<Make[]> {
    return this.repo.getMakesForVehicleType(vehicleType);
  }
}
