
export class ListItemModel{
    _id?: String;
    categoryId?: String;
    item_name?: String;
    price?: Number;
    quantity?: Number;
    
    constructor(item_name: String, price: Number, _id?: String, categoryId?: String, quantity?: Number) {
        this._id = _id;
        this.categoryId = categoryId;
        this.item_name = item_name;
        this.price = price;
        this.quantity = quantity;
    }
}