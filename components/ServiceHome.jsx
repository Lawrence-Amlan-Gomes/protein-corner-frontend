import { useCart } from "@/app/hooks/useCart";
import services from "@/app/utils/services";
import Link from "next/link";
import EachServiceHome from "./EachServiceHome";

function ServiceHome() {
  const { theme } = useCart();
  return (
    <Link href="/services">
      {" "}
      <div
        className={`w-full sm:p-[1%] p-[4%] relative overflow-hidden bg-[#ffffff]`}
      >
        <div
          className={`w-[98%] text-center border m-[1%] sm:mr-[2%] lg:p-[2%] sm:p-[4%] p-[6%] bg-[#000000] text-[#ffffff] rounded-2xl lg:text-[40px] sm:text-[30px] text-[20px] xl:text-[45px] font-bold tracking-wider`}
        >
          Services
        </div>
        {services.map((i) => (
          <EachServiceHome
            Home
            key={i.name}
            name={i.name}
            image={i.image}
            colorBg={i.colorBg}
            colorText={i.colorText}
          />
        ))}
      </div>
    </Link>
  );
}

export default ServiceHome;
