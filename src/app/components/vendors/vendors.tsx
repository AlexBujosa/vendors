import Image from "next/image";
import { Dialog } from "../dialog/dialog";

export default function Vendor() {
  return (
    <div className="my-8 mx-8">
      <Dialog />
      <div className="my-4 w-80">
        <div className="flex flex-row mb-4">
          <Image src="/vendors.png" width="35" height="35" alt="vendors-img" />
          <div className="basis-2/4 flex">
            <p className="my-auto ml-4">Christopher Tineo</p>
          </div>
          <div className="basis-1/4 flex">
            <button className="rounded-md bg-amber-400 px-4">Editar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
