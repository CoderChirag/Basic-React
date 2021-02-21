import React, {useState} from "react";
import CustomText from "./CustomText";

const App = () => {
    const [name, setName] = useState("Dikshan");
    let num = 1;
    // setName("Dikshant");
    // const arr = useState("Dikshan");
    // const name = arr[0];
    // const setName = arr[1];
    return(
        <React.Fragment>
            {name === "Dikshan" ? num=2 : null}
            <h1 onClick={() => setName("Dikshant")}>Print Dikshant</h1>
            <CustomText name="Chirag" color="red" num={num}/>
            {name === "Dikshant" ? <CustomText name="Dikshant" color="blue"/> : null}
        </React.Fragment>
    );
};

export default App;