import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import { env } from './env.js/index.js.js';
import { RNavbar } from './components/RNavbar/RNavbar';
import { Home } from './pages/Home/Home';
import { Species } from "./pages/Species/Species";
import {Results} from "./pages/Results/Results";
import Sequences from './pages/Sequences/Sequences'
import Primers from './pages/Primers/Primers.jsx';

import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

export class RanchSAT extends Component {
    constructor(props){
        super(props);
        this.state = {
            baseUrlLen: env.BASE_URL.split('/').length
        }
    }
    render(){
        return(
            <Router>
                 <Container fluid className='App px-4'>
                 <RNavbar active={document.location.pathname.split('/')[this.state.baseUrlLen]}/>
                <Routes>
                    <Route path={`${env.BASE_URL}/home`} element={<Home />}>
                    
                    </Route>
                    <Route path={`${env.BASE_URL}/results`} element={<Results />}>
                    
                    </Route>
                    <Route path={`${env.BASE_URL}/sequences`} element={<Sequences />}>
                    
                    </Route>
                    <Route path={`${env.BASE_URL}/primers`} element={<Primers />}>
                    
                    </Route>
                    <Route path={`${env.BASE_URL}/species/:id`} element={<Species />}></Route>
                </Routes>
                 </Container>
               
            </Router>

            
        )
    }
}

