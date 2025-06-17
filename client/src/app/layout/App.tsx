import { Box, Container, CssBaseline, Typography} from "@mui/material";
import { useState } from "react"
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/Dashboard/ActivityDashboard";
import UseActivities from "../../lib/hooks/useActivities";

function App() {
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);
  const {activities, isPending} = UseActivities();

  const handelSelectActivity = (id: string) =>{
    setSelectedActivity(activities!.find(x => x.id === id ));
  }

  const handelCancelSelectActivity = () =>{
    setSelectedActivity(undefined);
  }

  const handleOpenForm = (id?: string) => {
     if (id) handelSelectActivity(id);
     else handelCancelSelectActivity();
     setEditMode(true)
  }

  const handleFormClose = () => {
    setEditMode(false);
  }

  return (
    <Box sx={{bgcolor: '#eeeeee', minHeight: '100vh'}}>
     <CssBaseline />
     <NavBar openForm={handleOpenForm}/>
     <Container maxWidth='xl' sx={{mt: 3}}>
      {!activities || isPending ? (
        <Typography>Loading...</Typography>
      ) : (
         <ActivityDashboard 
        activities={activities} 
        selectActivity={handelSelectActivity} 
        cancelSelectActivity={handelCancelSelectActivity} 
        selectedActivity={selectedActivity}
        editMode={editMode}
        openForm={handleOpenForm}
        closeForm={handleFormClose}
        />
      )}
     </Container>
    </Box>
  )
}

export default App
