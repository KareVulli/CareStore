import React from 'react';
import ItemsList from '../components/ItemsList';
import { computers, phones } from '../productsList';
import Header from '../components/Header';

export default class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [...computers, ...phones]
        };

        this.onCategoryChanged = this.onCategoryChanged.bind(this);
    }

    onCategoryChanged(e) {
        switch (e.target.value) {
        case 'computers':
            this.setState({
                products: computers
            });
            break;
        case 'phones':
            this.setState({
                products: phones
            });
            break;
        case 'all':
        default:
            this.setState({
                products: [...computers, ...phones]
            });
            break;
        }
    }

    render() {
        return (
            <div>
                <Header key="header" />
                <div className="container">
                    <div className="row">
                        <div className="col-xs">
                            <p>Kategooria:</p>
                            <select id="categories" onChange={this.onCategoryChanged}>
                                <option value="all">Kõik</option>
                                <option value="computers">Arvutid</option>
                                <option value="phones">Telefonid</option>
                            </select>
                        </div>
                    </div>
                    <ItemsList items={this.state.products} />
                </div>
            </div>
        );
    }
}
