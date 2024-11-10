// import Image from "next/image";

export default function Home() {

  var a = printMyName();

  return (
    <div>{a}</div>
  );
}

function printMyName() {
  return "승호야 잘가"
}
