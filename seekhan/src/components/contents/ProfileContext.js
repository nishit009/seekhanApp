import { useEffect, useContext, createContext } from "react";
export const ProfileContext = createContext({
  profiles: [
    {
      id: 1,
      firstname: "Dosapati",
      email: "xxx@gmail.com",
    },
  ],
  addProfile: (profile) => {},
  updateProfile: (id, profile) => {},
});
export const useProfile = () => {
  return useContext(ProfileContext);
};
export const ProfileProvider = ProfileContext.Provider;
