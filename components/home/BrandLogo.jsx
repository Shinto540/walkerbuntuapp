import Image from "next/image";
import brand1 from "../../public/brand/brand/1.png"
import brand2 from "../../public/brand/brand/2.png"
import brand3 from "../../public/brand/brand/3.png";
import brand4 from "../../public/brand/brand/4.png";
import brand5 from "../../public/brand/brand/5.png";

const BrandLogo = () => {
  return (
    <section>
      <div className="h-50 grid grid-cols-5 gap-4 content-evenly px-10 ">
        <div className=" ">
          <Image
            src={brand1}
            className="max-w-full h-auto rounded-lg"
            alt=""
            width={200}
            height={100}
          />
        </div>
        <div className="">
          <Image
            src={brand2}
            className="max-w-full h-auto rounded-1g"
            alt=""
            width={200}
            height={100}
          />
        </div>
        <div className="">
          <Image
            src={brand3}
            className="max-w-full h-auto rounded-1g"
            alt=""
            width={200}
            height={100}
          />
        </div>
        <div className="">
          <Image
            src={brand4}
            className="max-w-full h-auto rounded-1g"
            alt=""
            width={200}
            height={100}
          />
        </div>
        <div className="">
          <Image
            src={brand5}
            className="max-w-full h-auto rounded-1g"
            alt=""
            width={200}
            height={100}
          />
        </div>
      </div>
    </section>
  );
};

export default BrandLogo;
