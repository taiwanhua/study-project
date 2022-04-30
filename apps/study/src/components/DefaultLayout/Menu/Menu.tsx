import { MenuItem } from "@mui/material";
import List, { ListProps } from "@mui/material/List";
import { FC, memo } from "react"; 

export interface Props {
  className?: string;
  sx?: ListProps["sx"];
  menuConfigs: [];
}

const Menu: FC<Props> = ({ className, menuConfigs }) => {

  return (
    <List className={className}>
      {menuConfigs.map((menuConfig: []) => (
        <MenuItem>
        any
        </MenuItem>
      ))}
    </List>
  );
};

export default memo(Menu);
