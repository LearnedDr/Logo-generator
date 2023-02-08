class Shape {
    constructor(color, threeCharacters, characterColor, shape) {
        this.color = color;
        this.threeCharacters = threeCharacters;
        this.characterColor = characterColor;
        this.shape = shape;
    }
    render() {
        throw new Error('Child class must implement a render() method.');
    };
    renderShapeColor() {
        return `${this.color}`;
    };
    renderThreeCharacters() {
        return `${this.threeCharacters}`;
    };
    renderCharacterColor() {
        return `${this.characterColor}`;
    };
    renderShape() {
        return `${this.shape}`;
    };
};


module.exports = Shape