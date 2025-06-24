import { cn } from "../lib/utils";
import { Marquee } from "./magicui/marquee";

const reviews = [
  {
    name: "Max Goiden",
    username: 1,
    body: "Gotta say using Carrycaro to send my parcel was really efficient for me",
  },
  {
    name: "Marcelo Anjos",
    username: 2,
    body: "Fast, reliable, and hassle-free—exactly what I needed. Highly recommended!",
  },
  {
    name: "Mason",
    username: 3,
    body: "Never heard of Carrycaro.com until today, this looks amazing",
  },
  {
    name: "Bernard Sarfo Twumasi",
    username: 4,
    body: "After using Carrycaro to received my parcel, I highly recommend it.",
  },
  {
    name: "Muhammad Shafeeq",
    username: 5,
    body: "Recently tried Carrycaro, impressed by its features and versatility. Hats off to you for building an easy solution :)",
  },
];

const firstRow = reviews;

const ReviewCard = ({
  name,
  username,
  body
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <div
      className={cn(
        "relative h-full w-64 overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:bg-gray-900/80 dark:border-gray-800/50 dark:hover:bg-gray-900/50",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-col">
          <div className="text-md font-medium dark:text-white">
            {name}
          </div>
        </div>
      </div>
      <div className="mt-2 text-md">{body}</div>
    </div>
  );
};

export function Testimonial() {
  return (
    <div className="py-10">
      <h2 className="text-4xl text-center">Join the community</h2>
      <p className="text-lg text-center text-gray-700 dark:text-gray-400">Discover what the community has to say about their experience.</p>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden mt-5">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>
    </div>
  );
}
