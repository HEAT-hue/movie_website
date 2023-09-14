import facebookIcon from "../../assets/home/facebookIcon.svg";
import twitterIcon from "../../assets/home/twitterIcon.svg";
import youtubeIcon from "../../assets/home/youtubeIcon.svg"
import instaIcon from "../../assets/home/instagramIcon.svg"

export const Footer: React.FC = () => {
    return (
        <footer className="flex flex-col gap-y-3 items-center text-sm">
            {/* Social media links */}
            <div className="flex gap-x-4 [&>*]:w-[20px] [&>*]:h-[20px]">
                <img src={facebookIcon} alt="social" />
                <img src={twitterIcon} alt="social" />
                <img src={youtubeIcon} alt="social" />
                <img src={instaIcon} alt="social" />
            </div>

            <div className="flex gap-x-3 font-bold text-gray-700">
                <a href="#" target="_blank" rel="noopener noreferrer">Condition of Use</a>
                <a href="#" target="_blank" rel="noopener noreferrer">Privacy & Policy</a>
                <a href="#" target="_blank" rel="noopener noreferrer">Press Room</a>
            </div>

            <p className="font-bold text-gray-500">&copy; 2021 MovieBox by Adriana Eka Prayudha  </p>
        </footer>
    )
}