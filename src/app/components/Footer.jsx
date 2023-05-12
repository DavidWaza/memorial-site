import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-[#000001] py-5 px-9 flex justify-between">
      <div className="novateur text-white primary_font">
        <div className="flex">
          Copyright &#169;
          <span className="ml-3">
            <Link href="https://www.novateur.ng/" className="no-underline">
              <p className="text-[#FAEBD7]">Novateur Group</p>
            </Link>
          </span>
        </div>
      </div>
      <div className="text-end text-white primary_font ">
        <p>2023</p>
      </div>
    </div>
  );
}
