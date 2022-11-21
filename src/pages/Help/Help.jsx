import React from "react";
import { Divider } from "antd";
import './Help.scss'
import { LinkOutlined } from "@ant-design/icons";
export default class Help extends React.Component {

    render() {
        return (
            <div className="container">
                <Divider />
                <div className="row flex-lg-row justify-content-center g-2 my-2 mx-2">
                    <h5><b>ranchSATdb Tutorial</b></h5>
                    <Divider />
                    <p className="infot">
                        Introduction
                    </p>
                    <p className="infoh">
                      ranchSATdb is a microsatellite markers database for ranch animals. It contains markers from 12 ranch animal species. 
                    </p>
                    <img src="images/home.png" className="imk" alt="" />
                    <Divider />
                    <p className="infot">
                        Species 
                    </p>
                    <p className="infoh">
                      Species page provides the information about the species. Number of markers lies in exon, intron, and intergenic region. 
                    </p>
                    <img src="images/species.png" className="imk" alt="" />

                    <Divider />
                    <p className="infot">
                        SSR Search Result
                    </p>
                    <p className="infoh">
                        On this page user can filter markers based on chromosome, motif length, minimum repeats, annotation type, etc. 
                    </p>
                    <img src="images/table.png" className="imk" alt="" />
                    <Divider />
                    <p className="infot">
                        SSR Visualization on Sequence
                    </p>
                    <p className="infoh">
                       The user selected flank sequence upstream and downstream from the SSR repeats.
                    </p>
                    <img src="images/seq_table.png" className="imk" alt="" />

                    <img src="images/seq_fasta.png" className="imk" alt="" />
                    <Divider />
                    <p className="infot">
                        Primer Design
                    </p>
                    <p className="infoh">
                    On this page user can design the custom primers by slecting  melting temprature, GC content, and prodcut size. 
                    </p>
                    <img src="images/primer.png" className="imk" alt="" />
                    <p className="infot">
                        ePCR
                    </p>
                    <p className="infoh">
                    On this page user can check primer amplification electronically. 
                    </p>
                    <img src="images/epcr.png" className="imk" alt="" />
                    <img src="images/epcr2.png" className="imk" alt="" />
                    <p className="infot">
                        SSR Prediction Tool
                    </p>
                    <p className="infoh">
                    On this page user can identify SSR markers in their sequences. 
                    </p>
                    <img src="images/ssr.png" className="imk" alt="" />
                    <p className="infoh">
                    SSR prediction results
                    </p>
                    <img src="images/ssr2.png" className="imk" alt="" />
                    <p className="infot">
                        Blast Search
                    </p>
                    <p className="infoh">
                    On this page user can find similar sequences in ranch animal species using BLAST. 
                    </p>
                    <img src="images/blast.png" className="imk" alt="" />
                    <p className="infoh">
                    BLAST results
                    </p>
                    <img src="images/blast_result.png" className="imk" alt="" />
                </div>
                <div className="row  flex-lg-row justify-content-center g-2">
          <Divider />
          <p>
            &copy; 2022 |&nbsp;{" "}
            <a
              href="http://bioinfo.usu.edu"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kaundal Artificial Intelligence and Advanced Bioinformatics Lab
            </a>
            &nbsp; |&nbsp;{" "}
            <a href="https://usu.edu" target="_blank" rel="noopener noreferrer">
              Utah State University
            </a>
          </p>
        </div>
            </div>
        )
    }
}