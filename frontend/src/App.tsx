import './App.css'
import { Layout } from './layout/Layout';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import FolderView from './pages/FolderView';
import FileView from './pages/FileView';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Pages WITH Navbar */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile/:profileId" element={<Profile />} />
          <Route path="/profile/:profileId/files" element={<FolderView />} />
          <Route path="/profile/:profileId/files/:folderId" element={<FolderView />} />
          <Route path="/profile/:profileId/file/:fileId" element={<FileView />} />
        </Route>

        {/* Pages WITHOUT Navbar */}
      </Routes>
    </BrowserRouter>)
}

export default App
