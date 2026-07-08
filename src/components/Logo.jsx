import clsx from "clsx";
import Link from "next/link";

const Logo = ({ invert, href, className, children, fillOnHover, ...props }) => {
  className = clsx(
    className,
    invert
      ? "text-white hover:text-neutral-200"
      : "text-neutral-950 hover:text-neutral-700"
  );
  const inner = <span className="relative">{children}</span>;
  if (href) {
    return (
      <Link href={href} className={className} {...props}>
        {inner}
      </Link>
    );
  }
  return (
    <h2
      className={clsx(
        "cursor-pointer text-2xl font-semibold duration-300",
        className
      )}
      {...props}
    >
      {inner}
    </h2>
  );
};

export default Logo;
