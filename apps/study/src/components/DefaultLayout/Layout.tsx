import { FC, memo, PropsWithChildren } from "react";
import Box, { BoxProps } from "@mui/material/Box";
import Header from "./Header"; 
import { Toolbar } from "@mui/material"; 
import { useSX } from "../../hooks/useSX";


export type Props = PropsWithChildren<{
  className?: string;
  sx?: BoxProps["sx"];
  pageTitle?: string;
  menuConfigs: [];
}>;

const Layout: FC<Props> = ({
  className,
  sx,
  children,
  menuConfigs = [],
  pageTitle,
}) => {
  const boxSx = useSX(() => ({ display: "flex", ...sx }), [sx]);
  const mainBoxSx = useSX(() => ({ flexGrow: 1, padding: 3 }), []);

  return (
    <Box className={className} sx={boxSx}>
      <Header menuConfigs={menuConfigs} />
      <Box component="main" sx={mainBoxSx}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default memo(Layout);
