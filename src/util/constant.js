import React from 'react';
import { SiLetsencrypt } from 'react-icons/si';
import { FcAdvertising } from 'react-icons/fc';
import { MdMoneyOff } from 'react-icons/md';
import { AiFillApple, AiFillGoogleCircle } from 'react-icons/ai';
import { FaDyalog, FaRegEnvelopeOpen } from 'react-icons/fa';
import { RiDraftLine } from 'react-icons/ri';
import { BsFileBreak } from 'react-icons/bs';

// ? uuid??? Might be a good idea!
export const navLinks = [
  {
    id: 1,
    name: 'sign in',
    url: '/signin',
    type: null,
  },
  {
    id: 2,
    name: 'Try for free',
    url: '/signup', //get-started
    type: 'primary',
  },
];

export const features = [
  {
    id: 1,
    icon: <SiLetsencrypt />,
    text: 'End-to-end encryption',
    info:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis',
  },
  {
    id: 2,
    icon: <FcAdvertising />,
    text: 'No ads. No trackers',
    info:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis',
  },
  {
    id: 3,
    icon: <MdMoneyOff />,
    text: 'Free for Everyone',
    info:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis',
  },
];

export const apps = [
  {
    id: 1,
    logo: <AiFillApple />,
  },
  {
    id: 2,
    logo: <AiFillGoogleCircle />,
  },
];

export const sideBarIcons = [
  {
    id: 1,
    name: 'dashboard',
    url: 'dashboard',
    icon: <FaDyalog />,
  },
  {
    id: 2,
    name: 'inbox',
    url: 'inbox',
    icon: <FaRegEnvelopeOpen />,
  },
  {
    id: 3,
    name: 'draft',
    url: 'draft',
    icon: <RiDraftLine />,
  },
  {
    id: 4,
    name: 'files',
    url: 'files',
    icon: <BsFileBreak />,
  },
];

//? FOR TESTING!!
export const tempChannels = [
  {
    id: 1,
    name: 'Gladys',
    last_seen: 'this morning',
  },
  {
    id: 2,
    name: 'Jordan',
    last_seen: '4 hours ago',
  },
  {
    id: 3,
    name: 'Ritthy ',
    last_seen: '2 days ago',
  },
];
