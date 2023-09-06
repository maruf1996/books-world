import { Link } from "react-router-dom";
import { IBooks } from "../Types/globalType";

interface IProps {
  book: IBooks;
  index: number;
}

const BookTable = ({ book, index }: IProps) => {
  return (
    <tbody>
      <tr>
        <th>{index}</th>
        <td>{book?.title}</td>
        <td>{book?.author}</td>
        <td>{book?.genre}</td>
        <td>{book?.publishDate}</td>
        <td>
          <Link to={`/book-details/${book?._id}`}>
            <button className="btn btn-sm bg-red-800 hover:bg-red-700 text-white">
              Details
            </button>
          </Link>
        </td>
      </tr>
    </tbody>
  );
};

export default BookTable;
