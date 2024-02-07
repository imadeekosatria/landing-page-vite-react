import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import { faDesktop, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
const ThemeSwitcher = () => {
  const [userTheme, setUserTheme] = useState("");
  const [isClicked, setIsClicked] = useState(false)

  
  useEffect(() => {
    
    const getSystemTheme = () => {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        return "dark";
      } else {
        return "light";
      }
    }

    const setDocumentTheme = (theme) => {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }

    const actualTheme = userTheme === "system" ? getSystemTheme() : userTheme;
    
    if (!('theme' in localStorage)) {
        setUserTheme('system')
    }else{
        setUserTheme(localStorage.theme)
    }
    
    setDocumentTheme(actualTheme)

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    mediaQuery.addEventListener("change", () => {
      if (userTheme === "system") {
        setDocumentTheme(getSystemTheme())
      }
    })

    return () => {
      mediaQuery.removeEventListener("change", setDocumentTheme)
    }
  }, [userTheme])
  
  const handleToggle =(theme)=>{
    if (theme === 'system') {
        if (('theme' in localStorage)) {
            localStorage.removeItem('theme')
        }
        setUserTheme(theme)
    }else{
        localStorage.setItem("theme", theme)
        setUserTheme(theme)
    }
    setIsClicked(!isClicked)
  }

  const getIcon = () => {
    if (userTheme === "light") {
      return faSun
    } else if (userTheme === "dark") {
      return faMoon
    } else {
      return faDesktop
    }
  };

  return (
    <>
      <div className="theme-switch">
        <FontAwesomeIcon
          icon={getIcon()}
          
          onClick={()=>{setIsClicked(!isClicked)}}
        />
        <div
          className={`absolute top-16 -left-28 z-20 ${
            isClicked ? "" : "hidden"
          } flex gap-x-2 bg-white dark:bg-slate-800 rounded`}
        >
          <FontAwesomeIcon
            icon={faSun}
            className="dark:text-white cursor-pointer p-4 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
            onClick={()=>{handleToggle('light')}}
          />
          <FontAwesomeIcon
            icon={faMoon}
            className="dark:text-white cursor-pointer p-4 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
            onClick={()=>{handleToggle('dark')}}
          />
          <FontAwesomeIcon
            icon={faDesktop}
            className="dark:text-white cursor-pointer p-4 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
            onClick={()=>{handleToggle('system')}}
          />
        </div>
      </div>
    </>
  );
};

export default ThemeSwitcher;
