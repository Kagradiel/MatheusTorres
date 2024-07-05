import { useContext } from "react"
import { SettingsContext } from "../context/SettingsContext"


export const useSettingsContext = () =>{
    const {
        colorsDarkMode,
        colorsLightMode,
        globalSettings,
        setGlobalSettings,
    } = useContext(SettingsContext);


    function toggleDarkMode(){
        setGlobalSettings(prevGlobalSettings => ({
            ...prevGlobalSettings,
            ...(!prevGlobalSettings.isDark ? colorsDarkMode : colorsLightMode),
            isDark: !prevGlobalSettings.isDark,
        }));

    }
    
    function toggleLang(){

        globalSettings.lang === "en" ?
        setGlobalSettings(prevGlobalSettings => ({
            ...prevGlobalSettings,
            lang: "pt",
        })):
        setGlobalSettings(prevGlobalSettings => ({
            ...prevGlobalSettings,
            lang: "en",
        }));
    }


    return{
        colorsDarkMode,
        colorsLightMode,
        globalSettings,
        setGlobalSettings,
        toggleDarkMode,
        toggleLang,
    }

}