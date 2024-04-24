import DataFetching from "./DataFetching";
import DocumentTitle from "./DocumentTitle";
import EventListener from "./EventListener";
import Keyboard from "./Keyboard";
import Test from "./Test";
import Timer from "./Timer";

export default function C8(props) {
  return (
    <div>
      C8 works
      <DocumentTitle />
      <EventListener />
      <Timer />
      <DataFetching />
      <Test />
      <Keyboard chars={["a", "b", "c", "d"]} />
    </div>
  );
}
