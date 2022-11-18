import React, { Component } from "react";
import { Divider, Button } from 'antd';
import Table from 'react-bootstrap/Table'
import './BlastResult.scss'
import {downloadBlast} from '../../components/CSVDownload/BlastDownload';

const resud = JSON.parse(localStorage.getItem('resultb'));

console.log(resud)
const dfiled = ['qseqid', 'sseqid', 'pident', 'length', 'mismatch', 'gapopen', 'qstart', 'qend', 'sstart', 'send', 'evalue', 'bitscore'];

export class BlastResult extends Component {


    render(){
        return(
            <div className="container">
                <h5>Blast Results</h5>
            <Divider />
            <div className="row flex-lg-row ">
            <Button className="col-md-2 mx-3 my-3" type='primary' onClick={() => downloadBlast(resud)} shape='round' >Download Results</Button>
            <div className="col-md-12">
            
            <Table responsive className="kbl-table table  table-borderless table-responsive">
                    <thead className="kbl-thead">
                        <tr>
                            
                            <th >Query</th>
                            <th>Subject</th>
                            <th >Identity</th>
                            <th >Length</th>
                            <th >Mismatch</th>
                            <th >Gap</th>
                            <th >Query Start</th>
                            <th >Query End</th>
                            <th >Subject Start</th>
                            <th >Subject End</th>
                            <th >Evalue</th>
                            <th >Score</th>
                        </tr>
                    </thead>
                    <tbody>
                    {resud.map((result, index) => (
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