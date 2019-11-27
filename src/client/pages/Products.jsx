import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ItemsList from '../components/ItemsList';
import Checkbox from '../components/Checkbox';
import Dropdown from '../components/Dropdown';
import {
    loadProducts, toggleCategory, setSortBy
} from '../actions/products';
import {
    areProductsLoading, getSortBy, getSelectedCategories, getProducts
} from '../selectors';

class Products extends React.Component {
    static propTypes = {
        selectedCategories: PropTypes.array.isRequired,
        products: PropTypes.array.isRequired,
        sortBy: PropTypes.string.isRequired,
        loading: PropTypes.bool.isRequired,

        loadProducts: PropTypes.func.isRequired,
        toggleCategory: PropTypes.func.isRequired,
        setSortBy: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            sortOptions: [
                {key: 'name|asc', name: 'Nimi kasvavalt'},
                {key: 'name|desc', name: 'Nimi kahanevalt'},
                {key: 'price|asc', name: 'Hind kasvavalt'},
                {key: 'price|desc', name: 'Hind kahanevalt'}
            ]
        };

        this.onCategoryChanged = this.onCategoryChanged.bind(this);
        this.onSortChanged = this.onSortChanged.bind(this);
    }

    componentDidMount() {
        this.props.loadProducts();
    }

    onCategoryChanged(e) {
        this.props.toggleCategory(e.target.name);
    }

    onSortChanged(option) {
        this.props.setSortBy(option.key);
    }

    isChecked(category) {
        return this.props.selectedCategories.includes(category);
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row middle-xs">
                        <div className="col-xs-12 col-sm">
                            <span className="category-title">Kategooriad:</span>
                            <Checkbox text="Arvutid" name="computers" checked={this.isChecked('computers')} onChange={this.onCategoryChanged} />
                            <Checkbox text="Telefonid" name="phones" checked={this.isChecked('phones')} onChange={this.onCategoryChanged} />
                        </div>
                        <div className="col-xs-3 col-sm-2 end-sm">
                            <span>Sorteeri:</span>
                        </div>
                        <div className="col-xs-9 col-sm-4 col-md-3">
                            <Dropdown
                                options={this.state.sortOptions}
                                value={this.props.sortBy}
                                onChange={this.onSortChanged}
                            />
                        </div>
                    </div>
                    <div className="row middle-xs">
                        <div className="col-xs">
                            <p>{`Leitud tooteid: ${this.props.products.length}`}</p>
                        </div>
                    </div>
                    <ItemsList items={this.props.products} loading={this.props.loading} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    products: getProducts(state),
    selectedCategories: getSelectedCategories(state),
    sortBy: getSortBy(state),
    loading: areProductsLoading(state)
});

const mapDispatchToProps = (dispatch) => ({
    loadProducts: () => dispatch(loadProducts()),
    toggleCategory: (category) => dispatch(toggleCategory(category)),
    setSortBy: (sortBy) => dispatch(setSortBy(sortBy))
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
