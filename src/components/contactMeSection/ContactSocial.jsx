import React from 'react';
import SingleContactSocial from './SingleContactSocial';
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
       <SingleContactSocial link="https://www.linkedin.com/in/rajeshkumar006" Icon={FaLinkedinIn} />
       <SingleContactSocial link="https://github.com/Rajesh-kDas" Icon={FiGithub} />
       <SingleContactSocial link="https://www.instagram.com/raz.exhh?igsh=MW16OHo1Nml5ZW42NA==&utm_source=ig_contact_invite " Icon={FaInstagram} />
    </div>
  )
}
export default ContactSocial;