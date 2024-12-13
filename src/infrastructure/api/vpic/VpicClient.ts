/* eslint-disable @typescript-eslint/no-explicit-any */
interface VpicResponse<T> {
  Count: number;
  Message: string;
  SearchCriteria?: string;
  Results: T[];
}

export class VpicClient {
  private baseUrl = 'https://vpic.nhtsa.dot.gov/api/vehicles';

  async getMakesForVehicleType(
    vehicleType: string
  ): Promise<VpicResponse<any>> {
    const res = await fetch(
      `${this.baseUrl}/GetMakesForVehicleType/${vehicleType}?format=json`
    );
    if (!res.ok) {
      throw new Error(`Failed to fetch makes for vehicle type: ${vehicleType}`);
    }
    return res.json();
  }

  async getModelsForMakeIdYear(
    makeId: number,
    year: number
  ): Promise<VpicResponse<any>> {
    const url = `${this.baseUrl}/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`;
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(
        `Failed to fetch models for makeId=${makeId} year=${year}`
      );
    }
    return res.json();
  }
}
