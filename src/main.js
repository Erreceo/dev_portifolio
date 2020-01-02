import React from "react";
import Home from './components/home/home'
import {Container} from 'react-materialize'
import Contact from "./components/contact/contact";
import {Switch, Route} from 'react-router-dom'
import NotFound from "./components/NotFound/not_found";

const Main = () => (
     <main>
         <Container>
             <Switch>
                 <Route exact path={'/'} component={Home}/>
                 <Route path={'/contact'} component={Contact}/>
                 <Route component={NotFound}/>
             </Switch>
         </Container>
     </main>
)

export default Main