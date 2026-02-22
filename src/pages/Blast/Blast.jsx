import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Slider, Divider } from "antd";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { fetchBlast } from "./fetchBlast";



const seq = `>chr1
GTACACTGATCACGTGGCTGATCATGCACAAATCCCATTGCATATCATGCTCTGATCAGG
TTGCTATCATGTACTGATCACTTGGCTGATCATACACTGATCACATGACTGATCATGCAC
TGATCACGTGCCTGATCATGCACTGATCCCGTGGCAGATCATGCACTGATCACGTGCAGA
TCATGCACTCATCATGTGGCTGATCATACAATGATCACGTGGCTGATCATGCACTGATCA
CATGTATGATCGTACACTGATCACGTGGCTGATCATGCACAAATCCCATTGCATATTCAT
GCTCTGATCAGGTTGCTATCATGTACTGATCACGTGGCTGATCATACACTGATCACAATG
ACTGATCATGCACTGATCACGTGCCTGATCATGCACTGATCCCGTGGGGCTGATCTTGCA
CTGATCACGTGGCTGATAATGGCACTGATCACTTGACTGATCATGCACTGATCACGTCTC
TTATCATGCACTACTCACGTGACTGATCATGGACTGATCACGTGACTGATCATGCACTGA
TCATGAGCCTGATCATGCACTGATCACGGGCCTGTTCATGCACTGATCACGTGGCTGATC
CTGCACTGATCACGAGGCTGATCATACACTGATCACGTGACTGTGCATGCAATGATCACT
TGGCTGATCATGTACTGATCACGTGGCTGATCATGCACTGATCACATGACTGAGTTGCAC
TGATCACATAGCTATCATGCACTGATCACGTGACTTCGCATGCCATGATCACGTGACTGA
TCATGCACTGGTCCCGTGGCTATCATGCACTGATAATGTGGCTTATCATACATTGATCAC
CTAAATAATCATGCCACTGATCACGTGGCAATCTTGCTCTGATCACGTGGTTGATCAGGC
ACTGATCACTTAGCTATCATGCACTGATCACATGAACTGCGCAAGAACTGATCACTTAGA
TATCATACACAGGACACGTGACAGATCATGCACTGAATCACGTGACTGATCATGCACTGA
TCTGGTGGCTATCATGCACTGATCCCGTGGCTGATCTTGCACTGATCACGTGGCTTGATA
ATGCACTGATCACTTGACTGATCATGCACTGATCACGTCTCTTATCATGCCACTACTCAC
GTGACTGATCATGGACTGATCACGTGACTGATCATGCACTGATCATGAGCCCTGATCATG
CACTGATCACGGGCCTGTTCATGCACTGATCACGTGGCTGATCCTGCACTTGATCACGAG
GCTGATCATACACTGATCACGTGACTGTGCATGCAATGATCACTTGGCTGATCATGTACT
GATCACGTAGCTGATCATGCTCTGATCACGTGACTGATTATGCACTGATCACATAGCTAT
CATGCACTGATCACATGACTTCGCATGCCATGATCACGTGACTGATCATGCACTGATCAC
GTGGCTATCATGCACTGATAATGTGGCTTATCATACATTGATCACCTAAATATCATGCAC
TGATCACGTGGCAATCTTGCTCTGATCACGTGGTTGATCAGGCACTGATCACTTAGCTAT
CATGCACTGATCACATGACTGCGCAAGAACTGATCACTTAGATATCATACACAGGACACG
TGACAGATCATGCACTGATCACGTGACTGATCATGCACTGATCTGGTGCTATCATGCATT
GATCACGTGGTTGATCATACACTGATCACGTGACTGATCATGCACTGATCACCTGGCTAT
CATGCACTAATCACGTAGCTGATCTGGAACAGATCACGTGACTAATCATGCAGTGATCAC
GTCGCTATCATGCAATGATCTCGAGATTGCGCATGCACTGATCATATGGATGATCACACA
CTGATCACGTGACAGATCATGCACTGAACACGTGACTTATAATGCACTGATCACGTGACT
GCACATGCACTGATCATGTGACTGAGCATGCACTGATCACGTAGCTGATCATGCACTGAT
TCACGAAGTTGATCATACACTGATCATGTGACTGAGCATGCACTGACCACGTAGCTGATC
ATGCACTGATCACGAAGTTGATCATACACTGATCACGTGAGTGTGCATGCACTGATCACG
TGGCGGATAATGCAATGATCACGTGGCTGATCATGCACTGATCACGTAGCTCTCATGCAC
TGATCACATGTCAACCATGCCCGGATCCCGTGGCTGATCATGCACTGATCGCCTGACTGA
TCAGGCACTAGTCACCTGGCTATCATGCACTAATCACGTGGCTGTTCATACACTGACCAC
GTGACTGATCATGCACTGATCTGGTGGCTATCATGCATTGATCACGTGTTTGATCTTACA
CTGATTCACGTGACTGATCATGCACTGATCACCTGGCTTTCATGCACTAATCACGTAGCT
GATCTGGAACAGATCACGTGACTAATCATGCAGTGATCACGTCGCTATCATGCAATGATC
TCGAGATTGCGCATGCACTGATCATATGGATGATCACACACTGATCACGTGACAGATCAT
GCACTGATCACGTGACTTATCATGCACTGATCACGAGACTGCACATGCACTGATCATGTG
ACTGAAGCATGCACTGATCATGTAGCTGATCATGCACTGATCACGAAGTTGATCATCACT
GATCATGTGACTGAGCATGCACTGATCACGTAGCTGATCATGCACTGATCACGAAGTTGA
TCATACACTGATCACGTGAGTGTGCATGCACTGATCACGTGGCGGATAATGCAATGTTCA
CGTAGCTCTCATGCACTGATCACATGTCAATCACGCCCGGATCCCGTGGCTGATCATGCA
CTGATCTCGAAGCTGATCATACACTGATCACGTGAGTGTGCATGCAATGATAACATGGCT
GATTATGCAATTATCACGTGGCTTATCATACACTGATCACGTGGCTGATCATGCACTAAT
CACGTTTTGGATGATGCACTGGTCACGTGGCTGATCATACACTAATCACATGACTGATCA
TGCACTAATCACGTTGTGGATCATGCACTGATCACGTGGCTGTTCTTGCACTTATCACGT
GGCTGATCATACAGTGATTACATGACTGATCATGCACTAATCACGATGTGGATCATGCAC
TGATCACATGAATGTGCATGCATTGATCATGTGGCTGATCATGCACTGATCACGTGGCTG
ATCATGCACTGATCACGAAGCTGATATTACACTGATCACAGGACTGTGCATGCACTGATC
ATGTGGCTGATCATGCACTGATCATGTGGCTGATGATACACTGATCACGTGGCTGATCGT
ACTCTGAACACGAAGCTGAAAATACACTGATCACGAGACTGCATGCACTGATCACTTGAC
TGCGCCTGCACTGATCACGTGGATGATAATACGCTGATCACTTGACTGCTTATGCACTAA
AAAAATGGCTGATCATGCACTGATCACATGACTGATCATGCACTGATCACGTGACTACCA
TGCACTGATCACTTGATTGTGCATGCAATAATCACGTGGATGATCACGCATTTATCATGT
GGCTGATCATGCACTAATCACATGGCGGAACATGAACTGATCACGTGACTTAGCATGCAG
TGATCTCGTGTCTGAATGGTGCTGATCATGTGACTAAACAAGAACTGATCACGTGGCTAT
AATGCACTGATCACGTAACTGCACATGCACTGATCATGTGACTGAGCATGCACTAATCAT
GTAGCTGATCATGCACTGATCACGAAGTTGATCATACACTGATCATGTGACTGAGCATGC
ACTGACCACGTAGCTGATCATGCACTGATCACGTTGCGTATCATGCACTGATCACATGAC
GGCGCATGAACTGATCACGTGGATATTATACACTGATCAAGTGACAAATCATGCACTAAT
CACGTGACTGATCATGCACTGATCACGTGGCTATCATGCACTGATCACGTGACTGATCAT
GCACTTGACACGTCGCTATCATGCACTGATCACGTGGCTGTTCATACAGTGATCACGTGA
CTGATCATGCACTGATCCCGTGGCTGATCATGCACTGATCACGTTGCAGATCATGCACTC
ATCACGTGGCTGATCATACAATGATCACGTGGCTGATCATGCACTAATCACATGTGTGAT
CGTACACTGATCACGTGGCTGATCATGCACAAATCCCATTGCATATCATGCTCTGATCAG
GTTGCTATCATGTACTGATCACTTGGCTGATCATACACTGATCACATGACTGATCATGCA
CTGATCACGTGCCTGATCATGCACTGATCCCGTGGCAGATCATGCACTGATCACGTGCAG
ATCATGCACTCATCATGTGGCTGATCATACAATGATCACGTGGCTGATCATGCACTGATC
ACATGTATGATCGTACACTGATCACGTGGCTGATCATGCACAAATCCCATTGCATATCAT
GCTCTGATCAGGTTGCTATCATGTACTGATCACGTGGCTGATCATACACTGATCACATGA
CTGATCATGCACTGATCACGTGCCTGATCATGCACTGATCCCGTGGCTGATCTTGCACTG
ATCACGTGGCTGATAATGCACTGATCACTTGACTGATCATGCACTGATCACGTCTCTTAT
CATGCACTACTCACGTGACTGATCATGGACTGATCACGTGACTGATCATGCACTGATCAT
GAGCCTGATCATGCACTGATCACGGGCCTGTTCATGCACTGATCACGTGGCTGATCCTGC
ACTGATCACGAGGCTGATCATACACTGATCACGTGACTGTGCATGCAATGATCACTTGGC
TGATCATGTACTGATCACGTGGCTGATCATGCACTGATCACATGACTGATTATGCACTGA
TCACATAGCTATCATGCACTGATCACATGACTTCGCATGCCATGATCACGTGACTGATCA
TGCACTGGTCCCGTGGCTATCATGCACTGATAATGTGGCTTATCATACATTGATCACCTA
AATAATCATGCACTGATCACGTGGCAATCTTGCTCTGATCACGTGGTTGATCAGGCACTG
ATCACTTAGCTATCATGCACTGATCACATGACTGCGCAAGAACTGATCACTTAGATATCA
TACACAGGACACGTGACAGATCATGCACTGATCACGTGACTGATCATGCACTGATCTGGT
GGCTATCATGCACTGATCCCGTGGCTGATCTTGCACTGATCACGTGGCTGATAATGCACT`

