import React, { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';

function Cart() {
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

  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const discount = 0.1;
  const deliveryCharges = 50;
  const discountAmount = calculateTotal() * discount;
  const finalAmount = calculateTotal() - discountAmount + deliveryCharges;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-100 p-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6">
        {/* Cart Items Section */}
        <div className="flex-1 bg-white rounded-lg shadow-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Shopping Cart</h2>
            <ShoppingCartIcon className="text-gray-700 text-3xl" />
          </div>

          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-gray-50 rounded-lg shadow-md p-4 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-sm text-gray-600">₹{item.price}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-4 sm:mt-0 w-full sm:w-auto justify-between">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="w-10 h-10 pb-1 bg-gray-200 rounded-full flex items-center justify-center text-2xl font-bold hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="text-lg font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="w-10 h-10 pb-1 bg-gray-200 rounded-full flex items-center justify-center text-2xl font-bold hover:bg-gray-300"
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

        {/* Order Summary Section */}
        <div className="w-full lg:w-1/3 bg-white rounded-lg shadow-lg p-4">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Order Summary</h3>

          <div className="space-y-4">
            <div className="flex justify-between text-gray-700">
              <span>Total Items</span>
              <span>{calculateTotalItems()}</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Subtotal</span>
              <span>₹{calculateTotal()}</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Discount (10%)</span>
              <span className="text-green-500">-₹{discountAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Delivery Charges</span>
              <span>+₹{deliveryCharges}</span>
            </div>
          </div>

          <div className="flex justify-between mt-6 text-lg font-semibold border-t pt-4 text-gray-800">
            <span>Total Amount</span>
            <span>₹{finalAmount.toFixed(2)}</span>
          </div>

          <div className="flex flex-col gap-4 mt-6">
            <button className="w-full py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-all">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setCartItems([])}
              className="w-full py-3 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition-all"
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
