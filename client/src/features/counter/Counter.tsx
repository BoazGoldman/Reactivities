import { observer } from 'mobx-react-lite';
import { useStore } from '../../lib/hooks/useStore';
import { Box, Button, ButtonGroup, List, ListItemText, Paper, Typography } from '@mui/material';

const Counter =  observer( function Counter() {
  const { counterstore } = useStore();

  return (
    <Box display="flex" justifyContent='space-betwen'>
      <Box sx={{width: '60%'}}>
        <Typography variant="h4" gutterBottom>{counterstore.title}</Typography>
        <Typography variant="h6">The count is {counterstore.count}</Typography>
        <ButtonGroup sx ={{mt: 3}}>
        <Button variant="contained" color="error" onClick={() => counterstore.increment(1)}>Increment</Button>
        <Button variant="contained" color="success" onClick={() => counterstore.decrement(1)}>Decrement</Button>
        <Button variant="contained" color="primary" onClick={() => counterstore.increment(5)}>Increment by 5</Button>
        </ButtonGroup>
      </Box>
      <Paper sx={{width: '40%', p: 4}}>
        <Typography variant="h5">Counter events ({counterstore.eventCount})</Typography>
        <List>
            {counterstore.events.map((events, index) => (
                <ListItemText key={index}>{events}</ListItemText>
            ))}
        </List>
        </Paper>
    </Box>
  )
});
export default Counter;