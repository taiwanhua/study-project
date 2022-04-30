import { BoxProps } from "@mui/material/Box";
import { useMemo, DependencyList } from "react";

export const useSX = (
  handle: () => BoxProps["sx"],
  compare?: DependencyList
): BoxProps["sx"] => useMemo<BoxProps["sx"]>(handle, compare); // eslint-disable-line react-hooks/exhaustive-deps
