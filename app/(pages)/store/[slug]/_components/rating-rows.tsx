export default function RatingRows() {
  const fake_ratings = [58, 72, 15, 93, 107];
  const max = Math.max(...fake_ratings);

  return (
    <div className="flex flex-col gap-2">
      <h6>
        Ratings <span>(345)</span>
      </h6>

      <div className="flex flex-col gap-1">
        {fake_ratings.reverse().map((item, id) => (
          <label
            key={id}
            className="flex-center gap-4 h-10 hover:bg-muted duration-300 px-6 rounded-full"
          >
            <h6 className="mb-2">{5 - id}</h6>
            <progress
              max={max}
              value={item}
              className="rounded-full flex-1 h-6"
            >
              {item}
            </progress>

            <small className="">{item}</small>
          </label>
        ))}
      </div>
    </div>
  );
}
