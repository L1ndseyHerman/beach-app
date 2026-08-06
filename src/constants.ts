export const Role = {
  ScubaDiver: 0,
  Swimmer: 1,
  Mermaid: 2,
} as const;

export interface User {
  username: string;
  password: string;
  role: (typeof Role)[keyof typeof Role];
}
