import { Button } from "@consta/uikit/Button";

const Sorting = ({
  ascendingOrderYear,
  setAscendingOrderYear,
  ascendingOrderPrice,
  setAscendingOrderPrice,
}) => {
  return (
    <div id="sorting">
      <Button
        label={ascendingOrderYear ? "By Year (asc)" : "By Year (des)"}
        size="s"
        className="btn"
        onClick={() => {
          setAscendingOrderYear(!ascendingOrderYear);
        }}
      />
      <Button
        label={ascendingOrderPrice ? "By Price (asc)" : "By Price (des)"}
        size="s"
        className="btn"
        onClick={() => {
          setAscendingOrderPrice(!ascendingOrderPrice);
        }}
      />
    </div>
  );
};

export default Sorting;
