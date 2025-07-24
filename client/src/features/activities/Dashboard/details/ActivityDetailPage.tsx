import { Grid2, Typography } from "@mui/material"
import { useParams } from "react-router";
import UseActivities from "../../../../lib/hooks/useActivities";
import ActivityDetailsHeader from "./ActivityDetailsHeader";
import ActivityDetailsSidebar from "./ActivityDetailsSidebar";
import ActivitiyDetailsChat from "./ActivitiyDetailsChat";
import ActivityDetailsInfo from "./ActivityDetailsInfo";

export default function ActivityDetail() {
  const {id} = useParams();
  const {activity, isLoadingActivity} = UseActivities(id);

  if(isLoadingActivity) return <Typography>Loading...</Typography>

  if (!activity) return <Typography>Activity not found</Typography>
  return (
   <Grid2 container spacing={3}>
    <Grid2 size={8}>
     <ActivityDetailsHeader activity={activity}/>
     <ActivityDetailsInfo activity={activity}/>
     <ActivitiyDetailsChat />
    </Grid2>
    <Grid2 size={4}>
      <ActivityDetailsSidebar />
    </Grid2>
   </Grid2>
  )
}