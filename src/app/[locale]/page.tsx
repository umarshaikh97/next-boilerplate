export default function Home() {
  return (
    <>
      <div className="container">
        <p>Paragraph</p>
      </div>
      <div className="container">
        <h1 className="text-[110px] mt-15 mb-15 text-red-500">Font Weight</h1>
        <h1 className="font-thin">100</h1>
        <h1 className="font-extralight">200</h1>
        <h1 className="font-light">300</h1>
        <h1 className="font-normal">400</h1>
        <h1 className="font-medium">500</h1>
        <h1 className="font-semibold">600</h1>
        <h1 className="font-bold">700</h1>
        <h1 className="font-extrabold">800</h1>
      </div>
      <div className="container">
        <h1 className="font-96 mt-15 mb-15 text-red-500">Media Query</h1>
        <h4>
          Color will change based on the screen size Color will change based on
          the screen size
        </h4>
        <h3>h3</h3>
        <span
          className="phone-portrait:text-yellow-500 phone-landscape:text-red-500
            tablet-portrait:text-blue-500 tablet-landscape:text-fuchsia-500
            mini-laptop:text-emerald-500 laptop:text-orange-500 desktop:text-gray-500
            large-desktop:text-black text-green-500"
        >
          Responsive Text Color
        </span>
      </div>
    </>
  );
}
