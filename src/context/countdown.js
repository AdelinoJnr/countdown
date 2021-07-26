import { createContext } from 'react';

const countdownContext = createContext();

function CountdownProvider({children}) {
  return (
    <countdownContext.Provider value={ {timer: 0} }>
      {children}
    </countdownContext.Provider>
  );
}

export default CountdownProvider;