import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ContactChannelProps = {
  icon: IconProp;
  title: string;
  contact: string;
}

const ContactChannel = ({ icon, title, contact }: ContactChannelProps) => {
  return (
    <div className="bg-[#bbc8ec] dark:bg-[#202636] rounded-xl p-6 min-w-[220px] grid grid-cols-6 gap-4 mb-2 ">
      <div className="col-span-1 flex items-center justify-center">
        <FontAwesomeIcon icon={icon as IconProp} className="text-cyan-900 dark:text-cyan-400 text-2xl" />
      </div>
      <div className="col-span-5 text-start">
        <h3 className="text-cyan-900 dark:text-cyan-400 font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-lg">{contact}</p>
      </div>
    </div>
  )
}

const CONTACT_CHANNELS = [
  { icon: faEnvelope, title: "Email", contact: "andresajrb@gmail.com" },
  { icon: faLocationDot, title: "Ubicación", contact: "Venezuela, Carabobo" },
  { icon: faLinkedin, title: "LinkedIn", contact: "https://www.linkedin.com/in/andres-jose-reyes-438626160/" }
]

const ContactChannels = () => {
  return (
    <div className="mt-6">
      {CONTACT_CHANNELS.map((channel) => (
        <ContactChannel key={channel.title} {...channel} />
      ))}
    </div>
  )
}

export default ContactChannels;