/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowUp, faArrowDown} from '@fortawesome/free-solid-svg-icons';
import AnimateHeight from 'react-animate-height';

export default class Dropdown extends React.Component {
    static counter = 0;

    static propTypes = {
        options: PropTypes.array.isRequired,
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            height: 0
        };

        this.onKeyDown = this.onKeyDown.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this);
    }

    onKeyDown(e) {
        if (e.keyCode === 13 || e.keyCode === 32) {
            this.toggleDropdown();
        }
        e.preventDefault();
    }

    onItemClick(option) {
        this.props.onChange(option);
        this.toggleDropdown();
    }

    toggleDropdown() {
        this.setState((state) => ({
            open: !state.open,
            height: state.open ? 0 : 'auto'
        }));
    }

    render() {
        let menulist = null;
        const opts = [];
        for (let i = 0; i < this.props.options.length; i += 1) {
            const option = this.props.options[i];
            opts.push(<li key={option.key} value={option.key} role="menuitem" onClick={() => { this.onItemClick(option); }} onKeyDown={() => {}}>{option.name}</li>);
        }
        menulist = <ul className="dropdown-menu">{opts}</ul>;
        return (
            <div className="dropdown">
                <div className="dropdown-header" role="menu" tabIndex="0" onClick={this.toggleDropdown} onKeyDown={this.onKeyDown}>
                    <div className="dropdown-title">{this.props.options.find((opt) => this.props.value === opt.key).name}</div>
                    <div className="dropdown-arrow">{ this.state.open ? <FontAwesomeIcon icon={faArrowUp} /> : <FontAwesomeIcon icon={faArrowDown} /> }</div>
                </div>
                <AnimateHeight className="dropdown-menu-container" duration={250} easing="ease-out" height={this.state.height}>
                    {menulist}
                </AnimateHeight>
            </div>
        );
    }
}
