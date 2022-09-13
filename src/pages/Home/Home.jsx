import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import { env } from '../../env';
import { Divider, Button } from "antd";
import './Home.scss';

export class Home extends Component {
    render() {
        return (
            <div>

                <Container >
                    <Row className="mb-2 justify-content-center">
                        <h4><i>ranchSATdb: </i>A comprehensive microsatellite database of farm animals</h4>
                        <Divider />
                    </Row>
                    <Row className="mb-2 justify-content-center">
                        <div className="col-md-6">
             
                <p className="pinfo">
                Microsatellites, also known as simple sequence repeats (SSRs), are polymorphic loci that play an important role in genome research and animal breeding and disease control. The ranch animal SSR database (ranchSATdb) is a web resource which contains 15,520,263 putative SSR markers.  This web resource is an integrated tool for performing end-to-end marker selection, from predicting SSRs to generating marker primers and their cross-species feasibility, visualizing the results, and finding similarities between the genomic sequences all in one location without the need to switch between other resources. The user-friendly online interface allows users to browse SSRs by genomic coordinates, chromosome, motif type, repeat motif sequence, motif frequency, and annotation. Users may enter their preferred flanking area around the repeat to retrieve the sequence, they can investigate the genes in which the SSRs are present or the genes between which the SSRs are coupled, they can generate custom primers, and they can also perform in silico validation of primers using electronic PCR. A SSR prediction pipeline miSATminer is also implemented for user provided sequences. This web resource will be regularly updated with new species throughout time. We anticipate that ranchSATdb would be a valuable resource for marker-assisted selection and mapping quantitative trait loci (QTLs) to enhance anaimal health through genomic selection. 
                </p>

                <Button type="primary" shape="round"  size='large'>Browse Tutorial</Button>
                
           

                        </div>
                        <div className="col-md-6">
                        <div className="row mx-5 mx-auto justify-content-center flex-lg-row">
                <div className="result-card  col-md-2">
                    <span>
                        <input className="result-card-input" type="text" readOnly value='12' />
                    </span>
                    <h6>Species</h6>
                </div>
                <div className="result-card  col-md-2">
                    <span>
                        <input className="result-card-input" type="text" readOnly value='12' />
                    </span>
                    <h6>Genomes</h6>
                </div>
                <div className="result-card col-md-4">
                    <span>
                        <input className="result-card-input" type="text" readOnly value='15,520,263' />
                    </span>
                    <h6>Microsatellites</h6>
                </div>
                </div>
                            <Table className="kbl-table kbl-thead table-borderless text-center ">
                                <thead className="kbl-thead">
                                    <tr>
                                        <th>
                                            Species Name
                                        </th>
                                        <th>
                                            Common Name
                                        </th>
                                        <th>
                                            SSR per MB
                                        </th>
                                        <th>
                                            Actions
                                        </th>
                                    </tr>

                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <i>Bos taurus</i>
                                        </td>
                                        <td>
                                            Cow
                                        </td>
                                        <td>
                                            447.65
                                        </td>
                                        <td>
                                            <a href={`${env.BASE_URL}/species/1`}>Browse Species</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <i>Capra hircus</i>
                                        </td>
                                        <td>
                                            Goat
                                        </td>
                                        <td>
                                            431.70
                                        </td>
                                        <td>
                                            <a href={`${env.BASE_URL}/species/2`}>Browse Species</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <i>Canis lupus familiaris</i>
                                        </td>
                                        <td>
                                            Dog
                                        </td>
                                        <td>
                                            1001.23
                                        </td>
                                        <td>
                                            <a href={`${env.BASE_URL}/species/3`}>Browse Species</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <i>Felis catus</i>
                                        </td>
                                        <td>
                                            Cat
                                        </td>
                                        <td>
                                            1165.93
                                        </td>
                                        <td>
                                            <a href={`${env.BASE_URL}/species/4`}>Browse Species</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <i>Equus asinus</i>
                                        </td>
                                        <td>
                                            Donkey
                                        </td>
                                        <td>
                                            366.96
                                        </td>
                                        <td>
                                            <a href={`${env.BASE_URL}/species/5`}>Browse Species</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <i>Equus callbus</i>
                                        </td>
                                        <td>
                                            Horse
                                        </td>
                                        <td>
                                            358.01
                                        </td>
                                        <td>
                                            <a href={`${env.BASE_URL}/species/6`}>Browse Species</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <i>Sus sacrofa</i>
                                        </td>
                                        <td>
                                            Pig
                                        </td>
                                        <td>
                                            734.90
                                        </td>
                                        <td>
                                            <a href={`${env.BASE_URL}/species/7`}>Browse Species</a>
                                        </td>
                                    </tr>
                           
                                    <tr>
                                        <td>
                                            <i>Bubalus bubalis</i>
                                        </td>
                                        <td>
                                            Buffalo
                                        </td>
                                        <td>
                                            459.34
                                        </td>
                                        <td>
                                            <a href={`${env.BASE_URL}/species/8`}>Browse Species</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <i>Ovis aries</i>
                                        </td>
                                        <td>
                                            Sheep
                                        </td>
                                        <td>
                                            438.11
                                        </td>
                                        <td>
                                            <a href={`${env.BASE_URL}/species/9`}>Browse Species</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <i>Bos grunniens</i>
                                        </td>
                                        <td>
                                            Domestic Yak
                                        </td>
                                        <td>
                                            443.48
                                        </td>
                                        <td>
                                            <a href={`${env.BASE_URL}/species/10`}>Browse Species</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <i>Apis melifera</i>
                                        </td>
                                        <td>
                                            Honey Bee
                                        </td>
                                       <td>
                                        1393.76
                                       </td>
                                        <td>
                                            <a href={`${env.BASE_URL}/species/11`}>Browse Species</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <i>Gallus gallus</i>
                                        </td>
                                        <td>
                                            Chicken
                                        </td>
                                        <td>
                                            474.51
                                        </td>
                                        <td>
                                            <a href={`${env.BASE_URL}/species/12`}>Browse Species</a>
                                        </td>
                                    </tr>

                                </tbody>


                            </Table>



                       </div>

                    </Row>
                    <Divider />
                    <div className="row justify-content-center">
                    <h6>Copyright 2022 &copy; <a href="http://bioinfo.usu.edu/" target={'_blank'}rel="noreferrer">Kaundal Artifical Intelligence & Advanced Bioinformatics Lab</a> &nbsp;| &nbsp;<a href="https://caas.usu.edu/psc/" target={'_blank'}rel="noreferrer">Department of Plants, Soils and Climate</a> &nbsp; | &nbsp; <a href="https://usu.edu/" target={'_blank'}rel="noreferrer">Utah State University</a></h6>
                    </div>
                </Container>

            </div>
        )
    }
}
