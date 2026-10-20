# NUMERIX

### Interactive Numerical Computing, Simplified.

NUMERIX is an interactive numerical methods solver that provides numerical solutions along with detailed iteration and calculation steps.

It combines a modern web interface with a C++ computational backend to make numerical methods easier to use, understand, and explore.

---

## Features

- Interactive numerical method solvers
- Step-by-step calculation results
- Iteration tables for root-finding methods
- Interpolation point management
- Input validation and error handling
- Responsive user interface
- C++ numerical computation engine
- REST API communication between frontend and backend

---

## Numerical Methods

NUMERIX currently supports five numerical methods.

### 1. Bisection Method

Finds a root of a function by repeatedly dividing a given interval into two halves.

**Input:**
- Function `f(x)`
- Lower bound `a`
- Upper bound `b`
- Tolerance

**Output:**
- Approximate root
- Number of iterations
- Error
- Convergence status
- Iteration table

---

### 2. Secant Method

Approximates a root using two initial guesses and successive secant-line calculations.

**Input:**
- Function `f(x)`
- Initial value `x₀`
- Initial value `x₁`
- Tolerance

**Output:**
- Approximate root
- Number of iterations
- Error
- Convergence status
- Iteration table

---

### 3. Newton-Raphson Method

Uses tangent-line approximations and the derivative of the function to find a root.

**Input:**
- Function `f(x)`
- Initial guess
- Tolerance

The derivative is generated automatically from the entered expression.

**Output:**
- Approximate root
- Number of iterations
- Error
- Convergence status
- Iteration table

---

### 4. Lagrange Interpolation

Constructs an interpolation polynomial from known data points and estimates the value at a target `x`.

**Input:**
- X values
- Y values
- Target X

**Output:**
- Interpolated value
- Lagrange basis calculations
- Individual point contributions

---

### 5. Newton's Divided Difference

Constructs an interpolation polynomial using a divided-difference table.

**Input:**
- X values
- Y values
- Target X

**Output:**
- Interpolated value
- Divided-difference table
- Calculation results

---

## Tech Stack

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Recharts

### Backend

- C++
- C++17
- Crow HTTP Framework
- CMake

### Communication

The frontend communicates with the C++ backend through HTTP REST API endpoints using JSON.

---

## Architecture

```text
┌──────────────────────────────┐
│          NUMERIX UI          │
│     React + TypeScript       │
│                              │
│  Home → Methods → Solver     │
└──────────────┬───────────────┘
               │
               │ HTTP / JSON
               ▼
┌──────────────────────────────┐
│        C++ REST API          │
│            Crow              │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│     Numerical Engine         │
│                              │
│  Bisection                   │
│  Secant                      │
│  Newton-Raphson              │
│  Lagrange                    │
│  Newton Divided Difference   │
└──────────────────────────────┘
````

---

## Project Structure

The project is divided into two main repositories.

### Frontend
```
numerix-frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── effects/
│   │   ├── home/
│   │   ├── layout/
│   │   ├── methods/
│   │   └── solver/
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Methods.tsx
│   │   ├── Bisection.tsx
│   │   ├── Secant.tsx
│   │   ├── NewtonRaphson.tsx
│   │   ├── Lagrange.tsx
│   │   └── DividedDifference.tsx
│   ├── services/
│   │   └── api.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .env.example
├── package.json
└── README.md
```

### Backend
```
numerix-backend/
├── include/
│   ├── algorithms/
│   ├── apis/
│   └── utils/
├── src/
│   ├── algorithms/
│   ├── apis/
│   ├── utils/
│   └── main.cpp
├── tests/
├── CMakeLists.txt
└── README.md
```

---

## Getting Started

### Prerequisites

Make sure the following are installed:

- Node.js
- npm
- C++ compiler with C++17 support
- CMake
- vcpkg

---

# Frontend Setup

Clone the repository and enter the frontend directory:
```
git clone <your-frontend-repository-url>
cd numerix-frontend
```

Install dependencies:
```
npm install
```

Create a `.env` file in the project root:
```
VITE_API_BASE_URL=http://localhost:8080
```

Start the development server:
```
npm run dev
```

The frontend will normally be available at:
```
http://localhost:5173
```

---

# Backend Setup

Clone the backend repository:
```
git clone <your-backend-repository-url>
cd numerix-backend
```

Configure the project using CMake and the vcpkg toolchain.

Example:
```
cmake .. -DCMAKE_TOOLCHAIN_FILE=C:/vcpkg/scripts/buildsystems/vcpkg.cmake -DVCPKG_TARGET_TRIPLET=x64-mingw-dynamic
```

Build the project:
```
cmake --build .
```

Start the backend server:
```
.\numerix_backend.exe
```

The API server runs on:
```
http://localhost:8080
```

---

## API Endpoints

### Root Finding
```
POST /api/solve/bisection
POST /api/solve/secant
POST /api/solve/newton
```

### Interpolation
```
POST /api/interpolate/lagrange
POST /api/interpolate/divided-difference
```

---

## Example Request

### Bisection
```
{
  "expression": "x^3 - x - 2",
  "a": 1,
  "b": 2,
  "tolerance": 0.0001
}
```

### Newton-Raphson
```
{
  "expression": "x^3 - x - 2",
  "initialGuess": 1.5,
  "tolerance": 0.0001
}
```

### Lagrange Interpolation
```
{
  "x": [1, 2, 3, 4],
  "y": [1, 4, 9, 16],
  "targetX": 2.5
}
```

---

## Expression Support

The expression parser supports:

- Numbers
- Variable `x`
- Addition `+`
- Subtraction `-`
- Multiplication `*`
- Division `/`
- Power `^`
- Parentheses

Example:
```
x^3 - x - 2
```

---

## Error Handling

NUMERIX validates user input before sending calculations to the numerical engine.

Examples of validation include:

- Missing input values
- Invalid numerical values
- Invalid intervals
- Non-positive tolerance
- Duplicate interpolation X values
- Mismatched X and Y data
- Insufficient interpolation points

---

## Development

Run the frontend development server:
```
npm run dev
```

Run the frontend production build:
```
npm run build
```

Run linting:
```
npm run lint
```

---

## License

This project is intended for educational and demonstration purposes.