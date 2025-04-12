import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="hover:bg-muted duration-300 px-4 py-1.5 hover:text-foreground rounded-full text-foreground border-x hover:border-transparent focus-visible:border-transparent"
    >
      <h6>Spine & Page</h6>
    </Link>
  );
}
