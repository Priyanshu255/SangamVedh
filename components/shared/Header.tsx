import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import NavItems from "./NavItems"
import MobileNav from "./MobileNav"

const Header = () => {
  return (
    <header className="w-full  md:px-10 bg-gradient-to-br from-black from-10% to-blue-950 to-90%">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="md:pl-5">
          {/* <Image 
            src="/assets/images/logo.svg" width={128} height={38}
            alt="Evently logo" 
          /> */}
          <h1 className="font-extrabold text-xl text-blue-200">SangamVedh</h1>
        </Link>

        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>

        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton />
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full bg-blue-900 shadow-lg" size="lg">
              <Link href="/sign-in">
                Login
              </Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  )
}

export default Header