import { useEffect, useState } from 'react'
import './App.css'
import { Home } from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'
import { Details } from './pages/Details'


function App() {
  useEffect(() => {
    window.watsonAssistantChatOptions = {
      integrationID: "d321a723-58fb-4e4e-b5b7-f42bed1e5c68", // The ID of this integration.
      region: "us-south", // The region your integration is hosted in.
      serviceInstanceID: "2afc641d-3d14-482d-a641-6c5af62670e1", // The ID of your service instance.
      onLoad: function (instance) { instance.render(); }
    };
    setTimeout(function () {
      const t = document.createElement('script');
      t.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
      document.head.appendChild(t);
    });
  })

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=6ff0f97c700b7989b21b3dfe42786a3f");
      setMovies(response.data.results);
    };
    fetchData();
  }, []);

  return (
    <Routes>
      <Route path='/' exact element={<Home movies={movies} />} />
      <Route path='/details/:id' element={<Details movies={movies} />} />
    </Routes>
  )
}

export default App
