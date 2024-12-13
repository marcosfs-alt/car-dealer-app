import { VehicleRepoImpl } from '../../../../infrastructure/api/vpic/VehicleRepoImpl';
import { VpicClient } from '../../../../infrastructure/api/vpic/VpicClient';
import { GetVehicleModelsUseCase } from '../../../../application/usecases/GetVehicleModelsUseCase';

type Props = {
  params: {
    makeId: string;
    year: string;
  };
};

export default async function ResultPage({ params }: Props) {
  const { makeId, year } = params;

  const vpicClient = new VpicClient();
  const vehicleRepo = new VehicleRepoImpl(vpicClient);
  const getModelsUseCase = new GetVehicleModelsUseCase(vehicleRepo);

  const models = await getModelsUseCase.execute(
    parseInt(makeId, 10),
    parseInt(year, 10)
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        Models for Make {makeId} - {year}
      </h1>
      {models.length === 0 && <div>No models found</div>}
      <ul className="list-disc pl-4">
        {models.map((m) => (
          <li key={m.Model_ID}>{m.Model_Name}</li>
        ))}
      </ul>
    </div>
  );
}
