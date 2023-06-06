import { HashRouter, Route, Routes, Navigate} from "react-router-dom"; //要用什么功能记得挂载
import GetRouters from './router';

function App() {
  return (
    <div>
      <HashRouter>
        <GetRouters />
    </HashRouter>
  </div>
  );
}

export default App;
