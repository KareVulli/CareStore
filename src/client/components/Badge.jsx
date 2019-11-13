import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';

class Badge extends React.Component {
    static propTypes = {
        count: PropTypes.number.isRequired
    };

    render() {
        let badge = null;
        if (this.props.count > 0) {
            badge = this.props.count;
        }
        return (
            <span className="cart-badge">
                <FontAwesomeIcon className="navbar-icon" icon={faShoppingCart} size="2x" />
                <div className="cart-badge-count">{badge}</div>
            </span>
        );
    }
}

export default Badge;
