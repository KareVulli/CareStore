import React from 'react';
import ItemsList from '../components/ItemsList';
import Checkbox from '../components/Checkbox';

export default class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            selectedCategories: ['phones']
        };

        this.onCategoryChanged = this.onCategoryChanged.bind(this);
    }

    componentDidMount() {
        this.loadProducts();
    }

    componentDidUpdate(_prevProps, prevState) {
        if (prevState.selectedCategories !== this.state.selectedCategories) {
            this.loadProducts();
        }
    }

    onCategoryChanged(e) {
        this.toggleCategory(e.target.name);
    }

    loadProducts() {
        let url = '/api/products';
        if (this.state.selectedCategories.length) {
            url += `?categories=${this.state.selectedCategories.join(',')}`;
        }
        fetch(url)
            .then((response) => response.json())
            .then((products) => {
                this.setState({
                    products
                });
            });
    }

    toggleCategory(category) {
        this.setState((state) => {
            const selection = [...state.selectedCategories];
            const index = selection.indexOf(category);
            if (index > -1) {
                selection.splice(index, 1);
            } else {
                selection.push(category);
            }

            return {
                selectedCategories: selection
            };
        });
    }

    isChecked(category) {
        return this.state.selectedCategories.includes(category);
    }

    render() {
        let noCategory = null;
        if (!this.state.selectedCategories.length) {
            noCategory = <p className="no-categories">Pole ühtegi kategooriat valitud :(</p>;
        }
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-xs">
                            <p>Kategooriad:</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-2">
                            <Checkbox text="Arvutid" name="computers" checked={this.isChecked('computers')} onChange={this.onCategoryChanged} />
                        </div>
                        <div className="col-xs-2">
                            <Checkbox text="Telefonid" name="phones" checked={this.isChecked('phones')} onChange={this.onCategoryChanged} />
                        </div>
                    </div>
                    {noCategory}
                    <ItemsList items={this.state.products} />
                </div>
            </div>
        );
    }
}
