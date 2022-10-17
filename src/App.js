import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import MultiSelectComp from "./components/mutiSelect";
import "./styles.css";
import fetchTable from "./utils/apis/fetchTable";

export default function App() {
  const [data, setData] = useState([]);

  const [bNameArr, setBNameArr] = useState([]);
  const [vbNameArr, setVBNameArr] = useState([]);
  const [slug, setSlug] = useState([]);
  const [bNameFilter, setBNameFilter] = useState(null);
  const [vbNameFilter, setVbNameFilter] = useState(null);
  const [slugFilter, setSlugFilter] = useState(null);

  const getData = () => {
    fetchTable()
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        let { data } = res;
      })
      .catch((err) => {
        console.log("error: ", err);
      });
  };

  const filterBName = (n) => {
    if (bNameFilter == null || bNameFilter.length == 0) {
      return true;
    }
    return bNameFilter.filter((e) => e.indexOf(n) >= 0).length;
  };

  const filterVBName = (n) => {
    if (vbNameFilter == null || vbNameFilter.length == 0) {
      return true;
    }
    return vbNameFilter.filter((e) => e.indexOf(n) >= 0).length;
  };

  const filterSlug = (n) => {
    if (slugFilter == null || slugFilter.length == 0) {
      return true;
    }
    return slugFilter.filter((e) => e.indexOf(n) >= 0).length;
  };

  const onlyUnique = (key) => (value, index, self) => {
    return self.map((e) => e[key]).indexOf(value[key]) === index;
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="">
      <MultiSelectComp
        options={data.filter(onlyUnique("b_name")).map((e) => e.b_name)}
        onChange={(arr) => {
          setBNameFilter(arr);
        }}
      />
      <MultiSelectComp
        options={data.filter(onlyUnique("vb_name")).map((e) => e.vb_name)}
        onChange={(arr) => {
          setVbNameFilter(arr);
        }}
      />
      <MultiSelectComp
        options={data.filter(onlyUnique("slug")).map((e) => e.slug)}
        onChange={(arr) => {
          setSlugFilter(arr);
        }}
      />
      <DataTable
        pagination
        columns={
          data.length > 0
            ? Object.keys(data[0]).map((e) => ({
                name: e,
                selector: (row) => row[e]
              }))
            : []
        }
        data={data.filter(
          (e) =>
            filterBName(e["b_name"]) &&
            filterVBName(e["vb_name"]) &&
            filterSlug(e["slug"])
        )}
      />
    </div>
  );
}
