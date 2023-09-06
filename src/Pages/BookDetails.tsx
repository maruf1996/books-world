import { Link, useParams } from "react-router-dom";
import BookReview from "../Component/BookReview";
import {
  useDeleteBookMutation,
  useSingleBookQuery,
} from "../Redux/features/books/bookApi";
import { useAppSelector } from "../Redux/hook";

const BookDetails = () => {
  const { id } = useParams();
  const { data: book } = useSingleBookQuery(id);
  const [deleteBook] = useDeleteBookMutation();
  const { user } = useAppSelector((state) => state.user);

  const handleBookDelete = async (id: string | undefined) => {
    deleteBook(id);
  };

  return (
    <div className="my-12 md:w-4/12 mx-auto">
      <h2 className="text-red-600 text-center text-3xl font-bold mb-12">
        Details Of {book?.title}
      </h2>
      <div className="card glass">
        <div className="card-body">
          <h2 className="card-title">{book?.title}</h2>
          <p>Author : {book?.author}</p>
          <p>Genre : {book?.genre}</p>
          <p>Publication Date : {book?.publishDate}</p>
          <div className="card-actions justify-start mt-4">
            <button className="btn font-mono bg-red-900 font-normal hover:bg-red-700 btn-sm text-white">
              WishList
            </button>
            <button className="btn font-mono bg-red-900 font-normal hover:bg-red-700 btn-sm text-white">
              Plan to read
            </button>
          </div>
          {user?.email === book?.userEmail && (
            <div className="card-actions justify-start mt-4">
              <Link
                to={`/update-book/${book?._id}`}
                className="btn bg-red-900 font-bold hover:bg-red-700  btn-sm text-white"
              >
                Edit
              </Link>
              <button
                onClick={() => handleBookDelete(id)}
                className="btn bg-red-900  font-bold
             hover:bg-red-700 btn-sm text-white"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
      <BookReview id={id}></BookReview>
    </div>
  );
};

export default BookDetails;
