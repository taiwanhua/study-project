import React, { useMemo } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useOneTableList } from "hooks/useOneTableList";
import Grid from "@mui/material/Grid";
import { IconButton } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import SearchIcon from "@mui/icons-material/Search";

export default function OneTable() {
  const { data } = useOneTableList();

  const tableRowSx = useMemo(
    () => ({ "&:last-child td, &:last-child th": { border: 0 } }),
    [],
  );

  if (!data) return <>Loading...</>;

  return (
    <>
      <Grid container>
        <Grid item xs>
          filters
        </Grid>
        <Grid item xs="auto">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton href="onetable/add">
            <AddBoxIcon />
          </IconButton>
        </Grid>
      </Grid>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Cellphone</TableCell>
              <TableCell align="right">Address</TableCell>
              <TableCell align="right">Memo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id} sx={tableRowSx}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.id}</TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.cellphone}</TableCell>
                <TableCell align="right">{row.adress}</TableCell>
                <TableCell align="right">{row.memo}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
