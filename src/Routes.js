import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import EmailPage from './pages/EmailPage';


function Routes() {
    return (
        <Switch>
            <Route path="/email" component={EmailPage} />
            <Route path="" component={HomePage} />
        </Switch>
    )
}

export default Routes;