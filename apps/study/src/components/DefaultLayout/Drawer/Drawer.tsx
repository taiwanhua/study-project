import { FC, memo } from "react";
import Box, { BoxProps } from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import MUIDrawer from "@mui/material/Drawer";
import { useSX } from "hooks/useSX";
import Menu from "../Menu/Menu";
import { MenuItem } from "@mui/material";

export interface Props {
  className?: string;
  sx?: BoxProps["sx"];
  menuConfigs: string[];
}

const drawerWidth = 240;

const Drawer: FC<Props> = ({ className, sx, menuConfigs }) => {
  const MUIDrawerSx = useSX(
    () => ({
      width: drawerWidth,
      flexShrink: 0,
      [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      ...sx,
    }),
    [sx],
  );
  const boxSx = useSX(() => ({ overflow: "auto" }), []);
  const serviceSelectSx = useSX(() => ({ padding: 1 }), []);

  return (
    <MUIDrawer
      className={className}
      open={true}
      // onClose={handleDrawerClose}
      // variant={lgWidthMatch ? "permanent" : "temporary"}
      variant="permanent"
      sx={MUIDrawerSx}
    >
      <Toolbar />
      <Box sx={boxSx}>
        <Menu menuConfigs={menuConfigs} />
      </Box>
    </MUIDrawer>
  );
};

export default memo(Drawer);
