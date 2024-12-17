import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t px-10">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href='/'>
          {/* <Image 
            src="/assets/images/logo.svg"
            alt="logo"
            width={128}
            height={38}
          /> */}
          <h1 className="font-extrabold text-2xl">SangamVedh</h1>
        </Link>

        <p>&#169; 2024 SangamVedh. All Rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer