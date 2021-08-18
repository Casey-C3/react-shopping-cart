import {FaTimes} from 'react-icons/fa'
const SaveLater = ({savedItems,addProduct,removeSavedItems}) => {
    return (
        <div className='save-flex'>
             <h1 style={{marginLeft:40,fontSize:35}}>Saved Items</h1>
            <div className="save-flex__container">

                {savedItems.map((item) => (
                    <div className='save-flex__container__product' >
                
                    <div className='save__del-button'>
                        <FaTimes className='save__del-button-x' onClick={() => removeSavedItems(item)}/>
                    </div>
                   
                    <div className='save__image'>
                        <img src={item.image} alt = {item.title}/>
                    </div>
                    <div className='save__price'>
                        <h2>${item.price}</h2>
                    </div>
                    <div className='save__name'>
                        <h2>{item.title}</h2>
                    </div>
                   
                    
                  
                    
                    <div className='save__add-button'>
                        <button onClick={() => addProduct(item)}>Move to Cart</button>
                    </div>
                

                </div>


                ))}

            </div>
        </div>
    )
}
export default SaveLater