import Link from "next/link";

type BrandLogoProps = {
  className?: string;
};

export default function BrandLogo({ className = "" }: BrandLogoProps) {
  return (
    <Link href="/" className={`brand-logo ${className}`}>
      <img src="/codeweb24-logo.png" alt="CODEWEB24" />
    </Link>
  );
}
