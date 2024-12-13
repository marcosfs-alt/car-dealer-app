/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Dropdown } from '../Dropdown/Dropdown';

export function FilterForm({
  makes,
  years,
}: {
  makes: any[];
  years: number[];
}) {
  const [selectedMakeId, setSelectedMakeId] = useState<number | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const handleMakeChange = (value: string) => {
    const val = parseInt(value, 10);
    setSelectedMakeId(isNaN(val) ? null : val);
  };

  const handleYearChange = (value: string) => {
    const val = parseInt(value, 10);
    setSelectedYear(isNaN(val) ? null : val);
  };

  const isButtonDisabled = !selectedMakeId || !selectedYear;

  return (
    <div className="space-y-4 flex flex-col items-center justify-center">
      <Dropdown
        label="Select Manufacturer"
        options={makes.map((make) => ({
          label: make.MakeName,
          value: make.MakeId.toString(),
        }))}
        onChange={handleMakeChange}
      />
      <Dropdown
        label="Select Year"
        options={years.map((y) => ({
          label: y.toString(),
          value: y.toString(),
        }))}
        onChange={handleYearChange}
      />

      <Link
        href={
          isButtonDisabled ? '#' : `/result/${selectedMakeId}/${selectedYear}`
        }
        className={`px-4 py-2 bg-blue-500 text-white rounded ${
          isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        Next
      </Link>
    </div>
  );
}
