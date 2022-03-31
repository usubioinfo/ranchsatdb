import React from "react";
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import './Table.scss';
import { Divider, Button } from 'antd';
import Table from 'react-bootstrap/Table'
import { env } from '../../env';

const dfiled = [
    'chromosome',
    'motif_type',
    'motif',
    'unit',
    'motif_length',
    'motif_start',
    'motif_end',
    'gene',
    'gene_start',
    'gene_end',
    'strand',
    'annotation'

];
let stable = "bos_taurus"
const tdata = JSON.parse(localStorage.getItem('species'))
if (tdata) {
    stable = tdata[0].table
}


class TableComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            List: [],
            MasterChecked: false,
            SelectedList: [],
            offset: 0,
            perPage: 10,
            currentPage: 1,
            pageCount: 20,
            chromosome: '',
            start: '',
            stop: '',
            motif: '',
            mtype: '',
            Mmin: '',
            annotation: '',
            total: 0,
        };

        this.handlePageClick = this
            .handlePageClick
            .bind(this);
        this.handleChange = this
            .handleChange
            .bind(this);
        this.handleChangeMotif = this
            .handleChangeMotif
            .bind(this);
        this.handleSearch = this
            .handleSearch
            .bind(this);
        this.handleChromosome = this
            .handleChromosome
            .bind(this);
        this.handleStart = this
            .handleStart
            .bind(this);
        this.handleStop = this
            .handleStop
            .bind(this);
        this.handleMin = this
            .handleMin
            .bind(this);
        this.handleClear = this
            .handleClear
            .bind(this)

    }
    // Query for API

    // Get data from API
    getData() {


        let page = this.state.currentPage;
        let motif = this.state.motif
        let type = this.state.mtype
        let chromosome = this.state.chromosome
        let annotation = this.state.annotation
        let start = this.state.start
        let stop = this.state.stop
        let min = this.state.Mmin


        axios.get(`${env.BACKEND}/api/?page=${page}&size=10&motif=${motif}&type=${type}&annotation=${annotation}&chromosome=${chromosome}&start=${start}&stop=${stop}&min=${min}&table=${stable}`)
            .then(res => {
                const List = res.data;


                this.setState({ List })
            })
            .catch(err => console.log(err))

    }
    // Get total data count from server
    getTotal() {
        let motif = this.state.motif
        let type = this.state.mtype
        let annotation = this.state.annotation
        let chromosome = this.state.chromosome
        let start = this.state.start
        let stop = this.state.stop
        let min = this.state.Mmin


        axios.get(`${env.BACKEND}/api/total/?motif=${motif}&type=${type}&annotation=${annotation}&chromosome=${chromosome}&start=${start}&stop=${stop}&min=${min}&table=${stable}`)
            .then(res => {
                // console.log(res.data)
                const dl = Math.ceil(res.data / this.state.perPage)

                console.log(dl)
                this.setState({ pageCount: dl, total: parseInt(res.data) })

            })
            .catch(err => console.log(err))
    }

    componentDidMount() {
        this.getData()
        this.getTotal()
    }

    handlePageClick = (e) => {
        const selectedPage = e.selected;
        // console.log(selectedPage)
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset,
        }, () => {
            this.getData()
            this.getTotal()
        });

    };



    // Select/ UnSelect Table rows
    onMasterCheck(e) {
        let tempList = this.state.List;
        // Check/ UnCheck All Items
        tempList.map((user) => (user.selected = e.target.checked));

        //Update State
        this.setState({
            MasterChecked: e.target.checked,
            List: tempList,
            SelectedList: this.state.List.filter((e) => e.selected),
        });
    }

    // Update List Item's state and Master Checkbox State
    onItemCheck(e, item) {
        let tempList = this.state.List;
        tempList.map((user) => {
            if (user._id === item._id) {
                user.selected = e.target.checked;
            }
            return user;
        });

        //To Control Master Checkbox State
        const totalItems = this.state.List.length;
        const totalCheckedItems = tempList.filter((e) => e.selected).length;

        // Update State
        this.setState({
            MasterChecked: totalItems === totalCheckedItems,
            List: tempList,
            SelectedList: this.state.List.filter((e) => e.selected),
        });
    }

    // Event to get selected rows(Optional)
    getSelectedRows() {
        this.setState({
            SelectedList: this.state.List.filter((e) => e.selected),
        });
    }

    handleSearch(event) {
        event.preventDefault();
        const motif = event.target.value.toUpperCase()
        this.setState({
            motif: motif,
            currentPage: 0,
            offset: 0,

        }, () => {
            this.getData()
            this.getTotal()
        });
    }

    handleChromosome(event) {
        event.preventDefault();
        const chr = event.target.value
        this.setState({
            chromosome: chr,
            currentPage: 0,
            offset: 0,

        }, () => {
            this.getData()
            this.getTotal()
        });


    }


    handleChangeMotif(event) {
        event.preventDefault();
        const select = event.target;
        const selectedOption = select.options[select.selectedIndex];
        const choice = selectedOption.value
        this.setState({
            mtype: choice,
            currentPage: 0,

        }, () => {
            this.getData()
            this.getTotal()
        });

    }

    handleChange(event) {
        event.preventDefault();
        const select = event.target;
        const selectedOption = select.options[select.selectedIndex];
        const choice = selectedOption.value
        this.setState({
            annotation: choice,
            currentPage: 0,
            offset: 0,
        }, () => {
            this.getData()
            this.getTotal()
        });

    }

    handleStart(e) {
        e.preventDefault();
        const start = e.target.value;
        this.setState({
            start: start,
            currentPage: 0,
            offset: 0,
        }, () => {
            this.getData()
            this.getTotal()
        });
    }


    handleStop(e) {
        e.preventDefault();
        const stop = e.target.value;
        this.setState({
            stop: stop,
            currentPage: 0,
            offset: 0,
        }, () => {
            this.getData()
            this.getTotal()
        });
    }

    handleMin(e) {
        e.preventDefault();
        const min = e.target.value;
        this.setState({
            Mmin: min,
            currentPage: 0,
            offset: 0,
        }, () => {
            this.getData()
            this.getTotal()
        });
    }

    handleClear(e) {

        e.preventDefault();
        this.setState({
            chromosome: '',
            start: '',
            stop: '',
            motif: '',
            mtype: '',
            Mmin: '',
            annotation: '',
            currentPage: 0,
            offset: 0,

        }, () => {
            this.getData()
            this.getTotal()
        });
    }

    render() {
        return (
            <div>
                <Divider />
                <div className="row flex-lg-row justify-content-center">
                    <div className="col-md-2 h5"> Filter options</div>
                </div>

                <div className="row flex-lg-row justify-content-center g-2">
                    <div className="col-sm-1">
                        <div className="form-inline">
                            <label className="label-text">Chromosome</label>
                            <input className="form-control" type="text" value={this.state.chromosome} onChange={this.handleChromosome}></input>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div className="form-inline">
                            <label className="label-text">Start</label>
                            <input className="form-control" type="number" step="Any" value={this.state.start} onChange={this.handleStart} ></input>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <div className="form-inline">
                            <label className="label-text">Stop</label>
                            <input className="form-control" type="number" value={this.state.stop} step="Any" onChange={this.handleStop}></input>
                        </div>
                    </div>

                    <div className="col-sm-2">
                        <div className="form-inline">
                            <label className="label-text">Repeat Motif </label>
                            <input type="text" value={this.state.motif} className="form-control deepnec-form" onChange={this.handleSearch}></input>
                        </div>
                    </div>
                    <div className="col-sm-1">
                        <div className="form-inline">
                            <label className="label-text">Type</label>
                            <select value={this.state.mtype} className="form-select" onChange={this.handleChangeMotif}>
                                <option value="">All</option>
                                <option value="mono">Mono</option>

                                <option value="di">Di</option>

                                <option value="tri">Tri</option>

                                <option value="tetra">Tetra</option>

                                <option value="penta">Penta</option>

                                <option value="hexa">Hexa</option>

                            </select>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <label className="label-text">Min Motif Length</label>
                        <input type="number" className="form-control" value={this.state.Mmin} onChange={this.handleMin}></input>

                    </div>


                    <div className="col-sm-2">
                        <div className="form-inline">
                            <label className="label-text">Annotation </label>
                            <select value={this.state.annotation} className="form-select" onChange={this.handleChange} >
                                <option value=''>All</option>
                                <option value="Exon">Exon</option>

                                <option value="Intron">Intron</option>

                                <option value="Intergenic">Intergenic</option>
                            </select>
                        </div>
                    </div>
                </div>

                <Divider />
                <div className="row flex-lg-row align-items-center g-2 mb-3">
                    <div className="col-md-2">
                        <Button type="primary" shape="round" size='large' onClick={() => window.open("/ranchsatdb/sequences", "_blank")}>Get Sequences</Button>
                    </div>
                    <div className="col-sm-2">
                        <Button type="danger" shape="round" size='large' onClick={this.handleClear}>Clear Search</Button>
                    </div>

                    <div className="col-sm-4 mt-4">
                        <h5> Showing {this.state.offset + 1} to {this.state.offset + 10} of {this.state.total} Repeat Motifs</h5>
                    </div>

                </div>

                <Table responsive className="kbl-table table  table-borderless">
                    <thead className="kbl-thead">
                        <tr>
                            <th scope="col">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    checked={this.state.MasterChecked}
                                    id="mastercheck"
                                    onChange={(e) => this.onMasterCheck(e)}
                                />
                            </th>
                            <th >Chromosome ID</th>
                            <th >Motif Type</th>
                            <th >Motif</th>
                            <th >Unit</th>
                            <th >Motif Length</th>
                            <th >Start</th>
                            <th >End</th>
                            <th >Gene</th>
                            <th >Gene Start</th>
                            <th >Gene End</th>
                            <th >Strand</th>
                            <th >Annotation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.List.map((result, index) => (
                            <tr key={index + 1} className={result.selected ? "selected" : ""}>
                                <td >
                                    <input
                                        type="checkbox"
                                        checked={result.selected}
                                        className="form-check-input"
                                        id={result._id}

                                        onChange={(e) => this.onItemCheck(e, result)}
                                    />
                                </td>

                                {Array.from(dfiled).map((_, index) => (

                                    <td key={index + 1}>
                                        {result[dfiled[index]]}
                                    </td>


                                ))}
                            </tr>
                        ))}

                    </tbody>
                </Table>

                <ReactPaginate
                    forcePage={this.state.currentPage}
                    previousLabel={"<"}
                    nextLabel={">"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={3}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}
                    ellipsisItem={null}
                />

                {localStorage.setItem('sedata', JSON.stringify(this.state.SelectedList))}
                {console.log(this.state.SelectedList)}
            </div >
        );
    }
}

export default TableComponent;