import Link from "next/link";

interface Props {
  links: {
    href: string;
    title: string;
  }[];
}

export function Breadcrums({ links }: Props) {
  return (
    <div className="flex justify-between items-center mb-8">
      <Link href="/">
        <a>
          <div className="inline-flex items-center h-10 px-5 border-2 border-gray-300 rounded-full text-gray-400 font-semibold hover:border-gray-500 hover:text-gray-600 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Go Home
          </div>
        </a>
      </Link>
      <div className="flex items-center text-gray-400 font-semibold">
        {links.map((link) => (
          <>
            <Link href={link.href}>
              <a>
                <div className="ml-4">{link.title}</div>
              </a>
            </Link>
            <div className="ml-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
