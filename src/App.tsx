import ThemeProvider from './Theme';
import Router from './Router';

// ----------------------------------------------------------------------

const App = () => {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  )
};

export default App;
