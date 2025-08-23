import { SearchOff } from "@mui/icons-material";
import { Button, Link, Paper, Typography } from "@mui/material";

export default function NotFound() {
  return (
    <Paper sx={{height: 400, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', p: 6}}>
       <SearchOff sx={{ fontSize: 100 }} color='primary' />
       <Typography variant="h3" gutterBottom>Oooops - we've looked everywhere but we couldn't find what you were looking for</Typography>
       <Button fullWidth component={Link} href='/activities'>Go back to activities page</Button> 
    </Paper>
  )
}