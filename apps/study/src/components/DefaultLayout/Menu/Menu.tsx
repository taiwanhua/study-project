import MenuItem from "@mui/material/MenuItem";
import List, { ListProps } from "@mui/material/List";
import { FC, memo } from "react";
import { Link } from "react-router-dom";
export interface Props {
  className?: string;
  sx?: ListProps["sx"];
  menuConfigs: string[];
}

const Menu: FC<Props> = ({ className, menuConfigs }) => {
  return (
    <List className={className}>
      {menuConfigs.map((menuConfig) => (
        <MenuItem key={menuConfig} component={Link} to={`/${menuConfig}`}>
          {menuConfig}
        </MenuItem>
      ))}
    </List>
  );
};

export default memo(Menu);
