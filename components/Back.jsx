import { TiArrowBack } from "react-icons/ti";
import Link from "next/link";

const Back = () => {
  return (
    <Link href={"/"} className="p-2">
      <TiArrowBack className="h-10 w-10 text-orange-500" />
    </Link>
  );
};

export default Back;
