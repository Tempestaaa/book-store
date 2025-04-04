import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StarIcon } from "lucide-react";

type Props = {
  id: number;
};

export default function ReviewCard({ id }: Props) {
  const date = new Date(Date.now())
    .toUTCString()
    .split(" ")
    .slice(0, 4)
    .join(" ");
  const isShowMoreNeeded = true;

  return (
    <div className="flex gap-4">
      <Avatar className="size-10">
        <AvatarImage src="/images/user-profile.jpg" alt="User's profile" />
        <AvatarFallback>US</AvatarFallback>
      </Avatar>

      <div className="flex-1 rounded-md bg-muted p-2 relative before:absolute before:-left-4 before:top-3 before:border-8 before:border-transparent before:border-r-muted">
        <p className="font-heading font-bold leading-normal">Username</p>

        <div className="flex-center gap-4 justify-between">
          <div className="flex-center gap-0.5">
            {[...Array(5)].map((_, id) => (
              <StarIcon
                key={id}
                fill={Math.floor(4) <= id ? "var(--sub)" : "var(--star)"}
                className="text-transparent size-4"
              />
            ))}
            <small>4</small>
          </div>
          <p className="text-sub text-xs italic">{date}</p>
        </div>

        <input
          type="radio"
          id={`show-more-review-${id}`}
          className="peer hidden"
        />

        <small className="line-clamp-4 peer-checked:line-clamp-none my-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed quas non
          inventore voluptatum nisi odit molestias delectus, assumenda beatae
          voluptas porro quo quia, minima sit maxime. Repudiandae iure nobis
          veritatis fuga aspernatur quae, quis eligendi corrupti laborum
          perferendis dolorum obcaecati earum repellat sed ea neque ducimus?
          Voluptatibus at similique sapiente alias! Facere magnam fuga illum
          cumque doloribus commodi sapiente soluta repellat quidem, omnis
          minima? Enim, nemo! Animi est, quas nam aliquid a temporibus enim
          tempora. Iusto rem aliquam temporibus in, fugit ad ipsam officiis
          porro provident ullam, repudiandae cupiditate dignissimos nam odio
          doloribus voluptates quod accusamus praesentium, eaque eveniet velit.
        </small>

        {isShowMoreNeeded && (
          <label
            htmlFor={`show-more-review-${id}`}
            className="cursor-pointer font-heading w-fit peer-checked:hidden"
          >
            More
          </label>
        )}
      </div>
    </div>
  );
}
