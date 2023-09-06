import { Link } from "react-router-dom";
import { IBooks } from "../Types/globalType";

interface IProps {
  book: IBooks;
  index: number;
}

const BookTable = ({ book, index }: IProps) => {
  const { title, author, genre, publicationDate, _id } = book;
  return (
    <tbody>
      {/* row 1 */}
      <tr>
        <th>{index}</th>
        <td>{title}</td>
        <td>{author}</td>
        <td>{genre}</td>
        <td>{publicationDate}</td>
        <td>
          <Link to={`/book-details/${_id}`}>
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
