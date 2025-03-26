
var endpoint: string = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function callApi<TResponse, TPayload extends Record<string, unknown> = Record<string, unknown>> (
  path: string,
  method: 'GET' | 'PATCH' | 'POST' | 'DELETE',
  data?: TPayload,
  needToken: boolean = true,
  contentType?: string,
): Promise<TResponse> {

  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL!;
  const token = localStorage.getItem("authToken");

  let url = `${baseUrl}${path}`;

  if (method === 'GET' && data) {
    url += `?` + new URLSearchParams(data as Record<string, string>).toString();
  }

  const payload: RequestInit = {
    method,
    headers: {
      ...(needToken && { Authorization: `Bearer ${token}` }),
      ...(method !== "GET" && !contentType && !(data instanceof FormData) && {
        "Content-Type": "application/json",
      }),
      ...(method !== "GET" && contentType && {
        "Content-Type": contentType,
      }),
    },
    ...(method !== "GET" && data && {
      body: data instanceof FormData ? data : JSON.stringify(data),
    }),
  };

  const response = await fetch(url, payload);

  if (method === "DELETE") {
    return [] as TResponse;
  }

  return await response.json() as TResponse;
}
