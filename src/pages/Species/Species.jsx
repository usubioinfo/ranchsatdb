import React from 'react';
import Data from './speciesInfo.json';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Divider, Table } from 'antd';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import './species.scss';
import { env } from '../../env';
import { Doughnut, Bar } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
import "bootstrap";
Chart.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);


const columns = [
    {
        title: 'Motif',
        dataIndex:'motif',
        align:'center',
    },
    {
        title: 'Frequency',
        dataIndex:'frequency',
        align:'center'
    },
    {
        title: 'Bases',
        dataIndex:'totalbp',
        align:'center',
    },
    {
        title: 'Exon',
        dataIndex:'exon',
        align:'center',
    },
    {
        title: 'Intron',
        dataIndex:'intron',
        align:'center',
    },
    {
        title: 'Intergenic',
        dataIndex:'intergenic',
        align:'center',
    },
    {
        title: 'Promoter',
        dataIndex:'promoter',
        align:'center',
    },
    {
        title: 'Non-Promoter',
        dataIndex:'non_promoter',
        align:'center',
    },


]
export const Species = () => {

    const { id } = useParams();

    let fd = Data.filter(function (i) {
        return i.id === id;
    });

    localStorage.setItem('species', JSON.stringify(fd))


    let [infodata, setinfodata] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            const results = await axios.get(`${env.BACKEND}/api/sinfo`, {
                params: { infotable: fd[0].info },
            });
            setinfodata(results.data);
            
            
            return results
        }

        fetchData();
    }, [fd]);

   

    



    const data = {
        labels: ['Mono', 'Di', 'Tri', 'Tetra', 'Penta', 'Hexa'],
        datasets: [{
            backgroundColor: ['#76C1FA', '#F36368', '#63CF72', '#FABA66', '#d18775', '#b5ae4e'],
            data: fd[0].data,
        }],
        hoverOffset: 4
    };

    const options = {
        barPercentage: 0.9,
        categoryPercentage: 1,
        indexAxis: 'y',
        plugins: {
            legend: {
                display: true,
                labels: {
                    font: {
                        size: 12,
                        weight: 'bold',
                    },

                    color: 'black'
                }
            }
        },
        responsive: true,
        interaction: {
            mode: 'index',
            intersect: false,
        },
        scales: {
            x: {
                stacked: true,
                min: 0,
                max: 100,
                grid: {
                    display: false
                },
                ticks: {
                    color: 'black',
                    font: {
                        size: 12,
                        weight: 'bold',
                    }

                },


            },
            y: {
                stacked: true,
                grid: {
                    display: false
                },
                ticks: {
                    min: 0,
                    max:100,
                    maxRotation: 90,
                    minRotation: 90,
                    color: 'black',
                    font: {
                        size: 12,
                        weight: 'bold',
                    }
                },


            },
        },

    };
    const labels = ['Annotation']
   
    const bdata = {
        labels,
        datasets: [{
            label: 'Exon',
            backgroundColor: '#76C1FA',
            data: labels.map(() => fd[0].bdata[0]),
            stack: 'Stack 0',
        },
        {
            label: 'Intron',
            backgroundColor: '#F36368',
            data: labels.map(() => fd[0].bdata[1]),
            stack: 'Stack 0',
        },
        {
            label: 'Intergenic',
            backgroundColor: '#63CF72',
            data: labels.map(() => fd[0].bdata[2]),
            stack: 'Stack 0',
        },
        {
            label: 'Promoter',
            backgroundColor: '#FABA66',
            data: labels.map(() => fd[0].bdata[3]),
            stack: 'Stack 2',
        },
        {
            label: 'Non-Promoter',
            backgroundColor: '#b5ae4e',
            data: labels.map(() => fd[0].bdata[4]),
            stack: 'Stack 2',
        },
        ],
        hoverOffset: 4
    };



    const moptions = {
        barPercentage: 0.9,
        categoryPercentage: 0.5,
       
        plugins: {
            legend: {
                display: true,
                labels: {
                    font: {
                        size: 12,
                        weight: 'bold',
                    },

                    color: 'black'
                }
            }
        },
        responsive: true,
        interaction: {
            mode: 'index',
            intersect: false,
        },
        scales: {
            x: {
                stacked: true,
                
                grid: {
                    display: false
                },
                ticks: {
                    color: 'black',
                    font: {
                        size: 12,
                        weight: 'bold',
                    }

                },
            },
            y: {
                stacked: true,
                min: 0,
                max: 100,
                grid: {
                    display: false
                },
                ticks: {
                    min: 0,
                    maxRotation: 90,
                    minRotation: 90,
                    color: 'black',
                    font: {
                        size: 12,
                        weight: 'bold',
                    }
                },


            },
        },

    };

    const mdata = {
        labels: ['Intron', 'Intergenic', 'Exon', 'Non-Promoter', 'Promoter'],
        datasets: [{
            label:'Mono',
            backgroundColor: ['#76C1FA'],
            data: fd[0].mono,
        },
        {
            label:'Di',
            backgroundColor: [ '#F36368'],
            data: fd[0].di,
        },
        {
            label:'Tri',
            backgroundColor: ['#63CF72'],
            data: fd[0].tri,
        },
        {
            label:'Tetra',
            backgroundColor: ['#FABA66'],
            data: fd[0].tetra,
        },
        {
            label:'Penta',
            backgroundColor: ['#d18775'],
            data: fd[0].penta,
        },
        {
            label:'Hexa',
            backgroundColor: ['#b5ae4e'],
            data: fd[0].hexa,
        }],
        hoverOffset: 4
    };

    

    return (
        <Container className="App px-4">

            <div className="row flex-lg-row align-items-center g-5 py-2">
                <div id='species' className="mx-auto col-md-8 h4 sid ">{fd[0].name}</div>
                <button id="vtable" className="btn btn-primary col-md-2" onClick={() => window.open("/ranchsatdb/results", "_blank")}  >View Table</button>
                <button id="vplot" className="btn btn-primary col-md-2 d-none">View Plots</button>
            </div>
            <Divider />

            <div className="row mx-5 mx-auto justify-content-center flex-lg-row">
                <div className="result-card  col-md-2">
                    <span>
                        <input className="result-card-input" type="text" readOnly value={fd[0].total} />
                    </span>
                    <h6>Microsatellites</h6>
                </div>
                <div className="result-card col-md-2">
                    <span>
                        <input className="result-card-input" type="text" readOnly value={fd[0].gmb + ' MB'} />
                    </span>
                    <h6>Genome Covered</h6>
                </div>
                <div className="result-card col-md-2">
                    <span>
                        <input className="result-card-input" type="text" readOnly value={fd[0].pgenome + '%'} />
                    </span>
                    <h6>Genome Covered</h6>
                </div>
                <div className="result-card col-md-2 ">
                    <span>
                        <input className="result-card-input" type="text" readOnly value={fd[0].ssrpmb} />
                    </span>

                    <h6>SSRs per Mb</h6>
                </div>
                <div className="result-card col-md-2">
                    <span>
                        <input className="result-card-input" type="text" readOnly value={fd[0].pmbgenome + ' KB'} />
                    </span>
                    <h6>per Mb Genome</h6>
                </div>
            </div>
            <Divider />
            <div className="row flex-lg-row justify-content-center g-5 py-2">

                <div className='col-md-3' >
                    <Doughnut data={data}  options={{
                        // maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                display: true, labels: {
                                    font: {
                                        size: 12,
                                        weight: 'bold',
                                    },

                                    color: 'black'
                                }
                            }
                        }
                    }} />
                </div>

              
                <div className="col-md-4">
                    <Bar options={options} data={bdata} />
                </div>

                <div className='col-md-5 '>
                <Bar options={moptions}  data={mdata} />
                </div>

            </div>


            <div className="row flex-lg-row justify-content-center py-2 mb-4">
                <div className='col-md-12'>

 <Table responsive className='kbl-table kbl-thead' columns={columns}  dataSource={infodata} scroll={{ y: 400}} pagination={false} rowKey="_id" />
 

               
                </div>
                
            </div>






        </Container>


    )

}
