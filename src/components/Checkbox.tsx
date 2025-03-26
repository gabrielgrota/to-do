import {useState} from "react"

function Checkbox() {

    const [isChecked, setIsChecked] = useState(false);

    const checked = () => {
        setIsChecked(!isChecked);
    }

    return (
        <div>
            <input type="checkbox" onChange={checked}></input>

            {/* for test, this is data that goes to database */}
            {/* <p>{isChecked ? "YES" : "NO" }</p> */}
        </div>
    )
}

export default Checkbox
