import { FaInstagram, FaYoutube, FaTiktok, FaTelegram } from "react-icons/fa6";

const platforms = [
  { name: "Instagram", Icon: FaInstagram, color: "#E1306C" },
  { name: "YouTube", Icon: FaYoutube, color: "#FF0000" },
  { name: "TikTok", Icon: FaTiktok, color: "#000000" },
];

export default function PlatformBranches() {
  return (
    <div className="mb-8 flex flex-col items-start">
      <div className="relative flex gap-8 sm:gap-10">
        <div className="absolute left-7 right-7 top-0 h-px bg-gradient-to-r from-[var(--accent-1)]/50 via-[var(--accent-2)]/50 to-[var(--accent-1)]/50" />

        {platforms.map(({ name, Icon, color }) => (
          <div key={name} className="flex flex-col items-center">
            <div className="h-6 w-px bg-[var(--accent-2)]/50" />

            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-full glass-card sm:h-16 sm:w-16">
                <Icon className="h-6 w-6 sm:h-7 sm:w-7" style={{ color }} />
              </div>

              <div className="absolute -bottom-1.5 -right-1.5 flex h-7 w-7 items-center justify-center rounded-full border-[3px] border-[var(--bg-top)] bg-gradient-to-br from-[#2AABEE] to-[#229ED9] text-white">
                <FaTelegram className="h-3.5 w-3.5" />
              </div>
            </div>

            <span className="sr-only">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
