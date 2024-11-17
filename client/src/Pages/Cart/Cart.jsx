import React, { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';

function Cart() {
  // Sample products in the cart
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Rolex Yacht-Master',
      price: 1000,
      quantity: 1,
      image: 'https://images.pexels.com/photos/15649353/pexels-photo-15649353/free-photo-of-hand-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 2,
      name: 'Omega Seamaster',
      price: 1200,
      quantity: 1,
      image: 'https://images.pexels.com/photos/15649338/pexels-photo-15649338/free-photo-of-hand-holding-watch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ]);

  // Increase quantity of the product in the cart
  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease quantity of the product in the cart
  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Remove item from the cart
  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Calculate the total cost of items in the cart
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Calculate number of items in the cart
  const calculateTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // Discount and delivery charges
  const discount = 0.1; // 10% discount
  const deliveryCharges = 50; // Fixed delivery charge

  // Calculate discount amount
  const discountAmount = calculateTotal() * discount;

  // Calculate final amount
  const finalAmount = calculateTotal() - discountAmount + deliveryCharges;

  return (
    <div className="cart-container flex flex-col lg:flex-row m-8 p-4 bg-white gap-8">
      <div className="cart-items-container flex-1">
        <div className="cart-header mb-6 text-xl font-semibold flex items-center justify-between">
          <h2>Your Cart</h2>
          <ShoppingCartIcon className="text-gray-800" />
        </div>

        <div className="cart-items space-y-6">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item flex items-center justify-between bg-white shadow-lg rounded-lg p-6 mb-4 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-6">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
                <div className="flex flex-col">
                  <h3 className="font-semibold text-lg text-gray-800">{item.name}</h3>
                  <div className="flex items-center gap-2 text-gray-700">
                    <span className="text-xl font-semibold">₹{item.price}</span>
                    <span className="text-sm text-gray-500">x {item.quantity}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300 text-xl"
                >
                  -
                </button>
                <span className="text-lg font-semibold">{item.quantity}</span>
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300 text-xl"
                >
                  +
                </button>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <DeleteIcon />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Total Amount Card */}
      <div className="total-amount-card w-full lg:w-80 bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Order Summary</h3>

        <div className="flex justify-between mb-4 text-gray-800">
          <span className="font-semibold text-lg">Total Items</span>
          <span className="text-xl font-semibold">{calculateTotalItems()}</span>
        </div>

        <div className="flex justify-between mb-4 text-gray-800">
          <span className="font-semibold text-lg">Subtotal</span>
          <span className="text-xl font-semibold">₹{calculateTotal()}</span>
        </div>

        <div className="flex justify-between mb-4 text-gray-800">
          <span className="font-semibold text-lg">Discount (10%)</span>
          <span className="text-xl font-semibold text-green-500">-₹{discountAmount.toFixed(2)}</span>
        </div>

        <div className="flex justify-between mb-4 text-gray-800">
          <span className="font-semibold text-lg">Delivery Charges</span>
          <span className="text-xl font-semibold">+₹{deliveryCharges}</span>
        </div>

        <div className="flex justify-between mt-6 text-gray-800">
          <span className="font-semibold text-lg">Total Amount</span>
          <span className="text-xl font-semibold">₹{finalAmount.toFixed(2)}</span>
        </div>

        <div className="flex flex-col gap-4 mt-6">
          <button className="py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-all duration-300">
            Proceed to Checkout
          </button>
          <button
            onClick={() => setCartItems([])} // Clears the cart
            className="py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-all duration-300"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
