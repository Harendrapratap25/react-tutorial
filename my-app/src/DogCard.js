function DogCard(props){
    const imageUrl = props.image.imageUrl
    const name = props.image.imageName
    return(
        <div>
            <h2>Dog Name</h2>
            <img src= {imageUrl} alt="Dog" />
            <p>{name}</p>
            {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL-Pdoi1K6t0jS6jQ4Wg-ppnx9ARJQDBwP_xFoWMDYKGgpjWBwAfF4_0Kw1DKOmeytokM&usqp=CAU" alt="" /> */}
        
       
           
        </div>
        
    );
}
export default DogCard;