export class Blast extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filename:'',
      genome: 'bostaurus.fasta',
      gdata: '',
      ssrResult: '',
      isOpen: false,
      bprog: 'blastn',
      word:'20',
      target: '5',
      evalue: '0.01'


    };
    this.handleGeneChange = this
      .handleGeneChange
      .bind(this);
    this.fileSelected = this
      .fileSelected
      .bind(this);

    this.handleProgram = this.handleProgram.bind(this)
    this.handleChange = this.handleChange.bind(this)

    this.getEvalue = this.getEvalue.bind(this)
    this.getTarget = this.getTarget.bind(this)
    this.getWord = this.getWord.bind(this)
    
    this.runBlast = this
      .runBlast
      .bind(this)


  }
  openModel = () => this.setState({ isOpen: true });
  closeModel = () => this.setState({ isOpen: false });

  handleGeneChange(e) {

    this.setState({ gdata: e.target.value,  filename: '' });
  }

  handleChange(event) {
    event.preventDefault();
    const select = event.target;
    const selectedOption = select.options[select.selectedIndex];
    const choice = selectedOption.value

    this.setState({
        genome: choice,
        
    })
}

handleProgram(event) {
    event.preventDefault();
    const select = event.target;
    const selectedOption = select.options[select.selectedIndex];
    const choice = selectedOption.value

    this.setState({
        bprog: choice,
        
    })
}

  fileSelected(event) {

    this.setState({filename: event.target.files[0], gdata: ''})
    
  }

  getWord = (value) => {

    this.setState({ word: parseInt(value) }, () => {
        
    });
  }
  
  getTarget = (value) => {

    this.setState({ target: parseInt(value) }, () => {
        
    });
  }

  getEvalue (event){
    this.setState({evalue: event.target.value})
  }

