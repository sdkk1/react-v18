// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetchDelay = (ms: number): Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}
