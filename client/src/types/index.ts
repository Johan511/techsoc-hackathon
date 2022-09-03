import { MakeGenerics } from "@tanstack/react-location";

export type SLink = {
  title: string;
  url: string;
  enabled: boolean;
  id: string;
};

/*  all values in HEX , ex: "#a4b1d7" */
export type Theme = {
  id: string;
  name: string;
  bg: string;
  link: string;
  text: string;
  linktext: string;
};

export type UserDetails = {
  photoURL: string;
  name: string;
  bio: string;
};

export type Profile = {
  id: string;
  user: UserDetails;
  theme: Theme;
  links: SLink[];
};
export type LocationGenerics = MakeGenerics<{
  LoaderData: {
    profile: Profile | null;
  };
  Params: {
    sid: string;
  };
  Search: {};
}>;
// export type

export type RC = {
  children?: React.ReactNode;
};
