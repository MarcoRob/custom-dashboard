import React from "react";

export default class Dashboard extends React.Component {

    ingresos() {
        let ingresos = [{"cta":"SCOTIANBANK", "cantidad":"-$5000.00"},
                        {"cta":"Juan Jose Leaño", "cantidad":"-$786.00"},
                        {"cta":"HSBC", "cantidad":"-$3405.60"},
                        {"cta":"Pedro Cabrera", "cantidad":"-$8960.00"  }];
        return ingresos.map((ing, index) => 
            <tr>
                <td>{ing.cta}</td>
                <td className="left">{ing.cantidad}</td>
            </tr>
        );
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col s3">
                        <div className="card-panel teal darken-3 white-text">
                                <p id="reminder"><i className="material-icons tiny">notifications</i> Recordatorio</p>
                                <div className="card-title">
                                    <h5>Lunes, 15 Julio</h5>
                                    <p id="reminder" className="card-content">Enviar declaraciones y reportes a Juan</p>
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
                            <div className="row">
                                <div className="col s3">
                                    <button className="left btn teal darken-3 no-text-transform">Ingresos</button>
                                </div>
                                <div className="col s3">
                                    <button className="right btn transparent no-text-transform black-text">Egresos</button>
                                </div>
                            </div>
                            <div className="card-content">
                                <table>
                                    <tbody>
                                        <tr className="grey-text">
                                            <td>Descripción</td>
                                            <td>Cantidad</td>
                                        </tr>
                                        {this.ingresos()}
                                    </tbody>
                                </table>
                            </div>
                            <div className="card-footer">
                                <div className="right">
                                    <ul class="pagination">
                                        <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
                                        <li class="active teal"><a href="#!">1</a></li>
                                        <li class="waves-effect"><a href="#!">2</a></li>
                                        <li class="waves-effect"><a href="#!">3</a></li>
                                        <li class="waves-effect"><a href="#!">4</a></li>
                                        <li class="waves-effect"><a href="#!">...</a></li>
                                        <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
                                    </ul>
                                </div>
                                <div className="section"></div>

                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}