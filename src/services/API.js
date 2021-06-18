import { useDispatch } from 'react-redux';

import { setLoggingIn, setIsLoggedIn, setLoggedInUser } from '/src/actions/data/auth.js';
import history from '/src/utils/history';

import * as routes from '/src/constants/routes';

import * as authService from '/src/services/auth';
import * as userService from '/src/services/user';
import * as tokenService from '/src/services/token';

export default function API (type,req){
    //const dispatch = useDispatch();
    const login = async ({email,password})=>{
        try {
           // dispatch(setLoggingIn(true));
    
            let { data } = await authService.login({ email, password });
            tokenService.persist({ accessToken: data, refreshToken:data });
            let user = await userService.fetchSelf();
            console.log(data,user)
            //dispatch(setLoggingIn(false));
           // dispatch(setIsLoggedIn(true));
          //  dispatch(setLoggedInUser(user.data[0]));
            history.push(routes.HOME);
          } catch (err) {
            console.log(err)
           // dispatch(setLoggingIn(false));
          }
    }
    switch (type){
      case 'login':
        login(req)
    }
}