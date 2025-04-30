import { useState } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const dummyProducts = [
  {
    id: 1,
    name: "Slim Fit Checked Shirt",
    stock: 847,
    sale: 112,
    price: 400,
    status: "Non Active",
  },
  {
    id: 2,
    name: "Classic Black Pants",
    stock: 347,
    sale: 212,
    price: 100,
    status: "Non Active",
  },
  {
    id: 3,
    name: "Dark Grey Formal Trousers",
    stock: 817,
    sale: 312,
    price: 200,
    status: "Active",
  },
  {
    id: 4,
    name: "Formal White Shirt",
    stock: 897,
    sale: 412,
    price: 210,
    status: "Non Active",
  },
  {
    id: 5,
    name: "Denim Casual Shirt",
    stock: 247,
    sale: 512,
    price: 600,
    status: "Active",
  },
];

const Products = () => {
  const [products, setProducts] = useState(dummyProducts);
  const [search, setSearch] = useState("");

  const handleDelete = (id) => {
    setProducts(products.filter((item) => item.id !== id));
  };

  const handleAddProduct = () => {
    const newProduct = {
      id: Date.now(),
      name: "New Product",
      stock: 0,
      sale: 0,
      price: 0,
      status: "Non Active",
    };
    setProducts([newProduct, ...products]);
  };

  const handleEdit = (id) => {
    alert(`Edit Product ID: ${id}`);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative bg-white dark:bg-gray-900 p-6 rounded shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Products Management</h2>
        <Link
          to="/adminDashboard/addProduct"
          // onClick={handleAddProduct}
          className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
        >
          <FaPlus />
          Add Product
        </Link>
      </div>

      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Search Product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 border rounded-lg dark:bg-gray-800 dark:text-white"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-auto text-left">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="p-2">Name</th>
              <th className="p-2">Stock</th>
              <th className="p-2">Sale</th>
              <th className="p-2">Price</th>
              <th className="p-2">Status</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <tr key={product.id} className="border-t dark:border-gray-700">
                  <td className="p-2">{product.name}</td>
                  <td className="p-2">{product.stock}</td>
                  <td className="p-2">{product.sale}</td>
                  <td className="p-2">${product.price}</td>
                  <td className="p-2">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        product.status === "Active"
                          ? "bg-green-200 text-green-800"
                          : "bg-gray-300 text-gray-800"
                      }`}
                    >
                      {product.status}
                    </span>
                  </td>
                  <td className="p-2 flex gap-2">
                    <button
                      onClick={() => handleEdit(product.id)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center p-4">
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
