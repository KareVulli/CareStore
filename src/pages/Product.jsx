import React from 'react';
import Header from '../components/Header';

export default class Product extends React.Component {
    render() {
        return (
            <div>
                <Header key="header" />
                <div className="container">
                    <h1>Product page</h1>
                </div>
            </div>
        );
    }
}
