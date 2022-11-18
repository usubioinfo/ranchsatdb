import React from 'react';
import Table from 'react-bootstrap/Table';
import Button2 from 'react-bootstrap/Button';
import './Sequence.scss';
import { fetchSequence } from './fetchSequence';
import "antd/dist/antd.min.css";
import { Slider, Divider, Button } from 'antd';

const mdata = JSON.parse(localStorage.getItem('sedata'));
const spdata = JSON.parse(localStorage.getItem('species'))

export default class Sequences extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mdata: mdata,
            sdata: [],
            flank: 100,
            showFasta: false,
            showTable: true,
            primer: [],

        };
        this.getValue = this
            .getValue
            .bind(this);

    }

    getValue = (value) => {

        this.setState({ flank: parseInt(value) }, () => {
            this.getnewData()
        });


    }

    getnewData() {
        fetchSequence(mdata, this.state.flank, spdata[0].fasta)
            .then(res => {
                this.setState({ sdata: res })

            });
    }

    getPrimers(d) {
        // console.log(d)

        window.open("/ranchsatdb/primers", "_blank");
        localStorage.setItem('primerdata', JSON.stringify(d))

    }


    componentDidMount() {
        this.getnewData()
    }

    render() {
        const { showFasta, showTable } = this.state


        return (


            <div className='px-0 container'>
                <div id='species' className="mx-auto col-md-8 h4 sid"> {spdata[0].name}</div>
                <Divider />

                <div className="row flex-lg-row g-2 ">
                    <div className="col-md-2 ">
                        <Button type="primary" shape="round" size='large' onClick={() => this.setState({ showFasta: false, showTable: true })}> Table View</Button>
                    </div>
                    <div className="col-md-2 ">
                        <Button type="primary" shape="round" size='large' onClick={() => this.setState({ showFasta: true, showTable: false })}> FASTA View </Button>
                    </div>
                    {/* <div className="col-md-2 ">
                        <Button type="primary" shape="round" size='large' onClick={() => window.open("/ranchsatdb/primers", "_blank")}> Design Primer </Button>
                        </div> */}
                    <div className="col-md-2"></div>
                    <div className="col-md-4">
                        <label className='h6'>Select Upstream and Downstream flank</label>
                        <Slider defaultValue={100} marks={{ 50: '50', 2000: '2000' }} disabled={false} min={50} max={2000} onChange={this.getValue} />
                    </div>

                </div>
                <Divider />
                {showTable && (
                    <div>
                        {this.state.sdata.map((item, i) => {
                            let fasta = item.sequence
                            let lines = fasta.split('\n');

                            if (fasta[0] === '>') {

                                lines.splice(0, 1);

                            }
                            fasta = lines.join('').trim();
                            let cnt = fasta.length;

                            let flank = parseInt(item.flank);

                            let ssr = fasta.substring(flank, cnt - flank)

                            return (

                                <Table className='table kbl-table2 table-borderless' key={item._id}>
                                    <thead className='kbl-thead2'>
                                        <tr>
                                            <th>Chromosome ID</th>
                                            <th> Start</th>
                                            <th>Stop</th>
                                            <th>Motif Class</th>
                                            <th> Motif Length</th>
                                            <th>Strand</th>
                                            <th>Primer</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr key={i}>
                                            <td >{item.chromosome}</td>
                                            <td>{item.motif_start}</td>
                                            <td>{item.motif_end}</td>
                                            <td>{item.motif}</td>
                                            <td>{item.motif_length}</td>
                                            <td>{item.strand}</td>
                                            <td><Button2 variant="success" shape="round" size='large' onClick={() => this.getPrimers(this.state.sdata[i])} > Design Primer </Button2></td>
                                        </tr>
                                        <tr >
                                            <td className='tds' colSpan={7}>
                                                {fasta.substring(0, flank)}
                                                {<span style={{ color: 'red' }}>{ssr}</span>}
                                                {fasta.substring(cnt - flank, cnt)}
                                            </td>
                                        </tr>




                                    </tbody>
                                </Table>
                            )



                        })}
                    </div>)}
                {showFasta && (<div>

                    {this.state.sdata.map((stuff, i) => {
                        let fasta = stuff.sequence
                        let cnt = fasta.length;
                        let flank = stuff.flank;
                        let ssr = fasta.substring(flank, cnt - flank)

                        return (

                            <p key={i} className='fastas'>{`>${stuff.chromosome} repeat=${stuff.motif};length=${stuff.motif_length}`} <br></br>{fasta.substring(0, flank)}
                                {<span style={{ color: 'red' }}>{ssr}</span>}
                                {fasta.substring(cnt - flank, cnt)} </p>


                        )

                    })}
                </div>)}

                {/* {localStorage.setItem('primerdata', JSON.stringify(this.state.sdata))} */}



            </div>







        )

    }

}




