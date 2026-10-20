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