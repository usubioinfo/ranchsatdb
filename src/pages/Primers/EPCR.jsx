import React from 'react';
import "antd/dist/antd.min.css";
import { Slider, Divider, Button } from 'antd';
import { fetchEPCR } from './fetchEPCR';
import './EPCR.scss';
import Form from 'react-bootstrap/Form';
const mdata = JSON.parse(localStorage.getItem('pmdata'));
const spdata = JSON.parse(localStorage.getItem('species'))
export default class EPCR extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mdata: mdata,
            mismatch: 0,
            genome: 'bostaurus.fasta',
            dna: '',
            pcrResult:'',
            isOpen:false,
            showdata:false,

        };
        this.executeEPCR = this
            .executeEPCR
            .bind(this)
        this.getValue = this
            .getValue
            .bind(this);
        this.handleChange = this
            .handleChange
            .bind(this);
        this.handleGeneChange = this
            .handleGeneChange
            .bind(this);

    
    }
    getValue = (value) => {

        this.setState({ mismatch: parseInt(value) })
    }
    handleChange(event) {
        event.preventDefault();
        const select = event.target;
        const selectedOption = select.options[select.selectedIndex];
        const choice = selectedOption.value

        this.setState({
            genome: choice,
            dna: '',
        })
    }

    openModel = () => this.setState({ isOpen: true });
    closeModel = () => this.setState({ isOpen: false });


    

    handleGeneChange(e) {
        this.setState({ dna: e.target.value });
      }

    executeEPCR() {
        this.openModel();
        fetchEPCR(JSON.stringify(this.state.mdata), this.state.dna, this.state.mismatch, this.state.genome)
            .then(res => {
                this.setState({pcrResult: res})
                
                this.closeModel();
               
            })
    }
    render() {
        let results;
        if (this.state.pcrResult){
            results = (
             <div id= 'results' className="row justify-content-center">
                <div className='col-md-8'>
                <pre className='genome'>

{this.state.pcrResult}
</pre>
                </div>
               
            
          </div>
            )
        }
        return (
            <div className='px-0 container'>
                <div id='species' className="mx-auto col-md-8 h4 sid"> {spdata[0].name}</div>
                <Divider />
                <div className="row flex-lg-row g-2">
                    <h5>Run ePCR</h5>
                    <div className="col-md-4">
                        <label className="label-text">Select a Genome </label>
                        <div className="form-inline">
                            <select value={this.state.genome} className="form-select" onChange={this.handleChange} >
                                <option value="bostaurus.fasta">Cow</option>
                                <option value="goat.fa">Goat</option>
                                <option value="dog.fa">Dog</option>
                                <option value="cat.fa">Cat</option>
                                <option value="donkey.fa">Donkey</option>
                                <option value="horse.fa">Horse</option>
                                <option value="pig.fa">Pig</option>
                                <option value="buffalo.fa">Buffalo</option>
                                <option value="sheep.fa">Sheep</option>
                                <option value="yak.fa">Yak</option>
                                <option value="bee.fa">Honey Bee</option>
                                <option value="chicken.fa">Chicken</option>

                            </select>
                        </div>
                        <label className='label-text mt-2'>Select Mismatch</label>
                        <Slider defaultValue={0} marks={{ 0: '0', 10: '10' }} disabled={false} min={0} max={10} onChange={this.getValue} />
                    </div>
                    <div className='col-md-4'></div>
                    <div className="col-md-4">
                        <label className='label-text'>Enter or paste FASTA sequence</label>
                    <Form.Control className="kbl-form mb-4" as="textarea" rows={4} placeholder={'paste sequence here'} onChange={ this.handleGeneChange }
                      value={this.state.dna}  spellCheck={false}/>
                    <Button className="kbl-btn-2" onClick={(e) => {
                        this.setState({dna: " "})
                      }}>Clear Data</Button>
                    </div>
                </div>
                {/* <div className="row justify-content-center">

                    <Button className="col-md-2 m-4" type='primary' onClick={this.executeEPCR} shape='round' >Run ePCR</Button>
                </div> */}

        <div className="row flex-lg-row justify-content-center g-2 my-3">
          {this.state.isOpen && (
            <div className="col-md-8">
              <img
                src="./images/test.gif"
                className="loading"
                height="50px"
                alt=""
              ></img>
            </div>
          )}
          {this.state.isOpen === false && (
            <div className="col-md-2">
              <Button
                type="primary"
                shape="round"
                size="large"
                onClick={this.executeEPCR}
              >
                Run ePCR{" "}
              </Button>
            </div>
          )}
          </div>
          {results}



     </div>
   
        )
    }
}