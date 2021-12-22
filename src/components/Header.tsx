import Link from "next/link";
import { Container } from "./Container";

export function Header() {
  return (
    <div className="bg-white border-b shadow-sm mb-8">
      <Container isMin>
        <div className="flex justify-between align-center py-4">
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
          <div>Texr</div>
        </div>
      </Container>
    </div>
  );
}
