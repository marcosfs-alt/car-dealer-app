import React, { Suspense } from 'react';
import { VehicleRepoImpl } from '../infrastructure/api/vpic/VehicleRepoImpl';
import { VpicClient } from '../infrastructure/api/vpic/VpicClient';
import { GetVehicleMakesUseCase } from '../application/usecases/GetVehicleMakesUseCase';
import { FilterForm } from '@/components/FilterForm/FilterForm';

export default async function HomePage() {
  const vpicClient = new VpicClient();
  const vehicleRepo = new VehicleRepoImpl(vpicClient);
  const getMakesUseCase = new GetVehicleMakesUseCase(vehicleRepo);

  const makes = await getMakesUseCase.execute('car');

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 2014 }, (_, i) => 2015 + i);
  return (
    <div className="p-4 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Filter Vehicles</h1>
      <Suspense fallback={<div>Loading filters...</div>}>
        <FilterForm makes={makes} years={years} />
      </Suspense>
    </div>
  );
}
