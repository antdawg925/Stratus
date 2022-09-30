import './App.css';
import { Routes, Route } from "react-router-dom"
import { Home } from "./views/Home"
import { SocialFrame } from "./components/Services/IFrames/SocialFrame"
import { MarketingFrame } from "./components/Services/IFrames/MarketingFrame"
import { Logos } from "./components/Services/IFrames/Logos"
import { ColorTest } from './views/ColorTest';
import { BlogFrame } from './components/Services/IFrames/BlogFrame';
import { Deploy } from './views/Deploy';
import { Design } from './views/Design';
import { Email } from './views/Email';

function App() {
  return (
    <div className="App">
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/deployments" element={<Deploy />} />
        <Route path="/email" element={<Email />} />
        <Route path="/designs" element={<Design />} />
        <Route path="/social" element={<SocialFrame />} />
        <Route path="/marketing" element={<MarketingFrame />} />
        <Route path="/color" element={<ColorTest />} />
        <Route path="/logos" element={<Logos />} />
        <Route path="/blog" element={<BlogFrame />} />

      </Routes>
    </div>
  );
}

export default App;
