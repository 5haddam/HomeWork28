const kitchenProducts = [
	{
		type: 'grater',
		price: 10
	},
	{
		type: 'pastry-bag',
		price: 25
	},
	{
		type: 'scale',
		price: 5
	},
	{
		type: 'whisk',
		price: 15
	}
];

const devicesProducts = [
	{
		type: 'desktop',
		price: [100,1000]
	},
	{
		type: 'laptop',
		price: [50,1500]
	},
	{
		type: 'smartphone',
		price: [80,2000]
	},
	{
		type: 'tablet',
		price: [20,1300]
	}
];

const cosmeticsProducts = [
	{
		type: 'blush',
		price: 100
	},
	{
		type: 'eyeshadow',
		price: 50
	},
	{
		type: 'lipstick',
		price: 80
	},
	{
		type: 'nail-polish',
		price: 200
	},
	{
		type: 'perfume',
		price: 300,
	}
];

function Product(category, type, price) {
  this.category = category;
  this.type = type;
  this.price = price;
  this.render = function() {
    return `
      <tr>
        <td><img src="images/${category}/${type}.svg" alt="${type}" width="50" height="50"></td>
        <td>${type}</td>
        <td>${Array.isArray(price) ? `${price[0]}-${price[1]}` : price} USD</td>
      </tr>`
  }
}

document.write(`<table>
    ${kitchenProducts.map(function(item) {
      return new Product('kitchen', item.type, item.price);
    })
    .concat(
      devicesProducts.map(function(item) {
        return new Product('devices', item.type, item.price);
      }),
      cosmeticsProducts.map(function(item) {
        return new Product('cosmetics', item.type, item.price);
      })
    )
    .map(function(item) {
      return item.render();
    }).join('')}
  </table>`)