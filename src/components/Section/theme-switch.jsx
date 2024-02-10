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
          className={`${
            isClicked ? "" : "hidden"
          }`}
        >
          <FontAwesomeIcon
            icon={faSun}
            onClick={()=>{handleToggle('light')}}
          />
          <FontAwesomeIcon
            icon={faMoon}
            onClick={()=>{handleToggle('dark')}}
          />
          <FontAwesomeIcon
            icon={faDesktop}
            onClick={()=>{handleToggle('system')}}
          />
        </div>
      </div>
    </>
  );
};

export default ThemeSwitcher;
