import "./Pagination.scss";

import { Button } from "../Button/Button";

type PaginationProps = {
  page: number;
  setItemPerPage: React.Dispatch<React.SetStateAction<number>>;
  onChangePageBtnClick: (text: string) => void;
  isLoading: boolean;
};

const Pagination: React.FC<PaginationProps> = ({
  page,
  setItemPerPage,
  onChangePageBtnClick,
  isLoading
}) => {
  return (
    <div className="pagination">
      <label>
        <span className="title">By page: </span>
        <select
          name="quantity"
          defaultValue={5}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setItemPerPage(Number(e.target.value))
          }
        >
          <option value={3}>3</option>
          <option value={5}>5</option>
          <option value={7}>7</option>
        </select>{" "}
      </label>
      <Button disabled={isLoading} text="prev" action={onChangePageBtnClick} />
      <span>page: {page}</span>
      <Button disabled={isLoading} text="next" action={onChangePageBtnClick} />
    </div>
  );
};

export { Pagination };
