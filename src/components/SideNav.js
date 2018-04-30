import React from "react";

export default class SideNav extends React.Component {

    render() {
        return(
            <div>
            <ul id="slide-out" class="side-menu card">
                <li className="option-panel option-panel-active"><i class="material-icons">dashboard</i></li>
                <li className="option-panel"><i class="material-icons">&#xE24D;</i></li>
                <li className="option-panel"><i class="material-icons">all_inclusive</i></li>
                <li className="option-panel"><i class="material-icons">supervisor_account</i></li>
                <li className="option-panel"><i class="material-icons">assessment</i></li>
                <li className="option-panel"><i class="material-icons">gavel</i></li>
                <li style={{"height":'14em'}} className="option-panel bottom" ><img src="https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?resize=256%2C256&quality=100" 
                            className="circle responsive-img" /></li>
                <li className="option-panel bottom  "><i class="material-icons">settings</i></li>
            </ul>
            <ul id="slide-out" class="second-side-menu card">
                <li className="option-panel-second">Dashboard</li>
                <li className="option-panel-second">Facturación</li>
                <li className="option-panel-second">Conciliaciones</li>
                <li className="option-panel-second">Clientes</li>
                <li className="option-panel-second">Reportes</li>
                <li className="option-panel-second">Declaraciones</li>
                <li style={{"height":'14em'}} className="option-panel-second bottom">Perfil</li>
                <li className="option-panel-second bottom">Configuración</li>
            </ul>
            </div>
        );
    }
}