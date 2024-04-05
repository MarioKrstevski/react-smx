function Image() {
  return (
    <img
      alt="Burger Menu SVG Vector Icon"
      fetchpriority="high"
      width={30}
      height={30}
      decoding="async"
      data-nimg="1"
      src="https://www.svgrepo.com/show/506800/burger-menu.svg"
    />
  );
}
export default function GSHeader() {
  return (
    <div id="gsHeader">
      <Image />
      <div id="gsname">Golden Sachs</div>
      <div id="appname">App Name</div>
      <img
        id="searchtool"
        alt="Search SVG Vector Icon"
        fetchpriority="high"
        width={30}
        height={30}
        decoding="async"
        data-nimg="1"
        src="	https://www.svgrepo.com/show/532555/search.svg"
      />
    </div>
  );
}
