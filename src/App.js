import "../src/assets/css/tailwind.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import MasterLayout from "./layouts/MasterLayout";
import AlbumDetails from "./components/AlbumDetails";
import ContextProvider from "./provider/ContextProvider";
import PlaylistDetails from "./components/PlaylistDetails";
import PlaylistSong from "./components/PlaylistSong";
import AlbumSong from "./components/AlbumSong";
import ListofAlbums from "./components/ListofAlbums";
import ListofPlaylist from "./components/ListofPlaylist";
import MainPage from "./pages/MainPage";
import SearchResult from "./components/SearchResult";

import Login from "./components/login/Login";
import ErrorPage from "./components/common/ErrorPage";
import Register from "./components/login/Register";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MasterLayout />}>
            <Route index element={<ProtectedRoute  Component={MainPage}/> }  errorElement={<ErrorPage />} />

            <Route path="albumdetails/:song" element={<ProtectedRoute  Component={AlbumDetails}/> } />
            <Route path="/albums" element={<ProtectedRoute  Component={ListofAlbums}/> } />
            <Route path="/playlist" element={<ProtectedRoute  Component={ListofPlaylist}/> } />
            <Route path="/searchresult" element={<ProtectedRoute  Component={SearchResult}/> } />
            <Route path="albumsong/:song" element={<ProtectedRoute  Component={AlbumSong}/> } />
            <Route
              path="playlistdetails/:song"
              element={<ProtectedRoute  Component={PlaylistDetails}/> }
              errorElement={<ErrorPage />}
            />
            <Route path="playlistsong/:song" element={<ProtectedRoute  Component={PlaylistSong}/> } />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
