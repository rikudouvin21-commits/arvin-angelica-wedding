import { wedding } from "@/data/wedding";

export default function Story() {
  return (
    <section
      id="story"
      className="
        bg-gradient-to-b
        from-[#F8F6F2]
        to-white
        py-32
        px-6
        "
    >
      <div className="mx-auto max-w-4xl text-center">
        <p className="uppercase tracking-[0.5em] text-[#B38B59]">
          {wedding.story.title}
        </p>

        <h2 className="mt-8 text-5xl font-serif text-[#2F2F2F]">
          {wedding.story.intro}
        </h2>

        <div className="mx-auto mt-8 h-[2px] w-20 bg-[#D4B483]" />

        <p className="mx-auto mt-10 max-w-2xl text-lg leading-9 text-gray-600">
          {wedding.story.body}
        </p>
      </div>
    </section>
  );
}