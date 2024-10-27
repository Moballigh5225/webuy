import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input, Select, Option } from "@material-tailwind/react";
import { useState } from "react";

const ControlPanel: React.FC = () => {
  const [selected, setSelected] = useState("");
  console.log(selected);
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
            <Option value="material">Price: High To Low</Option>
            <Option value="react">Price: Low To High</Option>
            <Option value="tailwind">Customer Rating</Option>
          </Select>
        </div>
        <div className="">
          <Input
            label="Search Product"
            icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
          />
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
