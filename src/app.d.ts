type IconsProps = {
  name: IconName;
  isColorBlind?: boolean;
} & ComponentProps<'svg'>;

type IconName =
  | 'logo'
  | 'logo-sm'
  | 'logo-md'
  | 'icon-arrow'
  | 'icon-avatar'
  | 'icon-box'
  | 'icon-call'
  | 'icon-chevron-left'
  | 'icon-chevron-right'
  | 'icon-chevron-down'
  | 'icon-code'
  | 'icon-dollar'
  | 'icon-gear'
  | 'icon-hamburger'
  | 'icon-image'
  | 'icon-kor'
  | 'icon-marketing'
  | 'icon-target';

type SliderContent = {
  id: string;
  title: string;
  icon: IconName;
};

type CarouselContent = {
  id: string;
  name: string;
  avatar: string;
  nationality: string;
  experience: string[];
  skills: string[];
  rate: string;
};

type LandingContent = {
  title: string;
  desc: string;
  subtitle: string[];
  question: string;
  offers: {
    name: string;
    desc: string;
  }[];
  skills: string[];
};

type FooterContent = {
  desc: string;
  phone: string;
  email: string;
  details: {
    title: string;
    name: string;
    desc: string;
    space: string;
  }[];
  services: {
    name: string;
    icon: IconName[];
  }[];
};
