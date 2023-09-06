import { useGetBooksQuery } from "../Redux/features/books/bookApi";
import { IBooks } from "../Types/globalType";
import Book from "./Book";

const Books = () => {
  const { data } = useGetBooksQuery(undefined);

  return (
    <div className="bg-gray-100">
      <h2 className="text-center font-bold text-2xl md:text-5xl pt-6 text-red-800">
        New Books In Our World
      </h2>
      <div className="relative px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-full md:px-10 lg:px-8 lg:py-10">
        <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
          <svg
            viewBox="0 0 88 88"
            className="w-full max-w-screen-xl text-indigo-100"
          >
            <circle fill="currentColor" cx="44" cy="44" r="15.5" />
            <circle
              fillOpacity="0.2"
              fill="currentColor"
              cx="44"
              cy="44"
              r="44"
            />
            <circle
              fillOpacity="0.2"
              fill="currentColor"
              cx="44"
              cy="44"
              r="37.5"
            />
            <circle
              fillOpacity="0.3"
              fill="currentColor"
              cx="44"
              cy="44"
              r="29.5"
            />
            <circle
              fillOpacity="0.3"
              fill="currentColor"
              cx="44"
              cy="44"
              r="22.5"
            />
          </svg>
        </div>
        <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {data?.data?.slice(0, 10).map((book: IBooks, index: number) => (
            <Book book={book} key={index}></Book>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
