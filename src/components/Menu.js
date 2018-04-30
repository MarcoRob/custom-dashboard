import React from "react";

export default class Menu extends React.Component {
    
    render() {
        return (
            <nav>
                <div className="nav-wrapper white">
                    <div className="logo black-text">debitum</div>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <a href="sass.html" className="black-text">Sass</a>
                        </li>
                        <li>
                            <a href="badges.html" className="black-text">Components</a>
                        </li>
                        <li>
                            <a href="index.html" className="black-text">
                                <i className="material-icons blue-grey-text lighten-4">notifications</i>
                                <span class="custom_badge red">4</span></a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}