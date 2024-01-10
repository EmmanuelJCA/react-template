import { Provider as ReduxProvider } from 'react-redux';

import { store } from './redux/store';
import ThemeProvider from './Theme';
import Router from './Router';

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
