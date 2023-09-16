import { BrowserRouter } from "react-router-dom"
import { Route, Routes } from "react-router-dom"
import { HomePage } from "./pages"
import { UserLayout } from "./layout"
import { Provider } from "react-redux"
import { store } from "./app/store"

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* User Routes */}
          <Route element={<UserLayout />}>
            <Route path="/movies" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}