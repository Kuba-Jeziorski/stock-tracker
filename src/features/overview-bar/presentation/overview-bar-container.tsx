import type { Detail, OverviewBarVariant } from "../domain/model";
import { OverviewBar } from "./overview-bar";

// <TData> declares a generic type parameter
type Props<TData> = {
  data: TData;
  mapToDetails: (data: TData) => Detail[];
  variant?: OverviewBarVariant;
};

// comma is needed so TData is not interpreted as a React Component
// <TData,> needs to be declared
export const OverviewBarContainer = <TData,>({
  data,
  mapToDetails,
  variant = "standard",
  // Previously declared <TData> can be then used
}: Props<TData>) => {
  return <OverviewBar variant={variant} details={mapToDetails(data)} />;
};
