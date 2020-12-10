import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Badges from './pages/Badges'
import BadgeNew from './pages/BadgeNew'
import Layout from './Layout'
import NotFound from './pages/NotFound'
import BadgesHome from './pages/BadgesHome'
import BadgesEdit from './pages/BadgeEdit'
import BadgesDetailsContainer from './pages/BadgeDetailsContainer'


function App(){
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={BadgesHome}/>
                    <Route exact path="/badges" component={Badges}/>
                    <Route exact path="/badges/new" component={BadgeNew}/>
                    <Route exact path="/badges/:badgeId" component={BadgesDetailsContainer}/>
                    <Route exact path="/badges/:badgeId/edit" component={BadgesEdit}/>
                    <Route component={NotFound}/>
                </Switch>            
            </Layout>
        </BrowserRouter>
    )
}

export default App