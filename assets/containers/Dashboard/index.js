import React, { useContext, useMemo } from 'react';
import { SET_APP_ERROR } from '../../context/constant'
import { Context } from '../../context/ContextStore'

export default function Dashboard() {
    const [state, dispatch] = useContext(Context)
    const { globalError } = state
    const renderCount = React.useRef(1);
    React.useEffect(() => {
      renderCount.current += 1;
    });

    
    const handleClick = () => {
        const newGlobalError = globalError ? false: true
        dispatch({type: SET_APP_ERROR, payload: newGlobalError});
    }
    return useMemo(() => {
        return (
            <>
                <h1>Dashboard Componet</h1>
                <button onClick={handleClick}>Test Global State change From Dashboard</button>
                <label>Render {renderCount.current}</label>
            </>
        );
    },[globalError, dispatch])
  };
