// class drinks{
//     constructor(name, maker){
//         this.name = name;
//         this.maker = maker;
//     }
// }


class drinks{
    constructor(name){
    this.ename = name;
    }
};

class rootbeer extends drinks{
    constructor(maker){
        super(maker);
        this.maker = maker;
    }
};



// Name Milk, Maker Hiland, Type Dairy
//Name Root Beer, Maker Bargs, Type Soda
//Name Cola, Maker CocaCola, Type Soda
//Name OJ, Maker Minute Maid, Type Juice