runBlast() {
  this.openModel();


  const data = new FormData() 
  data.append('file', this.state.filename)
  data.append('genome', this.state.genome)
  data.append('gdata', this.state.gdata)
  data.append('word', this.state.word)
  data.append('target', this.state.target)
  data.append('evalue', this.state.evalue)
  data.append('program', this.state.bprog)
  

  fetchBlast(data)
  .then(res => { // then print response status
    console.log(res)
    this.closeModel();
    window.open("/ranchsatdb/blastresults", "_blank");
        localStorage.setItem('resultb', JSON.stringify(res))
 })
 .catch(err => {
    console.error(err);
    this.closeModel();
    alert('BLAST job failed. Please try again.');
 })
   
   

  
}

  render() {

    return (
      <div>

        <Container >
          <Row className="mb-2">
            <h4>BLAST Search</h4>
            <Divider />
          </Row>
          <div className="row">
            <div className="col-md-7">
              <div className="row justify-content-center">
                <h5>Enter or paste FASTA sequence</h5>
                <Form.Control className="kbl-form mb-4" as="textarea" rows={6} placeholder={'Paste FASTA sequence'} onChange={this.handleGeneChange}
                  value={this.state.gdata} spellCheck={false} />
                <Button className="kbl-btn-1 mx-3 col-md-3" onClick={e => {
                  this.setState({ gdata: seq });
                }}>Sample Data</Button>
                <Button className="kbl-btn-2 col-md-3" onClick={e => {
                  this.setState({ gdata: "" })
                }}>Clear Data</Button>
              </div>
              <h5 className="mt-3">OR</h5>
              <div className="row my-3">
              <h5 > Upload FASTA file</h5>
                <div className="col-md-12">
                {/* <label for="formFile" class="form-label">Default file input example</label> */}
                <input className="form-control" type="file" name='file' onChange={this.fileSelected}/>

                  
                </div>
              </div>
            </div>

            <div className="col-md-4 mx-5 jusitfy-content-center">
              <h5>Select Options</h5>
              <label className="label-text">Select a Genome </label>
                        <div className="form-inline my-2">
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
                        <label className="label-text">Select a Program </label>
                        <div className="form-inline my-2">
                            <select value={this.state.bprog} className="form-select" onChange={this.handleProgram} >
                                <option value="blastn">Blastn</option>
                                <option value="tblastn">Tblastn</option>
                            </select>
                            </div>

                            <label className='h6'>Maximum Target Sequences</label>
              <Slider defaultValue={5} marks={{ 1: '1', 50: '50' }} disabled={false} min={1} max={50} onChange={this.getTarget} />

              <label className='h6'>Word Size</label>
              <Slider defaultValue={20} marks={{ 1: '1', 50: '50' }} disabled={false} min={1} max={50} onChange={this.getWord} />

              <label className='h6'>Exprected Threshold value</label>
              <input className="form-control" type='text' placeholder="0.01" defaultValue={this.state.evalue} onChange={this.getEvalue}></input>
            </div>
          </div>
          <div className="row justify-content-center">
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
            <div className="col-md-3">
              <Button
                type="success"
                shape="round"
                size="large"
                onClick={this.runBlast}
              >
                Run Blast Search{" "}
              </Button>
            </div>
          )}
          </div>
          </div>
        </Container>

      </div>
    )
  }
}
