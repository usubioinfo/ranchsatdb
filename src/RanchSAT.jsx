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
import Help from 'pages/Help/Help'
import View from 'pages/JBrowse/JBrowse'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

const BASE_URL = (env && typeof env.BASE_URL === 'string' && env.BASE_URL.trim() !== '')
  ? env.BASE_URL
  : '/ranchsatdb';

export class RanchSAT extends Component {
    constructor(props){
        super(props);
        this.state = {
            baseUrlLen: BASE_URL.split('/').length
        }
    }
    render(){
        return(
            <Router>
                 <Container fluid className='App px-4'>
                 <RNavbar active={document.location.pathname.split('/')[this.state.baseUrlLen]}/>
                <Routes>
                    <Route path={`${BASE_URL}/`} element={<Home />}>
                    
                    </Route>
                    <Route path={`${BASE_URL}/results`} element={<Results />}>
                    
                    </Route>
                    <Route path={`${BASE_URL}/sequences`} element={<Sequences />}>
                    
                    </Route>
                    <Route path={`${BASE_URL}/primers`} element={<Primers />}>
                    
                    </Route>
                    <Route path={`${BASE_URL}/epcr`} element={<EPCR />}>
                    
                    </Route>
                    
                    <Route path={`${BASE_URL}/tools`} element={<Prediction />}>
                    
                    </Route>

                    <Route path={`${BASE_URL}/blast`} element={<Blast />}>
                    
                    </Route>

                    <Route path={`${BASE_URL}/predresults`} element={<PredctionResult />}>
                    
                    </Route>
                    <Route path={`${BASE_URL}/blastresults`} element={<BlastResult />}>
                    
                    </Route>
                    <Route path={`${BASE_URL}/help`} element={<Help />}>
                    
                    </Route>

                    <Route path={`${BASE_URL}/jbrowse`} element={<View />}>
                    
                    </Route>
                    <Route path={`${BASE_URL}/species/:id`} element={<Species />}></Route>
                </Routes>
                 </Container>
               
            </Router>

            
        )
    }
}
