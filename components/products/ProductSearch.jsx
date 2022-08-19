import { FaSearch } from "react-icons/fa";

const ProductSearch = () => {
  return (
    <main className="bg-gray-100 pb-16">
      <section className="search">
        <div className="flex top-50% px-10 py-10  h-[7vw] hover:text-blue-600 cursor-pointer">
          <input type="search" placeholder="Search here.." />
          <FaSearch className=""/>
        </div>
      </section>
    </main>
  );
};

export default ProductSearch;
