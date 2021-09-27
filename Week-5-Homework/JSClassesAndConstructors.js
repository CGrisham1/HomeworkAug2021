// class drinks{
//     constructor(name, maker){
//         this.name = name;
//         this.maker = maker;
//     }
// }


class drinks{
    constructor(type){
    this.typename = type;
    }
};

class name extends drinks{
    constructor(maker){
        super(maker);
        this.typename = name;
    }
};
class maker extends drinks{
    constructor(name){
        super(name);
        this.typename = name;
    }
};


// Name Milk, Maker Hiland, Type Dairy
//Name Root Beer, Maker Bargs, Type Soda
//Name Cola, Maker CocaCola, Type Soda
//Name OJ, Maker Minute Maid, Type Juice


