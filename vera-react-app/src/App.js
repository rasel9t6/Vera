import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Home, Footer, ResourcePageTile} from './components/components';

function App() {
    return (
        <div id="app">
            <Switch>
               <Route exact path='/'
                 component={() => <Home />} />
            </Switch>
            <Footer/>
            <ResourcePageTile imageUrl="data:image/jpeg;base64,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" resourcePageLink="/Resources" title="General Stress General Stress General Stress General Stress General Stress" info="Stress is a feeling of emtional or physical tension. It can come from any event or thought that makes you you feel frustrated, angry. Stress is a feeling of emotional or physical tension. It can come from any event or thought that makes you you feel frustrated, angry..." />
        </div>
    );
}

export default App;
