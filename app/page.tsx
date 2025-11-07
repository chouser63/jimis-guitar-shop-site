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
        <div className="flex flex-col gap-8 w-1/2 h-screen justify-center items-center">
          <div className="bg-white/80 backdrop-blur-sm border border-indigo-200 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-indigo-600 mb-4">Latest Announcements</h3>
            
            <div className="space-y-4">
              <div className="bg-indigo-50 p-4 border-l-4 border-indigo-600 hover:bg-indigo-100 transition-colors">
                <p className="text-slate-900 font-medium">
                  For this month only, you can purchase 3 packs of D'Addario strings for the price of 2!
                </p>
              </div>

              <div className="bg-indigo-50 p-4 border-l-4 border-indigo-600 hover:bg-indigo-100 transition-colors">
                <p className="text-slate-900 font-medium">
                  On special! Finger Ease spray cans - were $19.95, now only $19.90!
                </p>
              </div>

              <div className="bg-indigo-50 p-4 border-l-4 border-indigo-600 hover:bg-indigo-100 transition-colors">
                <p className="text-slate-900 font-medium">
                  Jimi's will be closed for Good Friday. <strong className="text-indigo-600">Happy Easter!</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
