import Link from "next/link";
import { Container } from "./Container";

export function Header() {
  return (
    <div className="bg-white border-b shadow-sm mb-8">
      <Container size="md">
        <div className="flex justify-between items-center h-[56px]">
          <div>
            <Link href="/">
              <a className="group">
                <h2 className="text-3xl font-bold text-red-500 group-hover:text-red-400 group-active:text-red-600 inline-block leading-none transition">
                  Baños
                </h2>
                <span className="text-3xl font-light text-red-500 group-hover:text-red-400 group-active:text-red-600 leading-none transition">
                  {" "}
                  de agua santa
                </span>
              </a>
            </Link>
          </div>
          <div className="flex align-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 10h16M4 14h16M4 18h16"
              />
            </svg>
          </div>
        </div>
      </Container>
    </div>
  );
}
