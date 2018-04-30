import React from "react";

export default class Menu extends React.Component {
    
    componentDidMount() {
        var instanc0_cta_banco = M.Dropdown.init(document.querySelector('#cuenta_bancaria'));
        var instance_cta_sat = M.Dropdown.init(document.querySelector('#cuenta_sat'));
    }
    
    render() {
        return (
            <nav className="max-bar">
                <div className="nav-wrapper white">
                    <div className="logo black-text">debitum</div>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                        <a id="cuenta_bancaria" className='dropdown-trigger white blue-grey-text btn btn-large no-text-transform' data-target='bankAccounts'>
                            Cuenta Bancaria 
                            <i className="material-icons right">arrow_drop_down</i>
                            <p>Etiqueta/HSBC</p>
                        </a>

                        <ul id='bankAccounts' className='dropdown-content'>
                            <li><a href="#!">Etiqueta/HSBC</a></li>
                            <li><a href="#!">Etiqueta/Banamex</a></li>
                            <li><a href="#!">Etiqueta/Banorte</a></li>
                        </ul>
                        </li>
                        <li>
                        <a id="cuenta_sat" className='dropdown-trigger white blue-grey-text btn btn-large no-text-transform' data-target='satAccounts'>
                            Cuenta SAT
                            <i className="material-icons right">arrow_drop_down</i>
                            
                        </a>

                        <ul id='satAccounts' className='dropdown-content'>
                            <li><a href="#!">RFC-3454</a></li>
                            <li><a href="#!">RFC-4040</a></li>
                            <li><a href="#!">RFC-5050</a></li>
                        </ul>
                        </li>
                        <li>
                            <a href="index.html" className="black-text">
                                <i className="material-icons blue-grey-text lighten-4">notifications</i>
                                <span className="custom_badge red">4</span></a>
                        </li>
                    </ul>
                </div>
            </nav>
            
        )
    }
}