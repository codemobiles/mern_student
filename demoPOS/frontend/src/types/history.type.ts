export interface HistoryProp {
  goBack: () => void;
  push: (path: string) => void;
}
