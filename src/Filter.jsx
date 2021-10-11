import './css/Filter.css';


function Filter({ handleSet }) {

    function handleCheck(e) {
        if (e.target.checked) {
            handleSet(true, e.target.value)
        }
        if (e.target.checked === false) {
            handleSet(false, e.target.value)
        }
    }


    return (
        <div id="filter">
            <div id="filter-title">Filter by Brand</div>
            <input type="checkbox" className="checkbox" name="nyx" value="nyx"
                onChange={handleCheck}
            />
            <span className="brands"> NYX </span>

            <input type="checkbox" className="checkbox" name="clinique" value="clinique"
                onChange={handleCheck}
            />
            <span className="brands"> CLINIQUE </span>

            <input type="checkbox" className="checkbox" name="smashbox" value="smashbox"
                onChange={handleCheck}
            />
            <span className="brands"> SMASHBOX</span>
            <input type="checkbox" className="checkbox" name="dior" value="dior"
                onChange={handleCheck}
            />
            <span className="brands"> DIOR </span>

            <input type="checkbox" className="checkbox" name="covergirl" value="covergirl"
                onChange={handleCheck}
            />
            <span className="brands"> COVERGIRL</span>

        </div>
    )
}
export default Filter;
