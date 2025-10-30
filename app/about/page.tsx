import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="px-10 py-12">
            <h1 className="text-4xl text-indigo-600 font-bold tracking-widest text-left mb-10 ml-4">
                ABOUT JIMI
            </h1>

            <div className="flex flex-col lg:flex-row gap-10 items-start">
                {/* Left Avatar + Quote */}
                <div className="text-gray-800 bg-indigo-100 rounded-lg p-6 flex flex-col items-center lg:w-1/4">
                    <Image
                        src="/jimi.jpg"
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
                <div className="text-gray-800 lg:w-1/3 text-lg">
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
                </div>

                <Image
                    src="/jimiplaying.jpg"
                    alt="Jimi playing guitar with others"
                    width={500}
                    height={350}
                    className="rounded-lg shadow-md lg:w-1/3"
                />
            </div>
        </div>
  );
}
