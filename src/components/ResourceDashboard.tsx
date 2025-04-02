import CardResource from "./ui/card-resource";
import { useState, useRef, useEffect } from "react";

function AppDashboard(){
    // Estado para rastrear la sección activa
    const [activeSection, setActiveSection] = useState<"recent" | "recommended" | "favorites">("recent");
    const [indicatorStyle, setIndicatorStyle] = useState({});
    
    // Definir el tipo para las referencias de botones
    const buttonRefs = {
        recent: useRef<HTMLButtonElement | null>(null),
        recommended: useRef<HTMLButtonElement | null>(null),
        favorites: useRef<HTMLButtonElement | null>(null)
    };
    
    // Actualizar la posición del indicador cuando cambia la sección activa
    useEffect(() => {
        const activeButton = buttonRefs[activeSection].current;
        if (activeButton) {
            setIndicatorStyle({
                left: `${activeButton.offsetLeft}px`,
                width: `${activeButton.offsetWidth}px`,
                transition: 'all 0.3s ease'
            });
        }
    }, [activeSection]);
    
    return(
        <>
        <section className="p-5">
          {/* section title */}
          <div className="flex justify-between items-center mb-5">
            <h1 className="text-2xl font-bold">Resource Dashboard</h1>
          </div>        
          <div className="flex border-b mb-6 overflow-x-auto w-full relative">
            {/* Navigation buttons on the dashboard */}
            <button 
              ref={buttonRefs.recent}
              className={`px-4 py-2 text-sm ${activeSection === "recent" ? "font-medium" : "text-gray-500"} whitespace-nowrap`}
              onClick={() => setActiveSection("recent")}
            >
              Recent Resources
            </button>
            <button 
              ref={buttonRefs.favorites}
              className={`px-4 py-2 text-sm ${activeSection === "favorites" ? "font-medium" : "text-gray-500"} whitespace-nowrap`}
              onClick={() => setActiveSection("favorites")}
            >
              Favorites
            </button>
            <button 
              ref={buttonRefs.recommended}
              className={`px-4 py-2 text-sm ${activeSection === "recommended" ? "font-medium" : "text-gray-500"} whitespace-nowrap`}
              onClick={() => setActiveSection("recommended")}
            >
              Recommended
            </button>
            {/* Indicador animado */}
            <div className="absolute bottom-0 h-0.5 bg-blue-500" style={indicatorStyle}/>
          </div>

          {/* Dashboard section */}
          {activeSection === "recent" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              <CardResource/>
              <CardResource/>
              <CardResource/>
              <CardResource/>
            </div>
          )}
          {activeSection === "recommended" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              <CardResource/>
              <CardResource/>
              <CardResource/>
            </div>
          )}
          {activeSection === "favorites" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              <CardResource/>
              <CardResource/>
            </div>
          )}
        </section>
        </>
    )
}

export default AppDashboard;