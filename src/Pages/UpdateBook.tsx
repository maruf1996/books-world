import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSingleBookQuery } from "../Redux/features/books/bookApi";
import { useAppSelector } from "../Redux/hook";

const UpdateBook = () => {
  const { id } = useParams();
  const { data: book } = useSingleBookQuery(id);
  console.log(id);

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    publishDate: "",
  });
  const { user } = useAppSelector((state) => state.user);
  //   const navigate = useNavigate();

  const handleUpdateBook = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { title, author, genre, publishDate } = formData;
    const options = {
      data: { userEmail: user.email, title, author, genre, publishDate },
    };
    console.log(options);
  };
  //   useEffect(() => {
  //     if (isSuccess === true) {
  //       toast.success("Book Added Successfully!");
  //       navigate("/allBooks");
  //     }
  //   }, [isSuccess]);

  const handleInputBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="w-full md:my-12">
      <form
        onSubmit={handleUpdateBook}
        className="w-10/12 md:w-4/12 mx-auto border p-3 md:p-8"
      >
        <h2 className="text-2xl text-center font-bold text-red-800">
          Edit This Book
        </h2>
        <div className="form-control w-full my-3">
          <label className="label">
            <span className="label-text font-semibold">Title</span>
          </label>
          <input
            name="title"
            type="text"
            defaultValue={book?.title}
            onBlur={handleInputBlur}
            placeholder="Enter Title"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full my-3">
          <label className="label">
            <span className="label-text font-semibold">Author</span>
          </label>
          <input
            name="author"
            type="text"
            defaultValue={book?.author}
            onBlur={handleInputBlur}
            placeholder="Enter Author"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full my-3">
          <label className="label">
            <span className="label-text font-semibold">Genre</span>
          </label>
          <input
            name="genre"
            type="text"
            defaultValue={book?.genre}
            onBlur={handleInputBlur}
            placeholder="Enter Genre"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full my-3">
          <label className="label">
            <span className="label-text font-semibold">Publish Date</span>
          </label>
          <input
            name="publishDate"
            type="date"
            defaultValue={book?.publishDate}
            onBlur={handleInputBlur}
            placeholder="Enter Publish Date"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full mt-6">
          <button className="btn btn-active bg-red-800 hover:bg-red-600 text-white">
            Add The Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateBook;