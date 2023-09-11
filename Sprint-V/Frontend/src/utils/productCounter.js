function productCounter(products) {
    const counter = {};
  
    for (const product of products) {
      if (counter[product]) {
        counter[product] += 1;
      } else {
        counter[product] = 1;
      }
    }
  
    return counter;
  }