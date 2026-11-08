import { BrowserRouter } from "react-router-dom";
import { QueryProvider, ToastifyProvider } from "./providers";
import { Router } from "./routers/Router";

function App() {
  return (
    <>
      <BrowserRouter>
        <QueryProvider>
          <ToastifyProvider />
          <Router />
        </QueryProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
