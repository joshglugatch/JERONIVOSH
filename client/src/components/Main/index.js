import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import CoopLogin from '../CoopLogin';
import Instructions from '../Instructions';
import './style.css'

function Main({start}) {


   return(
    <div className="container mainMenu">
        <div className="d-flex justify-content-center">
            <div class="card gameTypeContainer col-auto">
                <div className="card-body">
                    <h1 className="px-auto mb-0 brand">
                    JERONIVOSH
                    </h1>
                    <hr/>
                    <div className="row">
                        <div className="col-md-5">
                            {/* <Link to={"/game"}><div className="btn mr-1">SOLO</div></Link> */}
                            <button className="btn btn-block mr-1 hvr-back-pulse" id="soloBtn" onClick={start}>Single Player</button>
                        </div>
                        <div className="col-md-7">
                            {/* <Link to={"/coopLogin"}> */}
                            <div className="btn btn-block ml-1 hvr-back-pulse" id ="coopBtn">CO-OP (COMING SOON)</div>
                            {/* </Link> */}
                        </div>
                    </div>
                    <Instructions />
                </div>  
            </div> 
        </div>
    </div>

   ) 
}

export default withRouter(Main);


