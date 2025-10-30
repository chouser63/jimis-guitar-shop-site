import Image from "next/image";

export default function Home() {
  return (
    <div className="px-24 py-12">
      <div className="flex lg:flex-row flex-col justify-between">
        <div className="w-1/2 h-full flex flex-col">
          <h1 className="text-6xl font-extrabold text-indigo-600 mb-2">JIMI’S</h1>
          <h2 className="text-2xl text-slate-600 tracking-wide mb-6">GUITAR SHOP</h2>
          <p className="italic text-gray-600 mb-10">Where music lives.</p>

          {/* Left Image */}
          <Image
            src="/shopfront.jpg"
            alt="Jimi's Guitar Shop storefront"
            width={500}
            height={350}
            className="rounded-lg shadow-md"
          />
        </div>


        {/* Right Guitar + Announcements */}
        <div className="relative">
          <Image
            src="/guitar.png"
            alt="Electric guitar illustration"
            width={500}
            height={400}
            className="mx-auto"
          />

          <div className="absolute text-slate-900 top-24 -left-24 bg-white rounded-full border-2 border-black text-lg font-bold p-6 shadow-md w-40 text-center rotate-[-10deg]">
            For this month only, buy 3 packs of D’Addario strings for the price of 2!
          </div>

          <div className="absolute text-slate-900 bottom-10 right-24 bg-white rounded-full border-2 border-black text-lg font-bold p-6 shadow-md w-44 text-center rotate-[8deg]">
            On special: Finger Ease spray cans – <br />
            <span className="line-through">$19.95</span> <strong>$19.00</strong>!
          </div>

          <div className="absolute text-slate-900 bottom-0 -left-28 bg-white rounded-full border-2 border-black text-lg font-bold p-6 shadow-md w-48 text-center rotate-[5deg]">
            Closed for Good Friday. <strong>Happy Easter!</strong>
          </div>
        </div>
      </div>

    </div>
  );
}
