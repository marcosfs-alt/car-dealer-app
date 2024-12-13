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
      <ul className="list-none p-4 border gap-4 flex flex-col">
        {models.map((m) => (
          <li key={m.Model_ID} className="border border-black p-4">
            <span className="font-bold">Model: </span>
            {m.Model_Name} <br />
            <span className="font-bold">Manufacturer:</span> {m.Make_Name}
          </li>
        ))}
      </ul>
    </div>
  );
}
