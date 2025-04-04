type Props = {
  moreInformation: { label: string; value: React.ReactNode }[];
};

export default function MoreInformation({ moreInformation }: Props) {
  return (
    <div className="">
      <h6 className="underline underline-offset-4 mb-1">More Information</h6>

      <div className="divide-y divide-muted">
        {moreInformation.map(({ label, value }) => (
          <div
            key={label}
            className="flex-center py-3 hover:bg-muted duration-300 px-4"
          >
            <span className="flex-1 font-heading">{label}</span>
            <small className="text-sub flex-2">{value}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
