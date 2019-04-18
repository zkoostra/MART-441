class Block{

    constructor(x,y,h,w, color)
    {
        this.x = x;
        this.y = y;
        this.h = h;
        this.w = w;
        this.color = color;
    }

    get X()
    {
        return this.x;
    }

    set X(value)
    {
        this.x = value;
    }
    get Y()
    {
        return this.y;
    }
    set Y(value)
    {
        this.y = value;
    }

    get Height()
    {
        return this.h;
    }

    get Width()
    {
        return this.w;
    }
    get blockColor()
    {
        return this.color;
    }
}

class Prize{

    constructor(x,y,h,w, color)
    {
        this.x = x;
        this.y = y;
        this.h = h;
        this.w = w;
        this.color = color;
    }

    get X()
    {
        return this.x;
    }

    set X(value)
    {
        this.x = value;
    }
    get Y()
    {
        return this.y;
    }
    set Y(value)
    {
        this.y = value;
    }

    get Height()
    {
        return this.h;
    }

    get Width()
    {
        return this.w;
    }
    get prizeColor()
    {
        return this.color;
    }
}

class Player{

    constructor(x,y,w,h, color)
    {
        this.x = x;
        this.y = y;
        this.h = h;
        this.w = w;
        this.color = color;
    }

    get X()
    {
        return this.x;
    }

    set X(value)
    {
        this.x = value;
    }
    get Y()
    {
        return this.y;
    }
    set Y(value)
    {
        this.y = value;
    }

    get Height()
    {
        return this.h;
    }

    get Width()
    {
        return this.w;
    }
    get playerColor()
    {
        return this.color;
    }
}
