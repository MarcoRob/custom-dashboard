import React from "react";

export default class SearchMenu extends React.Component {

    componentDidMount() {
        var instance_mens = M.Dropdown.init(document.querySelector('#drop_mensual'));
        var instance_anu = M.Dropdown.init(document.querySelector('#drop_anual'));
    }

    dropAnualOptions() {
        let meses = ["2015", "2016", "2017", "2018"];
        
        return meses.map((mes, index) => <li><a href="#!">{mes}</a></li>);
    }
    dropMensualOptions() {
        let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        
        return meses.map((mes, index) => <li><a href="#!">{mes}</a></li>);
    }
    render() {
        return (
            <nav id="search-bar">
                <div className="nav-wrapper white">
                    <div className="row">
                        <div className="col s3" >
                            <div className="row" id="topbarsearch">
                                <div className="input-field col s6 s12 black-text">
                                    <i className="black-text material-icons prefix">search</i>
                                    <input type="text" placeholder="Buscar sección, documento, nombre" className="black-text" />
                                </div>
                            </div>
                        </div>
                        <div className="col s6">
                            <ul className="">
                                <li className="active"><a href="#" className="black-text">Todo</a></li>
                                <li>
                                    <a id="drop_anual" class="dropdown-trigger black-text" data-target="anual">
                                        Anual<i class="material-icons right">arrow_drop_down</i>
                                    </a>
                                </li>
                                <li>
                                    <a id="drop_mensual" class="dropdown-trigger black-text" data-target="mensual">
                                        Menusal<i class="material-icons right">arrow_drop_down</i>
                                    </a>
                                </li>
                                <li><a href="#" className="black-text">Por Periodo:</a></li>
                                <li><a href="#" className="black-text btn white no-text-transform">dd-mm-aa</a></li>
                                <li><a href="#" className="black-text btn white no-text-transform">dd-mm-aa</a></li>
                            </ul>
                            <ul id="anual" className="dropdown-content">
                                {this.dropAnualOptions()}
                            </ul>
                            <ul id="mensual" className="dropdown-content">
                                {this.dropMensualOptions()}
                            </ul>
                        </div>
                        <div className="col s3 center-align">
                            <div className="right">
                                <div>
                                    <a className="btn btn-medium update-sat waves-effect no-text-transform" >
                                        Actualizar SAT 
                                    </a>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}