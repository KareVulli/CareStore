import React from 'react';
import ItemsList from '../components/ItemsList.jsx';
import { computers, phones } from '../productsList.js';

export default class Products extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <h1>Product page</h1>
            </div>
        );
    }
}