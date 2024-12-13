import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import { getCurrentUser } from "src/utils/helpers";

const user = {
  city: "Los Angeles",
  country: "USA",
  jobTitle: "Senior Developer",
  name: "Anika Visser",
  timezone: "GTM-7",
};

export const AccountProfile = () => (
  <Card style={{ color: "white", backgroundColor: "#08268B" }}>
    <CardContent>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Avatar
          src={
            getCurrentUser().name == null
              ? "/assets/avatars/avatar-anika-visser.png"
              : getCurrentUser().image
          }
          sx={{
            height: 80,
            mb: 2,
            width: 80,
          }}
        />
        <Typography gutterBottom variant="h5">
          {getCurrentUser().name} {getCurrentUser().lastname}
        </Typography>
        <Typography variant="body2">{getCurrentUser().email}</Typography>
        <Typography variant="body2">{getCurrentUser().phoneNumber}</Typography>
      </Box>
    </CardContent>
    <Divider />
    <CardActions>
      <Button fullWidth variant="text" sx={{ backgroundColor: "white" }}>
        Télécharger une image
      </Button>
    </CardActions>
  </Card>
);
