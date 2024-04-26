import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky left-0 top-0 bg-white drop-shadow-md">
      <div className="vnn-container">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center self-stretch">
              <Image
                src="/images/logo.png"
                alt="Logo NOK"
                width={100}
                height={31}
                quality={100}
              />
            </Link>
            <Image
              src="/images/vietnam.png"
              alt="Vietnam flag"
              width={50}
              height={15}
              quality={100}
            />
          </div>
          {/* Menu mobile */}
          <div className="md:hidden">menu mobile</div>

          {/* Menu */}
          <div className="hidden md:block">menu</div>
        </div>
      </div>
    </header>
  );
}
