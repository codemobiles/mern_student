import { Box, Button, TextField } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { Link, useNavigate } from "react-router-dom";
import { addProduct } from "@/store/slices/stockSlice";
import { useAppDispatch } from "@/store/store";
import { Product } from "@/types/product.type";

import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { CropDin } from "@mui/icons-material";

const formValidateSchema = Yup.object().shape({
  name: Yup.string().required("Name is required").trim(),
  price: Yup.number().min(100, "Number must be greater than 100"),
  stock: Yup.number().min(100, "Number must be greater than 100"),
});

export default function StockCreatePage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const initialValue: Product = { name: "XXX", price: 1500, stock: 9999 };
  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<Product>({ defaultValues: initialValue, resolver: yupResolver(formValidateSchema) });

  const watchPreviewImage = watch("file_obj");

  const submit = async (values: Product) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("price", String(values.price));
    formData.append("stock", String(values.stock));
    formData.append("image", values.file);
    const result = await dispatch(addProduct(formData));
    if (addProduct.fulfilled.match(result)) {
      // navigate("/stock");
    }
  };

  const showPreviewImage = () => {
    if (watchPreviewImage) {
      return <img alt="" src={watchPreviewImage} className="h-[100px]" />;
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <Card elevation={7}>
          <CardContent>
            <Typography gutterBottom variant="h3">
              Create Product
            </Typography>
            {/* Name */}
            <Controller
              control={control}
              name="name"
              render={({ field }) => {
                return (
                  <TextField
                    {...field}
                    label="Name"
                    fullWidth
                    error={Boolean(errors.name?.message)}
                    helperText={errors.name?.message?.toString()}
                    variant="outlined"
                    margin="normal"
                    autoFocus
                  />
                );
              }}
            />

            <Controller
              name="price"
              control={control}
              render={({ field }) => {
                return (
                  <TextField
                    {...field}
                    label="Price"
                    type="number"
                    error={Boolean(errors.price?.message)}
                    helperText={errors.price?.message?.toString()}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    autoFocus
                  />
                );
              }}
            />

            <Controller
              name="stock"
              control={control}
              render={({ field }) => {
                return (
                  <TextField
                    {...field}
                    type="number"
                    label="Stock"
                    error={Boolean(errors.stock?.message)}
                    helperText={errors.stock?.message?.toString()}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    autoFocus
                  />
                );
              }}
            />

            <Box>{showPreviewImage()}</Box>

            {/* file browser */}
            <TextField
              sx={{ mt: 2 }}
              type="file"
              fullWidth
              onChange={(e: React.ChangeEvent<any>) => {
                e.preventDefault();
                setValue("file", e.target.files[0]); // for upload
                setValue("file_obj", URL.createObjectURL(e.target.files[0])); // for preview image
              }}
            />
          </CardContent>

          <CardActions>
            <Button fullWidth variant="contained" color="primary" type="submit" sx={{ marginRight: 1 }}>
              Create
            </Button>
            <Button fullWidth component={Link} to="/stock" color="info" variant="outlined">
              Cancl
            </Button>
          </CardActions>
        </Card>
      </form>
    </>
  );
}
