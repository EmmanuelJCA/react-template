import { Provider as ReduxProvider } from 'react-redux';

import { store } from './redux/store';
import ThemeProvider from './theme';
import Router from './router';

// ----------------------------------------------------------------------

const App = () => {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </ReduxProvider>
  )
};

export default App;
