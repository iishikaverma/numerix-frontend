const API_BASE_URL = "http://localhost:8080";

export interface BisectionRequest {
  expression: string;
  a: number;
  b: number;
  tolerance: number;
}

export interface BisectionIteration {
  iteration: number;
  a: number;
  b: number;
  c: number;
  fc: number;
  error: number;
}

export interface BisectionResponse {
  root: number;
  error: number;
  iterations: number;
  converged: boolean;
  steps: BisectionIteration[];
}

export async function solveBisection(
  request: BisectionRequest
): Promise<BisectionResponse> {
  const response = await fetch(
    `${API_BASE_URL}/api/solve/bisection`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    }
  );

  if (!response.ok) {
    let message = "Failed to solve the problem.";

    try {
      const errorData = await response.json();

      if (errorData.error) {
        message = errorData.error;
      }
    } catch {
      // Keep default error message.
    }

    throw new Error(message);
  }

  return response.json();
}

export interface SecantRequest {
  expression: string;
  x0: number;
  x1: number;
  tolerance: number;
}

export interface SecantIteration {
  iteration: number;
  x0: number;
  x1: number;
  x2: number;
  fx2: number;
  error: number;
}

export interface SecantResponse {
  root: number;
  error: number;
  iterations: number;
  converged: boolean;
  steps: SecantIteration[];
}

export async function solveSecant(
  request: SecantRequest
): Promise<SecantResponse> {
  const response = await fetch(
    `${API_BASE_URL}/api/solve/secant`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    }
  );

  if (!response.ok) {
    let message = "Failed to solve the problem.";

    try {
      const errorData = await response.json();

      if (errorData.error) {
        message = errorData.error;
      }
    } catch {
      // Keep default error message.
    }

    throw new Error(message);
  }

  return response.json();
}

export interface NewtonRequest {
  expression: string;
  initialGuess: number;
  tolerance: number;
}

export interface NewtonIteration {
  iteration: number;
  x: number;
  fx: number;
  derivative: number;
  nextX: number;
  error: number;
}

export interface NewtonResponse {
  root: number;
  error: number;
  iterations: number;
  converged: boolean;
  steps: NewtonIteration[];
}

export async function solveNewton(
  request: NewtonRequest
): Promise<NewtonResponse> {
  const response = await fetch(
    `${API_BASE_URL}/api/solve/newton`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    }
  );

  if (!response.ok) {
    let message = "Failed to solve the problem.";

    try {
      const errorData = await response.json();

      if (errorData.error) {
        message = errorData.error;
      }
    } catch {
      // Keep default error message.
    }

    throw new Error(message);
  }

  return response.json();
}

export interface LagrangeRequest {
  x: number[];
  y: number[];
  targetX: number;
}

export interface LagrangeStep {
  index: number;
  basis: number;
  contribution: number;
}

export interface LagrangeResponse {
  value: number;
  steps: LagrangeStep[];
}

export async function solveLagrange(
  request: LagrangeRequest
): Promise<LagrangeResponse> {
  const response = await fetch(
    `${API_BASE_URL}/api/interpolate/lagrange`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    }
  );

  if (!response.ok) {
    let message = "Failed to solve the problem.";

    try {
      const errorData = await response.json();

      if (errorData.error) {
        message = errorData.error;
      }
    } catch {
      // Keep default error message.
    }

    throw new Error(message);
  }

  return response.json();
}