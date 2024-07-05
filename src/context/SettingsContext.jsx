import { createContext, useState } from "react";


export const SettingsContext = createContext();



export const SettingsProvider = ({children}) =>{


    const colorsDarkMode = {
        blackOrWhite:   "#dcd8c7",
        boxBg:          "#4a555b",
        pageBg:         "#021d21",
        toggleBtnBg:    "#798180",
        toggleBtn:      "#384042",
        linearGradient: `linear-gradient(52deg, #343b42 0%, 
                                                #4a4d4f 17%,
                                                #404548 40%, 
                                                #2d3132 100%)`,
    }

    const colorsLightMode = {
        blackOrWhite:   "#000000",
        boxBg:          "#E8E8E8",
        pageBg:         "#F4F4F4",
        toggleBtnBg:    "#D9D9D9",
        toggleBtn:      "#F5F5F5",
        linearGradient: `linear-gradient(52deg,  rgba(246,238,238,1) 0%,
                                                 rgba(243,236,236,1) 17%, 
                                                 rgba(224,222,222,1) 40%, 
                                                 rgba(239,237,237,1) 100%)`,
    }

    const [globalSettings, setGlobalSettings] = useState({
        ...colorsLightMode,
        isDark:     false,
        lang:       "en",
    })

    return(
        <SettingsContext.Provider 
            value={{
                colorsDarkMode,
                colorsLightMode,
                globalSettings,
                setGlobalSettings,
            }}
        >
            {children}
        </SettingsContext.Provider>
    )

}