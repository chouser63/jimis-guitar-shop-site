

export type Lesson = {
    title: string;
    content: string;
};

const lessons: Lesson[] = [
    {
        title: "Let's Discover the Light Finger",
        content: `The first step in finding "The Incredible Lightness" is to discover The Light Finger. The Light Finger is the completely relaxed finger, brought to the string, and touching the string, with only the weight of the finger. It does not press the string down until told to do so.

To discover the sensation of the Light Finger, do this:

1. Raise your arms in front of you, without the guitar, and take hold of the index finger of your left hand with the thumb and index finger of your right hand. Completely relax the left index, and wiggle it around with your right hand. This is the Light Finger.

2. Touch the palm of your right hand with your left index. Raise the left index two inches from the palm. Now let it drop by its own weight back to your palm, touching it very lightly, with no pressure. This is how the finger feels when it first touches the string.

3. Now hold the guitar, paying attention to being comfortable and relaxed throughout the body, and slowly raise your relaxed left arm up to the neck, bringing the hand up so that the index finger is lined up with the ninth fret. Have your fingers in a relaxed curl over the 6th string. Allow your Light, relaxed middle finger to fall to the 6th string, behind the 10th fret, so that it touches the string, but applies no pressure. Look at the string under your finger, and see the distance between the string and the fingerboard. Make sure the string does not move at all down toward the fret.

4. Raise your finger an inch, and then bring it back to touch the string again in the same way. Do this over and over, touching the string with the Light Finger, bringing it away, and touching it again. This is called Finger Flapping. Do this a few times with each finger every day. Make sure you keep the inactive fingers as relaxed as possible while touching the string with the active finger. This will get you used to the feeling, and over time, very sensitive to the feeling of complete relaxation.

In closing, let me say that all the preceding is founded upon the first two Principles of Correct Practice. I will state them pretty formally, and they apply to all instruments:

Principle of Correct Practice #1: Your aware, thinking mind is your primary practice tool.

Principle of Correct Practice #2: Control of the fingers is developed by infusing conscious awareness into the muscles through the mechanism of attention while practicing.

Remember, as in all things in life, you get out of it what you put into it (and believe me, it makes me feel pretty old to hear myself saying that, but it's the truth). So read this over and over, and do the exercise, and apply these understandings to your practice. Good Luck!`
    }
]

export default function Lessons() {

    return (

        <div className="px-6 sm:px-24 py-12">
            <h1 className="text-4xl text-indigo-600 font-bold tracking-widest text-left mb-10">
                LESSONS
            </h1>

            {lessons.map((lesson) => {
                return (
                    <div className="flex flex-col item-left">
                        <h1 className="text-2xl text-indigo-600 font-bold tracking-widest text-left mb-2">{lesson.title}</h1>
                        <p className="tracking-wide">{lesson.content}</p>
                    </div>
                )

            })}


        </div>

    )


}