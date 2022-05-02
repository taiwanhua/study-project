import React, { FC, useMemo } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as yup from "yup";
import Grid from "@mui/material/Grid";

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  cellphone: yup
    .string()
    .length(10, "Password should be of 10 characters length")
    .required("Cellphone is required"),
  adress: yup.string().required("Address is required"),
});

interface InitialValue {
  name: string;
  cellphone: string;
  adress: string;
  memo: string;
}

export default function OneTableAdd() {
  const formik = useFormik<InitialValue>({
    initialValues: {
      name: "",
      cellphone: "",
      adress: "",
      memo: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const inputLabel = useMemo(
    () => ({
      shrink: true,
    }),
    [],
  );

  return (
    <Box component="form" onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            fullWidth
            name="name"
            label="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            InputLabelProps={inputLabel}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            name="cellphone"
            label="Cellphone"
            type="tel"
            value={formik.values.cellphone}
            onChange={formik.handleChange}
            error={formik.touched.cellphone && Boolean(formik.errors.cellphone)}
            helperText={formik.touched.cellphone && formik.errors.cellphone}
            InputLabelProps={inputLabel}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            name="address"
            label="Address"
            value={formik.values.adress}
            onChange={formik.handleChange}
            error={formik.touched.adress && Boolean(formik.errors.adress)}
            helperText={formik.touched.adress && formik.errors.adress}
            InputLabelProps={inputLabel}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            name="memo"
            label="Memo"
            value={formik.values.memo}
            onChange={formik.handleChange}
            error={formik.touched.memo && Boolean(formik.errors.memo)}
            helperText={formik.touched.memo && formik.errors.memo}
            InputLabelProps={inputLabel}
          />
        </Grid>
        <Grid xs={12} textAlign="center" padding={2}>
          <Button color="primary" variant="contained" type="submit">
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
