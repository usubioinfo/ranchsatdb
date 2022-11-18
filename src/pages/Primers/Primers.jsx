import React from 'react';
import Table from 'react-bootstrap/Table';
import "antd/dist/antd.min.css";
import { Slider, Divider, Button} from 'antd';
import { fetchPrimers } from './fetchPrimers';
import './Primers.scss';
import {downloadCsv} from '../../components/Download/Download';
const mdata = JSON.parse(localStorage.getItem('primerdata'));

const spdata = JSON.parse(localStorage.getItem('species'))

export default class Primers extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mdata: mdata,
            primersdata: [],
            minTM: 45,
            maxTM: 65,
            minGC: 40,
            maxGC: 60,
            minS: 18,
            maxS: 22,
            minP: 100,
            maxP: 200,
            forward: '',
            reversep: '',
            fTM: '',
            fGC: '',
            rTM: '',
            rGC: '',
            psize: '',
            setprimer1: false,
            sequence:'',

        };
        this.getMelting = this
            .getMelting
            .bind(this);
        this.getGC = this
            .getGC
            .bind(this);
        this.getSize = this
            .getSize
            .bind(this);
        this.getProduct = this
            .getProduct
            .bind(this);
        this.getnewData = this
            .getnewData
            .bind(this);
        this.getPrimer1 = this
            .getPrimer1
            .bind(this)
        this.getPrimer2 = this
            .getPrimer2
            .bind(this)
        this.getPrimer3 = this
            .getPrimer3
            .bind(this)
        this.runEPCR = this
            .runEPCR
            .bind(this)



    }
    getMelting = (value) => {

        this.setState({ minTM: parseInt(value[0]), maxTM: parseInt(value[1]) }, () => {
            // this.getnewData()
        });
    }
    getGC = (value) => {

        this.setState({ minGC: parseInt(value[0]), maxGC: parseInt(value[1]) }, () => {
            // this.getnewData()
        });
    }
    getSize = (value) => {

        this.setState({ minS: parseInt(value[0]), maxS: parseInt(value[1]) }, () => {
            // this.getnewData()
        });
    }
    getProduct = (value) => {

        this.setState({ minP: parseInt(value[0]), maxP: parseInt(value[1]) }, () => {
            // this.getnewData()
        });
    }


    getnewData() {
        fetchPrimers(mdata, this.state.minS, this.state.maxS, this.state.minTM, this.state.maxTM, this.state.minGC, this.state.maxGC)
            .then(res => {
                // console.log(res)
                this.setState({ primersdata: res }, () => {
                    this.setState({
            
                        forward: this.state.primersdata.f1,
                        fTM: this.state.primersdata.f1tm,
                        fGC: this.state.primersdata.f1GC,
                        reversep: this.state.primersdata.r1,
                        rTM: this.state.primersdata.r1tm,
                        rGC: this.state.primersdata.r1GC,
                        psize: this.state.primersdata.p1psize,
                        sequence: this.state.primersdata.sequence,
                    })
                })
                
                

            });
    }

    getPrimer1() {
        
        this.setState({
            
            forward: this.state.primersdata.f1,
            fTM: this.state.primersdata.f1tm,
            fGC: this.state.primersdata.f1GC,
            reversep: this.state.primersdata.r1,
            rTM: this.state.primersdata.r1tm,
            rGC: this.state.primersdata.r1GC,
            psize: this.state.primersdata.p1psize,
            sequence: this.state.primersdata.sequence,
        })

    }

    getPrimer2() {
        this.setState({
            forward: this.state.primersdata.f2,
            fTM: this.state.primersdata.f2tm,
            fGC: this.state.primersdata.f2GC,
            reversep: this.state.primersdata.r2,
            rTM: this.state.primersdata.r2tm,
            rGC: this.state.primersdata.r2GC,
            psize: this.state.primersdata.p2psize,
            sequence: this.state.primersdata.sequence,
        })

    }

    getPrimer3() {
        this.setState({
            forward: this.state.primersdata.f3,
            fTM: this.state.primersdata.f3tm,
            fGC: this.state.primersdata.f3GC,
            reversep: this.state.primersdata.r3,
            rTM: this.state.primersdata.r3tm,
            rGC: this.state.primersdata.r3GC,
            psize: this.state.primersdata.p3psize,
            sequence: this.state.primersdata.sequence,
        })

    }

    runEPCR(){
        window.open("/ranchsatdb/epcr", "_blank");
       
    }
    
    render() {
        let results;
        let table;
      
        const sequence = {
            "A": "T",
            "T": "A",
            "G": "C",
            "C": "G"
        }

        let fasta = mdata.sequence
        let cnt = fasta.length;
        let flank = mdata.flank;
        let ssr = fasta.substring(flank, cnt - flank)

        console.log(this.state.forward)
        const match = this.state.sequence.match(this.state.forward); 
        const f_start = match.index
        
        const f_end = match.index + parseInt(match[0].length)
        const reverseSeq = this.state.reversep.split("").reverse().join("").replace(/A|T|G|C/g, function (matched) {
            return sequence[matched];
        });
        
        const r_match = this.state.sequence.match(reverseSeq)
        const r_start = r_match.index
        const r_end = r_match.index+parseInt(r_match[0].length)
        

        if (this.state.primersdata.f1) {
            
            results = (
<div>
    
                <Button className="col-md-4 mx-4 my-3" type='primary' onClick={() => downloadCsv(this.state.primersdata)} shape='round' >Download Primers</Button>
                <Button className="col-md-4 mx-4 my-3" type='primary' onClick={this.runEPCR} shape='round' >Run EPCR</Button>
                <Divider />
                <div className='row justify-content-center'>
                    <Button className="col-md-2 mx-4" type='primary' onClick={this.getPrimer1} shape='round' >Primer 1</Button>
                    <Button className="col-md-2 mx-4" type='primary' onClick={this.getPrimer2} shape='round' >Primer 2</Button>
                    <Button className="col-md-2 mx-4" type='primary' onClick={this.getPrimer3} shape='round' >Primer 3</Button>
                    <br></br>
                    
                </div>
                <div className='tds mt-2' >
                {fasta.substring(0, f_start)}
                {<span style={{ color: 'blue', fontWeight: 700, fontSize:'1rem'  }}>{match[0]}</span>}
                {fasta.substring(f_end,flank)}
                {<span style={{ color: 'red', fontWeight: 700, fontSize:'1rem' }}>{ssr}</span>}
                {fasta.substring(cnt-flank,r_start)}
                {<span style={{ color: 'green', fontWeight: 700, fontSize:'1rem'  }}>{r_match[0]}</span>}
                {fasta.substring(r_end,cnt)}
                </div>
                
                </div>
              

            )
            table = (
                <table className="kbl-table table table-borderless">
                    <tbody>
                        <tr>
                            <td >Forward Primer</td>
                            <td className="px-2">{<span style={{ color: 'blue', fontWeight: 700, fontSize:'1rem'  }}>{this.state.forward}</span>}</td>
                        </tr>
                        <tr>
                            <td >Forward Primer TM</td>
                            <td className="px-1">{this.state.fTM}</td>
                        </tr>
                        <tr>
                            <td >Forward Primer GC</td>
                            <td className="px-1">{this.state.fGC}</td>
                        </tr>
                        <tr>
                            <td >Reverse Primer</td>
                            <td className="px-1">  {<span style={{ color: 'green', fontWeight: 700, fontSize:'1rem'  }}>{this.state.reversep}</span>}</td>
                        </tr>
                        <tr>
                            <td >Reverse Primer TM</td>
                            <td className="px-1">{this.state.rTM}</td>
                        </tr>
                        <tr>
                            <td >Reverse Primer GC</td>
                            <td className="px-1" >{this.state.rGC}</td>
                        </tr>
                        <tr>
                            <td >Product Size</td>
                            <td className="px-1" >{this.state.psize}</td>
                        </tr>

                    </tbody>

                </table>
                
               
            )
            
            
        }
        
        else {
            results = ''
        }


        return (
            <div className='px-0 container'>
                <div id='species' className="mx-auto col-md-8 h4 sid"> {spdata[0].name}</div>
                <Divider />
                <div className="row flex-lg-row g-2">
                    <h5>Design Custom Primers</h5>
                    <div className="col-md-6">
                        <Table responsive className="kbl-table1 table  table-borderless">
                            <thead className="kbl-thead1">
                                <tr>

                                    <th >Chromosome ID</th>
                                    <th >Motif Type</th>
                                    <th >Motif</th>
                                    <th >Unit</th>
                                    <th >Motif Length</th>
                                    <th >Start</th>
                                    <th >End</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <td>{mdata.chromosome}</td>
                                    <td>{mdata.motif_type}</td>
                                    <td>{mdata.motif}</td>
                                    <td>{mdata.unit}</td>
                                    <td>{mdata.motif_length}</td>
                                    <td>{mdata.motif_start}</td>
                                    <td>{mdata.motif_end}</td>


                                </tr>
                                <tr>
                                    <td className='tds' colSpan={7}>
                                        {fasta.substring(0, flank)}
                                        {<span style={{ color: 'red', fontWeight: 700, fontSize:'1rem' }}>{ssr}</span>}
                                        {fasta.substring(cnt - flank, cnt)}
                                    </td>
                                </tr>

                            </tbody>
                        </Table>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-5">
                        <h6 className='mb-4'>Select options to design custom primers</h6>
                        <div className="row">
                            <div className="col-md-6">

                                <label className='h6'>Melting Point Temperature Range:</label>
                                <Slider range defaultValue={[45, 65]} marks={{ 0: '0', 100: '100' }} disabled={false} min={0} max={100} onChange={this.getMelting} />
                            </div>

                            <div className="col-md-6">
                                <label className='h6'>GC Content Range</label>
                                <Slider range defaultValue={[40, 60]} marks={{ 0: '0', 100: '100' }} disabled={false} min={0} max={100} onChange={this.getGC} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 ">
                                <label className='h6'>Primer Size Range</label>
                                <Slider range defaultValue={[18, 22]} marks={{ 12: '12', 30: '30' }} disabled={false} min={12} max={30} onChange={this.getSize} />
                            </div>
                            <div className="col-md-6 ">
                                <label className='h6'>Product Size Range</label>
                                <Slider range defaultValue={[100, 200]} marks={{ 50: '50', 300: '300' }} disabled={false} min={50} max={300} onChange={this.getProduct} />
                            </div>
                        </div>
                        <div className="row justify-content-center mt-5 mb-3">
                            <div className="col-md-4">
                            <Button  type="primary" shape="round" size='large' onClick={this.getnewData}> Design Primer </Button>
                        </div>
                        </div>

                    </div>
                </div>
                <Divider />
                <div className="row justify-content-center">

                    <div className="col-md-6">
                        {results}
                    </div>
                    <div className="col-md-6">
                        {table}
                        
                     {localStorage.setItem('pmdata', JSON.stringify(this.state.primersdata))} 
                    </div>






                </div>





            </div>





        )
       
    }

}