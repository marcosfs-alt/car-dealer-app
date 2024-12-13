# Car Dealer App

This project is a Next.js application that allows users to filter vehicles by manufacturer (make) and model year, displaying the results on a separate page. The project follows Clean Architecture, React Patterns, and utilizes the Next.js 14 App Router, Tailwind CSS, and ESLint/Prettier.

## Overview

The application features:

- A home page to filter vehicles by manufacturer and year.
- A results page displaying the models returned by the vPIC API.

### User Workflow

1. The user selects a manufacturer (make) and the vehicle year.
2. Clicks "Next" to navigate to the results page.
3. The results page displays available models for the selected manufacturer and year.

## Architecture

The project is organized according to Clean Architecture principles, separating responsibilities into layers:

### **Domain**: Business Logic

- `domain/entities`: Contains entities like `Make` and `Model`.
- `domain/repositories`: Defines the `VehicleRepo` interface with methods for data retrieval.

### **Application**: Use Cases

- `application/usecases`: Use cases orchestrating business logic (e.g., `GetVehicleMakesUseCase`, `GetVehicleModelsUseCase`).

### **Infrastructure**: API Access

- `infrastructure/api/vpic`: Implements HTTP client (`VpicClient`) and `VehicleRepoImpl` for accessing external APIs.

### **UI (Presentation)**: User Interface

- `app`: Contains Next.js routes and pages.
  - `/`: Home page with filters.
  - `/result/[makeId]/[year]`: Results page.
- `components`: Reusable UI components (e.g., `Dropdown`, `FilterForm`).

## Technologies and Principles

- **Next.js 14 App Router**: Leverages Server Components, async pages, and routing.
- **Tailwind CSS**: Utility-first, responsive styling.
- **TypeScript**: Strong static typing for enhanced reliability.
- **Clean Architecture**: Clear separation of domain, application, infrastructure, and presentation layers.
- **ESLint and Prettier**: Code formatting and linting.

## Getting Started

### Prerequisites

- Node.js (>= 16.x)
- npm or yarn

### Installation

Clone the repository:

```bash
git clone https://github.com/marcosfs-alt/car-dealer-app.git
cd car-dealer-app
```

### Installation

Install dependencies:

```bash
npm install
# or
yarn
```

### Environment Setup

Create a `.env.local` file in the project root (use `.env.example` as reference):

```bash
NEXT_PUBLIC_API_URL=https://vpic.nhtsa.dot.gov/api/vehicles
```

### Running in Development

Start the development server:

```bash
npm run dev
```

### Folder Structure

- `src/app`: Next.js pages and routes (App Router).
- `src/application`: Use cases.
- `src/domain`: Domain entities and interfaces.
- `src/infrastructure`: Concrete implementations for data access (vPIC API).
- `src/components`: UI components (e.g., Dropdown, FilterForm).
- `src/styles/globals.css`: Global styles and Tailwind configuration.
- `public`: Static assets.
