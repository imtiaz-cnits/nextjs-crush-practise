import Button from "@/app/components/Button";
import TruckImage from "@/public/Images/Truck.png";
import Image from "next/image";

export default function Mission() {
  return (
    <main className="flex flex-col bg-zinc-50 font-sans dark:bg-black p-5">
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam asperiores ipsam ipsum, tempora veritatis perferendis quaerat unde et fuga illo expedita hic numquam eaque voluptatibus incidunt voluptates! Nam, libero alias?</p>

      <div className="w-[600px]">
        <Image placeholder="blur" src={TruckImage} className="mt-3 rounded-lg" alt="Truck Image" />
      </div>

      <Button />
    </main>
  )
}
