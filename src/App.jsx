import { useEffect } from 'react'
import './App.css'
import { Home } from './pages/Home'
import { Route, Routes } from 'react-router-dom'


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
  return (
    <Routes>
      <Route path='/' exact element={<Home />} />
    </Routes>
  )
}

export default App
