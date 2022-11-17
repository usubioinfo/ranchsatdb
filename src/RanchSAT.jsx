import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import { env } from './env';
import { RNavbar } from './components/RNavbar/RNavbar';
import { Home } from './pages/Home/Home';
import { Species } from "./pages/Species/Species";
import {Results} from "./pages/Results/Results";
import Sequences from './pages/Sequences/Sequences'
import Primers from './pages/Primers/Primers.jsx';
import EPCR from './pages/Primers/EPCR.jsx'
import { Prediction } from 'pages/Prediction/Prediction';
import { PredctionResult } from 'pages/Prediction/predictionResult';
import {BlastResult} from 'pages/Blast/BlastResult';
import { Blast } from 'pages/Blast/Blast';
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
                    <Route path={`${env.BASE_URL}/`} element={<Home />}>
                    
                    </Route>
                    <Route path={`${env.BASE_URL}/results`} element={<Results />}>
                    
                    </Route>
                    <Route path={`${env.BASE_URL}/sequences`} element={<Sequences />}>
                    
                    </Route>
                    <Route path={`${env.BASE_URL}/primers`} element={<Primers />}>
                    
                    </Route>
                    <Route path={`${env.BASE_URL}/epcr`} element={<EPCR />}>
                    
                    </Route>
                    
                    <Route path={`${env.BASE_URL}/tools`} element={<Prediction />}>
                    
                    </Route>

                    <Route path={`${env.BASE_URL}/blast`} element={<Blast />}>
                    
                    </Route>

                    <Route path={`${env.BASE_URL}/predresults`} element={<PredctionResult />}>
                    
                    </Route>
                    <Route path={`${env.BASE_URL}/blastresults`} element={<BlastResult />}>
                    
                    </Route>
                    <Route path={`${env.BASE_URL}/species/:id`} element={<Species />}></Route>
                </Routes>
                 </Container>
               
            </Router>

            
        )
    }
}

