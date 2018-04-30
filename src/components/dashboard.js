import React from "react";

export default class Dashboard extends React.Component {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col s3">
                        <div className="card-panel teal darken-3 white-text">
                            <div className="container">
                                <p id="reminder"><i className="material-icons tiny">notifications</i> Recordatorio</p>
                                <div className="card-title">
                                    <h5 className="title">Lunes, 15 Julio</h5>
                                    <p id="reminder" className="card-content">Enviar declaraciones y reportes a Juan</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col s9">
                    <div className="card-panel white">
                            <div className="row">
                                <div className="col s4 v-divider">
                                    <div class="c100 p63 medium teal-fill">
                                        <span>63%</span>
                                        <div class="slice"> 
                                            <div class="bar"></div>
                                            <div class="fill"></div>
                                        </div>
                                    </div>
                                    <p className="title grey-text">Total Facturas Emitidas</p>
                                    <h4 className="title">2,000</h4>
                                </div>
                                <div className="col s4 v-divider">
                                    <div class="c100 p63 medium teal-fill">
                                        <span>63%</span>
                                        <div class="slice">
                                            <div class="bar"></div>
                                            <div class="fill"></div>
                                        </div>
                                    </div>
                                    <p className="title grey-text">Total Facturas Recibidas</p>
                                    <h4 className="title">2,000</h4>
                                </div>
                                <div className="col s4">
                                    <div class="c100 p30 medium teal-fill">
                                        <span>30%</span>
                                        <div class="slice">
                                            <div class="bar"></div>
                                            <div class="fill"></div>
                                        </div>
                                    </div>
                                    <p className="title grey-text">Total Facturas Conciliadas</p>
                                    <h4 className="title">300</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s7">
                        <div className="card-panel">
                            <div className="center grey-text">
                                Ingresos / Egresos
                            </div>  
                        </div>
                    </div>
                    <div className="col s5">
                        <div className="card-panel">
                            <button className="btn teal darken-3 no-text-transform">Ingresos</button>
                            <p/>
                            <button className="btn transparent no-text-transform black-text">Egresos</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}