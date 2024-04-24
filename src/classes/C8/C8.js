import DataFetching from "./DataFetching";
import DocumentTitle from "./DocumentTitle";
import EventListener from "./EventListener";
import Timer from "./Timer";

export default function C8(props) {
  return (
    <div>
      C8 works
      <DocumentTitle />
      <EventListener />
      <Timer />
      <DataFetching />
    </div>
  );
}
