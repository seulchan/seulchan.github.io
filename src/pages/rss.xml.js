import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const notes = (await getCollection("notes"))
    .filter((note) => !note.data.draft)
    .map((note) => ({
      title: `Day ${note.data.day} — ${note.data.title}`,
      pubDate: note.data.date,
      link: `/notes/${note.id}/`,
      description: `Still Figuring It Out · Day ${note.data.day} · ${note.data.hours}h`,
    }));

  const thoughts = (await getCollection("thoughts"))
    .filter((thought) => !thought.data.draft)
    .map((thought) => ({
      title: thought.data.title,
      pubDate: thought.data.date,
      link: `/thoughts/${thought.id}/`,
      description: "A thought from Nahc.",
    }));

  const items = [...notes, ...thoughts].sort(
    (a, b) => b.pubDate.getTime() - a.pubDate.getTime(),
  );

  return rss({
    title: "Nahc",
    description: "Notes on what I'm learning and thoughts along the way.",
    site: context.site,
    items,
    customData: `<language>en-us</language>`,
  });
}
