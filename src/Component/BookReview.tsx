import { ChangeEvent, FormEvent, useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import {
  useGetReviewQuery,
  usePostReviewMutation,
} from "../Redux/features/books/bookApi";

interface IProps {
  id: string | undefined;
}

const BookReview = ({ id }: IProps) => {
  const { data } = useGetReviewQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 3000,
  });
  console.log(data);

  const [inputValue, setInputValue] = useState<string>("");
  const [postReview, { isError, isLoading, isSuccess }] =
    usePostReviewMutation();

  console.log(isLoading);
  console.log(isSuccess);
  console.log(isError);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const options = {
      id: id,
      data: { review: inputValue },
    };
    postReview(options);
    setInputValue("");
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="my-8">
      <form onSubmit={handleSubmit}>
        <div className="mb-1 sm:mb-2 flex w-full rounded-xl border-2">
          <input
            onChange={handleChange}
            placeholder="Write Your Review"
            required
            type="text"
            className="input w-full"
            name="review"
          />
          <button type="submit" className="uppercase btn btn-active">
            Add Comment
          </button>
        </div>
      </form>
      <div className="overflow-x-auto my-8">
        <table className="table">
          <thead>
            {data?.review?.map((r: []) => (
              <div className="flex items-center text-black">
                <tr>
                  <th>
                    <FaUserAlt size={22}></FaUserAlt>
                  </th>
                </tr>
                <tr>
                  <th className="font-bold text-1xl">{r}</th>
                </tr>
              </div>
            ))}
          </thead>
        </table>
      </div>
    </div>
  );
};

export default BookReview;
