import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input, Select, Option } from "@material-tailwind/react";
import { useRecoilState } from "recoil";
import { searchStateAtom, sortStateAtom } from "../atom";

const ControlPanel: React.FC = () => {
  const [selected, setSelected] = useRecoilState(sortStateAtom);
  const [searhValue, setSearchValue] = useRecoilState(searchStateAtom);

  return (
    <div className="flex p-4  justify-between items-center">
      <div className="px-16 py-2 bg-black text-white ">Category</div>
      <div className="flex gap-4">
        <div className="">
          <Select
            value={selected}
            onChange={(val) => setSelected(val)}
            label="Sort By"
          >
            <Option value="rec">Recommended</Option>
            <Option value="asc">Price: High To Low</Option>
            <Option value="desc">Price: Low To High</Option>
          </Select>
        </div>
        <div className="">
          <Input
            label="Search Product"
            value={searhValue}
            onChange={(e) => setSearchValue(e.target.value)}
            icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
          />
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
