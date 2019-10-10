import React from 'react';
import ItemsList from '../components/ItemsList';
import Checkbox from '../components/Checkbox';
import Dropdown from '../components/Dropdown';

export default class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            selectedCategories: ['phones'],
            sortOptions: [
                {key: 'name|asc', name: 'Nimi kasvavalt'},
                {key: 'name|desc', name: 'Nimi kahanevalt'},
                {key: 'price|asc', name: 'Hind kasvavalt'},
                {key: 'price|desc', name: 'Hind kahanevalt'}
            ],
            sortBy: 'name|asc'
        };

        this.onCategoryChanged = this.onCategoryChanged.bind(this);
        this.onSortChanged = this.onSortChanged.bind(this);
    }

    componentDidMount() {
        this.loadProducts();
    }

    componentDidUpdate(_prevProps, prevState) {
        if (prevState.selectedCategories !== this.state.selectedCategories
            || prevState.sortBy !== this.state.sortBy) {
            this.loadProducts();
        }
    }

    onCategoryChanged(e) {
        this.toggleCategory(e.target.name);
    }

    onSortChanged(option) {
        console.log(option);
        this.setState({
            sortBy: option.key
        });
    }

    loadProducts() {
        const sort = this.state.sortBy.split('|');
        let url = `/api/products?sort=${sort[0]}&direction=${sort[1]}`;
        if (this.state.selectedCategories.length) {
            url += `&categories=${this.state.selectedCategories.join(',')}`;
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
                    <div className="row middle-xs">
                        <div className="col-xs-auto">
                            <p className="category-title">Kategooriad:</p>
                        </div>
                        <div className="col-xs-auto">
                            <Checkbox text="Arvutid" name="computers" checked={this.isChecked('computers')} onChange={this.onCategoryChanged} />
                        </div>
                        <div className="col-xs-auto">
                            <Checkbox text="Telefonid" name="phones" checked={this.isChecked('phones')} onChange={this.onCategoryChanged} />
                        </div>
                        <div className="col-xs end-xs">
                            <span>Sorteeri:</span>
                        </div>
                        <div className="col-xs-3">
                            <Dropdown
                                options={this.state.sortOptions}
                                value={this.state.sortBy}
                                onChange={this.onSortChanged}
                            />
                        </div>
                    </div>
                    <div className="row middle-xs">
                        <div className="col-xs end-xs">
                            <p>{`Leitud tooteid: ${this.state.products.length}`}</p>
                        </div>
                    </div>
                    {noCategory}
                    <ItemsList items={this.state.products} onChange={this.onSortChanged} />
                </div>
            </div>
        );
    }
}
