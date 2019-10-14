import Product from '../models/product';
import BaseRespository from './base';

class ProductRepository extends BaseRespository {
    constuctor() {
        this.Model = Product;
    }

    async getProductsByCategories(categories, sort = 'name', direction = 'desc') {
        const products = await this.Model.find({
            category: {$in: categories.split(',')}
        }).sort({
            [sort]: direction === 'desc' ? -1 : 1
        }).lean();
        return products;
    }
}

export default ProductRepository;
