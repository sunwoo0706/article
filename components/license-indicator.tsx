import { Icons } from "./icons"

export function LicenseIndicator() {
  return (
    <div className="-translate-1/2 fixed bottom-2 left-1/2">
      <p className="text-xs font-normal text-[#696565]">
        write by{" "}
        <a
          href="https://sunwoo.xyz"
          target="_blank"
          className="inline-block size-5 align-middle"
          rel="noreferrer"
        >
          <Icons.sign fill="#696565" />
        </a>
      </p>
    </div>
  )
}
