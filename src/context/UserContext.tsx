import react, {
  useState,
  useEffect,
  createContext,
  useContext,
  FC,
  Dispatch,
  SetStateAction,
} from "react";

export type Skill = {
  listening: number;
  reading: number;
  speaking: number;
  writing: number;
  personalities: string[];
};

export type Project = {
  technologies: string[];
  id: string;
  description: string;
  index: number;
  sourceCode: string;
  title: string;
  link1?: string;
  link2?: string;
  link3?: string;
  finished: boolean;
};

export type Education = {
  id: string;
  index: number;
  institution: string;
  degree: string;
  date: string;
  fieldOfStudy: string;
};

export type User = {
  id: string;

  name: string;
  tagline: string;
  email: string;
  github: string;
  location: string;
  strength: string;
  phone: string;
  objective: string;
  born: string;
  englishSkill: string;
  backEndSkills: string[];
  frontEndSkills: string[];
  infrastructures: string[];
  project: Project[];
  education: Education[];
  skill: Skill;
};

export type UserProps = {
  user: User;
};

type UserContextType = {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export const UserProvider: FC = ({ children }) => {
  const [user, setUser] = useState(undefined);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
// export const useUser = () => useContext(UserContext)
export const useUser = () => {
  return useContext(UserContext);
};
// fetch context => const user = useUser().currentUser
