

const Languageoption = (props) => {
    return(
<>

<select onChange={props.onChange}>
                
                <option>Select Language:</option>
                <option value={'en'}>English</option>
                <option value={'fr'}>Farsi</option>
                <option value={'ps'}>Pashto</option>
                <option value={'uz'}>Uzbak</option>
            </select>



</>

    

     
    )
}
export default Languageoption;
