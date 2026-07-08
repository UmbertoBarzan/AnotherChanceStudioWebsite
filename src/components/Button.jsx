import Link from "next/link";
import clsx from "clsx";

const Button = ({ invert, href, className, children, ...props }) => {
  className = clsx(
    className,
    "inline-flex rounded-full px-6 py-3 text-sm font-semibold transition border-2",
    invert
      ? "border-white bg-white text-neutral-950 hover:bg-neutral-100"
      : "border-transparent bg-neutral-950 text-white hover:bg-neutral-800"
  );

  let inner = <span>{children}</span>;
  if (href) {
    return (
      <Link href={href} className={className} {...props}>
        {inner}
      </Link>
    );
  }
  return (
    <button className={className} {...props}>
      {inner}
    </button>
  );
};

export default Button;
