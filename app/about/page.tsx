import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="px-10 py-12">
      <h1 className="text-4xl font-bold tracking-widest text-center mb-10">
        ABOUT JIMI
      </h1>

      <div className="grid md:grid-cols-3 gap-10 items-start">
        {/* Left Avatar + Quote */}
        <div className="bg-indigo-100 rounded-lg p-6 flex flex-col items-center">
          <Image
            src="/placeholder-avatar.png"
            alt="Jimi Swank illustration"
            width={160}
            height={160}
            className="rounded-full mb-4"
          />
          <h2 className="text-2xl font-semibold">Jimi Swank</h2>
          <p className="italic text-indigo-700 mt-2">
            “Watch out for the drummer.”
          </p>
        </div>

        {/* Main Biography */}
        <div className="md:col-span-2">
          <p className="leading-relaxed mb-4">
            Jimi Swank was born James Swarovski in Albania in 1972. He started
            playing guitar at age 4 and was heavily influenced by Jimi Hendrix.
            He burned his first guitar (and most of the couch) when he was 12.
          </p>
          <p className="leading-relaxed mb-4">
            Jimi started the band Ironing Maiden with some school buddies, and
            they released one album independently. But when the drummer stole
            Jimi’s house, the band split up before they could secure a record
            deal. Although still really into playing guitar, Jimi couldn’t stand
            being in bands anymore, so he decided to move town and set up shop.
          </p>
          <p className="leading-relaxed mb-4">
            He rented an old café and turned it into Jimi’s Guitar Shop. Since
            then, he’s added CDs to his extensive range of guitars, and the
            upstairs of the shop provides a practice room for local bands.
          </p>
          <p className="leading-relaxed">
            Jimi’s is famous for its huge range of guitars, including many
            second-hand and rare instruments. People come from all over just to
            look at the guitars, play them, and hang out.
          </p>

          <div className="mt-8">
            <Image
              src="/placeholder-guitarist.jpg"
              alt="Jimi playing guitar with others"
              width={500}
              height={350}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
