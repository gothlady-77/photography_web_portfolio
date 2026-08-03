import { ArrowUp } from "lucide-react";
import { SiInstagram, SiBluesky } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Freya Mason, Lex Watts (gothlady_77). All rights reserved.
      </p>

      <div className="flex space-x-4">
        <a
          href="https://www.instagram.com/freyaprimrosesphotography?igsh=MW1rODJ5am5yZHdibA=="
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        >
          <SiInstagram size={20} />
        </a>

        <a
          href="https://bsky.app/profile/freyasphotography.bsky.social"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        >
          <SiBluesky size={20} />
        </a>

        <a
          href="https://www.linkedin.com/in/freya-mason-304283426?utm_source=share_via&utm_content=profile&utm_medium=member_android"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        >
          <FaLinkedin size={20} />
        </a>
      </div>

      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};