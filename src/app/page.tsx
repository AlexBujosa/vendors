import Vendor from "./components/vendors/vendors";
export default function Home() {
  return (
    <main className="">
      <div className="container mx-auto mt-4">
        <ul className="list-none flex">
          <li className="ml-8">Go Home</li>
          <li className="ml-8">Play Game</li>
        </ul>
        <Vendor />
      </div>
    </main>
  );
}
