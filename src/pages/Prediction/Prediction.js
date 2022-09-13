import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Divider } from "antd";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FileInput from '../../components/FileInput/FileInput'

export class Prediction extends Component{
    render(){
        return(
           <div>
               
          <Container >
            <Row className="mb-2">
            <h4>SSR Prediction</h4>
            <Divider />
           </Row>
           <div className="row">
            <div className="col-md6">
            
            <h5>Enter or paste FASTA sequence</h5>
                    <Form.Control className="kbl-form mb-4" as="textarea" rows={6} placeholder={'upload'} onChange={ this.handleGeneChange }
                      value={''}  spellCheck={false}/>
                    <Button className="kbl-btn-1 mx-3" onClick={e => {
                        // this.setState({genes: ''});
                      }}>Sample Data</Button>
                    <Button className="kbl-btn-2" onClick={e => {
                        // this.setState({genes: ""})
                      }}>Clear Data</Button>
         
            </div>
            <div className="col-md-1"><b>OR</b></div>
          <div className="col-md-3 mb-5">
<h5 className="mt-5 pl-2"> Upload Protein IDs List</h5>

<FileInput handler={this.fileSelected} />
</div>
           </div>
            </Container>
           
           </div>
        )
    }
}