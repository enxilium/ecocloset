"use client"

import Link from "next/link";
import Image from "next/image";
import {usePathname} from 'next/navigation';

/* Components */
import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet';
import {CiMenuFries} from 'react-icons/ci'

const links = [
  {
      name: "LOGIN",
      path: "/login",
  },
  {
      name: "ABOUT",
      path: "/about",
  }
]

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet className="bg-white">
        <SheetTrigger className="flex justify-center items-center z-0">
            <CiMenuFries className="text-[32px] text-primary" />
        </SheetTrigger>

        <SheetContent className="bg-white">
            <div className="flex mt-32 mb-40 text-center justify-center items-center">
                <Link href="/">
                    <Image
                        src="/ecocloset_logo.png"
                        alt="Ecocloset logo"
                        width={50}
                        height={50}
                        className='nav-logo'
                    />
                </Link>
            </div>

            <nav className="flex flex-col justify-center items-center gap-8">
                {links.map((link, index) => {
                    return (
                        <Link 
                            href={link.path} 
                            key={index} 
                            className={`${
                                link.path === pathname && 
                                "text-faded border-b-2 border-faded"
                            }   text-xl capitalize hover:text-primary transition-all"`}
                    >
                        {link.name}
                        </Link>
                    );
                })}
            </nav>
        </SheetContent>
    </Sheet>
  );
}

export default MobileNav