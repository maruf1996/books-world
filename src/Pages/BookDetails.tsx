import { useParams } from "react-router-dom";
import { useSingleBookQuery } from "../Redux/features/books/bookApi";

const BookDetails = () => {
  const { id } = useParams();
  const { data: book } = useSingleBookQuery(id);
  console.log(book);
  return (
    <div className="my-12">
      <h2 className="text-red-600 text-center text-3xl font-bold mb-12">
        Details Of {book?.title}
      </h2>
      <div className="card md:w-4/12 mx-auto glass">
        <div className="card-body">
          <h2 className="card-title">{book?.title}</h2>
          <p>Author : {book?.author}</p>
          <p>Genre : {book?.genre}</p>
          <p>Publication Date : {book?.publicationDate}</p>
          <div className="card-actions justify-start mt-4">
            <button className="btn bg-red-900 hover:bg-red-700 btn-sm text-white">
              WishList
            </button>
            <button className="btn bg-red-900 hover:bg-red-700 btn-sm text-white">
              Plan to read
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
