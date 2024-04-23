import { Icons } from "./icons"

export function LicenseIndicator() {
  return (
    <div className="-translate-1/2 fixed bottom-2 left-1/2">
      <a href="https://sunwoo.xyz" target="_blank" rel="noreferrer">
        <p className="text-xs font-normal text-[#696565]">
          write by{" "}
          <span className="inline-block size-5 align-middle">
            <Icons.sign fill="#696565" />
          </span>
        </p>
      </a>
    </div>
  )
}
