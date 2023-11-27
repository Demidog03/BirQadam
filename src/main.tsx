import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from '@/shared/shadcnUI/toaster.tsx';
import { Provider } from 'react-redux';
import store from '@/store';


// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={store}>
      <App/>
      <Toaster />
    </Provider>
  </BrowserRouter>,
)
