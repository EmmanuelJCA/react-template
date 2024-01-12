import { Provider as ReduxProvider } from 'react-redux';
import { SnackbarProvider } from 'notistack';

import { store } from './redux/store';
import ThemeProvider from './theme';
import Router from './router';

// ----------------------------------------------------------------------

const App = () => {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider>
        <SnackbarProvider>
          <Router />
        </SnackbarProvider>
      </ThemeProvider>
    </ReduxProvider>
  );
}

export default App;
