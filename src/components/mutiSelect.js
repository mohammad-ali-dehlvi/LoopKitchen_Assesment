import { useEffect, useState } from "react";
// import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import "react-multi-search-select/dist/index.css";
import { ReactMultiSearchSelect } from "react-multi-search-select";
import { MultiSelect } from "react-multi-select-component";

function MultiSelectComp(props) {
  const [values, setValues] = useState([]);
  useEffect(() => {
    console.log("options: ", props.options);
    // $("select").selectpicker();
  }, []);
  return (
    <>
      <MultiSelect
        value={values}
        options={props.options.map((e) => ({ label: e, value: e }))}
        onChange={(selected) => {
          console.log(selected);
          setValues(selected);
          props.onChange(selected.map((e) => e.value));
        }}
      />
      {/* <ReactMultiSearchSelect
        placeholderText={props.placeholder}
        options={props.options}
        onChange={(options) => {
          console.log("sleected options: ", options);
        }}
      /> */}
      {/* <MultiSelect data={props.options} /> */}

      {/* <DropdownMultiselect options={props.options.slice(0, 20)} name="name" /> */}
    </>
  );
}

export default MultiSelectComp;
