// class drinks{
//     constructor(name, maker){
//         this.name = name;
//         this.maker = maker;
//     }
// }


class drinks{
    constructor(name,size,brand){
    this.ename = name;
    this.size = size;
    this.brand = brand;
    }
};

class rootbeer extends drinks{
    constructor(name,size,brand, taste){
        super(name,size,brand);
        this.taste = taste;
    }
};



// Name Milk, Maker Hiland, Type Dairy
//Name Root Beer, Maker Bargs, Type Soda
//Name Cola, Maker CocaCola, Type Soda
//Name OJ, Maker Minute Maid, Type Juice


