import { useEffect, useState } from "react";
import "./styles.css";



export const App = () => {
  const [fontColor, setFontColor] = useState<string>("#000000");
  const [backgroundColor, setBackgroundColor] = useState<string>("#000000");
  const [globalVariablesColor, setGlobalVariablesColor] = useState<string | null>(null);


  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>, target: "font" | "background" | "global") => {
    if (target === "font") {
      return setFontColor(event.target.value);
    } else if(target === "global") {
      return event?.target?.value && setGlobalVariablesColor(event?.target?.value);
    }
    return setBackgroundColor(event.target.value)
  };

  useEffect(() => {
    const currentFontColor = localStorage.getItem('fontColor') || "";
    const currentBackgroundColor = localStorage.getItem('backgroundColor') || "";
    const currentGlobalVariablesColor = localStorage.getItem('globalVariablesColor') || "";;
    setFontColor(currentFontColor);
    setBackgroundColor(currentBackgroundColor);
    setGlobalVariablesColor(currentGlobalVariablesColor);
  }, []);

  useEffect(() => {
    localStorage.setItem('fontColor', fontColor);
    localStorage.setItem('backgroundColor', backgroundColor);
    globalVariablesColor && localStorage.setItem('globalVariablesColor', globalVariablesColor);

  }, [fontColor, backgroundColor, globalVariablesColor]);

  return (
    <div className="content">
      <div>
        <div style={{
          display: "flex",
          gap: 10
        }}>
          global <input type="color" key={"global"} value={globalVariablesColor || ""} onChange={
            (event) => handleColorChange(event, "global")
          } />
        </div>
        <div style={{
          display: "flex",
          gap: 10
        }}>
          Font <input type="color" key={"font"} value={fontColor} onChange={
            (event) => handleColorChange(event, "font")
          } />
        </div>
        <div style={{
          display: "flex",
          gap: 10
        }}>
          Background
          <input type="color"key={"background"} value={backgroundColor} onChange={(event) => handleColorChange(event, "background")} />
        </div>
      </div>
      <div style={{
        width: 300,
        height: 300,
        background: backgroundColor,
        color: fontColor
      }}>
        Here is the text
      </div>
    </div>
  );
};
