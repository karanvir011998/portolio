import LandingPage from 'pages/landingPage'
import CaseStudy from 'pages/caseStudyPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import 'App.css'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="" element={<LandingPage />} />
      <Route path=":id" element={<CaseStudy />} />
    </Routes>
  </BrowserRouter>
)

export default App
