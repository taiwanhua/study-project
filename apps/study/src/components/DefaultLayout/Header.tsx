import { FC, memo } from "react";
import Box, { BoxProps } from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Theme } from "@mui/material";
import Drawer from "./Drawer/Drawer";
import { useSX } from "hooks/useSX";

export interface Props {
  className?: string;
  sx?: BoxProps["sx"];
  menuConfigs: string[];
}

const Header: FC<Props> = ({ className, sx, menuConfigs }) => {
  const appBarSx = useSX(
    () => ({ zIndex: (theme: Theme) => theme.zIndex.drawer + 1 }),
    [],
  );

  const iconButtonSx = useSX(() => ({ marginRight: 2 }), []);

  return (
    <Box className={className} sx={sx}>
      <AppBar position="fixed" sx={appBarSx} color="default">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={iconButtonSx}
            disabled
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer menuConfigs={menuConfigs} />
    </Box>
  );
};

export default memo(Header);
