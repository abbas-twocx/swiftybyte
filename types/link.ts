export interface ILink {
  children: React.ReactNode;
  url?: string;
  type?: "primary" | "secondary";
  loading?: boolean;
  newTab?: boolean;
}
