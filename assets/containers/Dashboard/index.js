import React, { useContext } from 'react';
import { SET_APP_ERROR } from '../../context/constant'
import { Context } from '../../context/ContextStore'

export default function Dashboard() {
    const [state, dispatch] = useContext(Context)
    // const { globalError } = state
    console.log("Dashboard Render", )
    
    const handleClick = () => {
        // const payload = {
        //     ...state.app,
        //     sideNavCollapse: newCollapse
        //   }
        dispatch({type: SET_APP_ERROR, payload: true});
    }
    return (
        <>
            <h1>Dashboard Componet</h1>
            <button onClick={handleClick}>TEST Context</button>
        </>
    );
  };
