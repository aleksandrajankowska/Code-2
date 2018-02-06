class Dog {
  String name;
  float weight;
  PVector position;
  color furColor;
    
  Dog(String name, float weight, color furColor, PVector position) {
    this.name = name;
    this.weight = weight;
    this.furColor = furColor;
    this.position = position;
  }

  void draw() {
    fill(furColor);
    rect(position.x, position.y, 2*weight, weight);
  }
}