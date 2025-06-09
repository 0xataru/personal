import GitHubIcon from "@/components/icons/GitHubIcon";
import EmailIcon from "@/components/icons/EmailIcon";
import TwitterIcon from "@/components/icons/TwitterIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";

export default function ContactSection() {
  return (
    <section>
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-white border-b border-gray-800 pb-3 sm:pb-4">
        Contact
      </h2>
      <div className="bg-gray-900/50 backdrop-blur rounded-lg p-4 sm:p-6 lg:p-8 border border-gray-800">
        <p className="text-gray-300 text-center mb-4 sm:mb-6 text-sm sm:text-base">
          Interested in working together? Let&apos;s connect!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-center gap-3 sm:gap-4">
          <a
            href="https://github.com/0xataru"
            className="px-4 sm:px-5 lg:px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base min-h-[44px]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
            GitHub
          </a>
          <a
            href="mailto:0xataru.rs@gmail.com"
            className="px-4 sm:px-5 lg:px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base min-h-[44px]"
          >
            <EmailIcon />
            Email
          </a>
          <a
            href="https://x.com/0xataru"
            className="px-4 sm:px-5 lg:px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base min-h-[44px]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon />
            Twitter
          </a>
          <a
            href="https://www.linkedin.com/in/0xataru/"
            className="px-4 sm:px-5 lg:px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-200 flex items-center justify-center gap-2 text-sm sm:text-base min-h-[44px]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
} 