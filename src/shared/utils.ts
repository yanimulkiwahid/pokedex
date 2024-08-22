export const fetcher = (...args: Parameters<typeof fetch>) => fetch(...args).then((res) => res.json());

export const statName = {
  0: "HP",
  1: "ATK",
  2: "DEF",
  3: "SpA",
  4: "SpD",
  5: "SPD"
}
