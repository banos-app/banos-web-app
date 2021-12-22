import Link from "next/link";
import { ButtonOutlined } from ".";

interface Props {
  links: {
    href: string;
    title: string;
  }[];
}

export function Breadcrums({ links }: Props) {
  const backIcon = (
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
  );

  return (
    <div className="lg:flex lg:justify-between lg:items-center mb-8 lg:mb-16">
      <Link href="/">
        <a>
          <ButtonOutlined className="mb-4 lg:mb-0" icon={backIcon}>
            Go Home
          </ButtonOutlined>
        </a>
      </Link>
      <div className="flex text-gray-400 transition font-semibold">
        {links.map((link, index) => (
          <>
            <Link href={link.href}>
              <a className="flex items-center">
                <div className="ml-1 lg:ml-4 hover:text-red-400">{link.title}</div>
                {links.length - 1 !== index && (
                  <div className="ml-1 lg:ml-4">
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
                )}
              </a>
            </Link>
          </>
        ))}
      </div>
    </div>
  );
}
