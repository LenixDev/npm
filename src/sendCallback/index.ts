declare const GetParentResourceName: () => string

export default async <T = unknown>(callback: string, ...args: any[]): Promise<T> => {
  const response = await fetch(`https://${GetParentResourceName()}/${callback}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(args),
  })
  return await response.json()
}