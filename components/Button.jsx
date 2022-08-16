import Link from "next/link";

const Button = ({ text, style }) => {
  return (
    <Link href="/">
      <a
        className={`uppercase text-slate-700 font-medium border border-slate-400 hover:bg-cyan-400 hover:text-white ${style}`}
      >
        {text}
      </a>
    </Link>
  );
};

export default Button;
