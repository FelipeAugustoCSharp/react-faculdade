import React, {useState, useEffect} from 'react';
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';

const Login = () => {
    const [login, setLogin] = useState('');
    return (
        // eslint-disable-next-line react/jsx-no-undef
        <Grid item xs={12}>
            <FormControl fullWidth>
              <Input id="login_name" aria-describedby="login_name_helper_text" value={login} 
               onChange={e => { setLogin(e.target.value) }} />
              <FormHelperText id="login_name_helper_text">Login.</FormHelperText>
            </FormControl>
          </Grid>
          
    );
}

export default Login