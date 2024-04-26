import Carousel from "./Carousel";
import Listbox from "./Listbox";
import SearchComponent from "./SearchComponent";
import Tabs from "./Tabs";
import Todos from "./Todos";
import ToggleMUI from "./ToggleMUI";

export default function C9(props) {
  return (
    <div>
      C9 works
      <Filter />
      <Todos />
      <br />
      <ToggleMUI />
      <Carousel />
      <Listbox />
      <SearchComponent />
      <Tabs />
    </div>
  );
}
