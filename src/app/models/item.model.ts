
export class ListItemModel{
    _id?: String;
    category?: String;
    item_name?: String;
    price?: Number;
    quantity?: Number;
    
    constructor(_id: String, category: String, item_name: String, price: Number, quantity?: Number) {
        this._id = _id;
        this.category = category;
        this.item_name = item_name;
        this.price = price;
        this.quantity = quantity;
    }
}