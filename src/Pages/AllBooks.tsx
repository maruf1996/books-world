import { useEffect, useState } from "react";
import BookTable from "../Component/BookTable";
import { IBooks } from "../Types/globalType";

const AllBooks = () => {
  const [books, setBooks] = useState<IBooks[]>([]);
  console.log(books);

  useEffect(() => {
    fetch("../../public/books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="">
      <div className="mt-10 w-full">
        <div className="mb-8">
          <h2 className="text-3xl text-center font-bold text-red-800">
            All Books In Our World
          </h2>
        </div>
        <div className="w-full px-4 md:flex md:justify-between items-center">
          <div className="p-2 md:p-0 md:w-4/12">
            <input
              type="text"
              placeholder="Search By Name Or Author"
              className="input input-bordered input-secondary w-full"
            />
          </div>
          <div className="md:flex">
            <div className="p-2">
              <select className="select select-secondary w-full">
                <option disabled selected>
                  Any Publication Year
                </option>
                <option>2023</option>
                <option>2022</option>
                <option>2021</option>
                <option>2020</option>
                <option>2019</option>
                <option>2018</option>
                <option>2017</option>
              </select>
            </div>
            <div className="p-2">
              <select className="select select-secondary w-full">
                <option disabled selected>
                  All Genres
                </option>
                <option>Fiction</option>
                <option>History</option>
                <option>Science</option>
                <option>Thriller</option>
                <option>Fantasy</option>
                <option>Poem</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <div className="overflow-x-auto my-6 mx-2">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Serial</th>
                  <th>Name</th>
                  <th>Author</th>
                  <th>Genre</th>
                  <th>Publication Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              {books.map((book, index) => (
                <BookTable book={book} index={index + 1}></BookTable>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
