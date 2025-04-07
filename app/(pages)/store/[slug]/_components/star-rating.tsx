"use client";

import { StarIcon } from "lucide-react";
import { useState } from "react";

export default function StarRating() {
  const [value, setValue] = useState(0);

  return (
    <div className="flex-center gap-0.5">
      {[...Array(5)].map((_, id) => (
        <StarIcon
          key={id}
          fill="var(--sub)"
          className="size-6 text-transparent"
        />
      ))}

      <p className="font-heading ml-1.5">0 of 5</p>
    </div>
  );
}
