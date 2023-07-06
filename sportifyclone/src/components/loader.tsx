import { ThreeDots } from "react-loader-spinner";
import Image from "next/image";

function Loader() {
  return (
    <div className="h-screen bg-black">
      <div className="pt-40 flex flex-col items-center space-y-4">
        <span className="relative w-[400px] h-[250px] lg:w-[550px] lg:h-[240px]">
          <Image
            src="https://rb.gy/y9mwtb"
            fill
            className="animate-pulse object-contain"
            alt={""}
          />
        </span>

        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#15883e"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          visible={true}
        />
      </div>
    </div>
  );
}

export default Loader;
