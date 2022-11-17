import React, { Component } from "react";
import { Divider, Button } from 'antd';
import Table from 'react-bootstrap/Table'
import './predictionResult.scss'
import {downloadCsv} from '../../components/CSVDownload/CSVDownload';

const resu = JSON.parse(localStorage.getItem('results'));

const dfiled = [
    'ID',
    'Seq_length',
    'SSR_type',
    'SSR',
    'Start',
    'End',
    'Size'

];

export class PredctionResult extends Component {


    render(){
        return(
            <div className="container">
                <h5>Prediction Results</h5>
            <Divider />
            
            
          
            
            <div className="row flex-lg-row ">
            <Button className="col-md-2 mx-3 my-3" type='primary' onClick={() => downloadCsv(resu)} shape='round' >Download Results</Button>
            <div className="col-md-12">
            
            <Table responsive className="kbl-table table  table-borderless table-responsive">
                    <thead className="kbl-thead">
                        <tr>
                            
                            <th >Sequence ID</th>
                            <th>Sequence Length</th>
                            <th >Motif Type</th>
                            <th >Motif</th>
                            <th >Start</th>
                            <th >End</th>
                            <th >Motif Length</th>
                        </tr>
                    </thead>
                    <tbody>
                    {resu.map((result, index) => (
                            <tr>
                                {Array.from(dfiled).map((_, index) => (

                                    <td key={index + 1}>
                                        {result[dfiled[index]]}
                                    </td>


                                ))}
                            </tr>
                        ))}
                    </tbody>
                    </Table>
                    </div>
            </div>
            </div>
        )
    }
}