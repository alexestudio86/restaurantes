import { useLoaderData } from "react-router-dom";
import { useCarContext, useUpdateCarContext } from "../../../context/plans/CarBasicProvider";
import { useEffect } from "react";
import dummyImage from '../../../assets/general/dummy-product.jpg'


//Dummies
const dummyPrice        = 999;
const dummyTitle        = 'Lorem Ipsum';
const dummyDescription  = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua';

//Retrieve image
const filterPostImages = ( evt ) => {
  if(evt.url){
    return evt.url.replace("s72","s320")
  }else {
    const tmp = document.createElement('div');
    tmp.innerHTML = evt.$t;
    const getImages = tmp.querySelectorAll('img');
    const allImages = Array.from(getImages).map( img => img.getAttribute('src') )
    if( allImages.length === 0 ){
      return dummyImage
    }else if( allImages.length === 1 ){
      return allImages[0].replace('s1024', 's320')
    }else{
      return allImages[0].replace('s1024', 's320')
      }
  }
}

//Retrieve title
const retrieveTitle = ( evt ) => {
  if( evt.length > 3 ){
    return evt
  }
  return dummyTitle
}

//Retrieve label
const retrieveLabels = ( evt ) => {

  const terminos = [ ...( evt.map( e => e.term ) ).filter( e => isNaN( parseInt(e) ) ) ];
  return terminos

}

// Extract numbers only, and return 999 if evt has 2 prices
const retrievePrice = ( evt ) => {
  const prices = [ ...( evt.map( e => e.term ) ).filter( Number ) ];
  return(
    prices.length === 1 ? prices : dummyPrice
  )
}

// Extract text of json html elements
const retrieveDescription = ( evt ) => {
  const divElement = document.createElement('div');
  divElement.innerHTML = evt;
  const text = divElement.innerText;
  if( text ){
    return `${text.substring(1, 141)}${text.length > 140 && '...'}`
  }
  return dummyDescription
}

//Retrieve Thumbnail
const filterThumbnailImages = ( evt ) => {
  if(evt.url){
    return evt.url.replace("s72","s90")
  }else {
    const tmp = document.createElement('div');
    tmp.innerHTML = evt.$t;
    const getImages = tmp.querySelectorAll('img');
    const allImages = Array.from(getImages).map( img => img.getAttribute('src') )
    if( allImages.length === 0 ){
      return dummyImage
    }else if( allImages.length === 1 ){
      return allImages[0].replace('s1024', 's90')
    }else{
      return allImages[0].replace('s1024', 's90')
      }
  }
}

// Retrieve postID
const retrievePostID = ( evt ) => {
  return evt.substring( evt.indexOf("post-")+5 );
}


export function PlanBasic01Products () {

  //Get post from loader
  const { posts } = useLoaderData();
  
  //Recovery car hook
  const updateCar   =   useUpdateCarContext();
  
  //Get Car
  const car = useCarContext();
  useEffect( () => {
    //Select all articles
    const articles = [...document.querySelectorAll('article[id]')];
    articles.map( a => {
      //Search car in articles
      const found = car.find( c => c.id === a.id );
      if(found){
        const btnPushed = document.querySelector(`article[id='${found.id}'] button`);
        btnPushed.classList.remove('w3-yellow');
        btnPushed.classList.add('w3-light-gray');
        btnPushed.setAttribute('disabled', 'true');
        const icon = document.querySelector(`article[id='${found.id}'] i[data-ident='icon']`);
        //unicode, hex code, html code, html entity
        icon.innerText = '✓'
      }else{
        const btn = document.querySelector(`article[id='${a.id}'] button`);
        btn.classList.remove('w3-light-gray');
        btn.classList.add('w3-yellow');
        btn.removeAttribute('disabled');
        const icon = document.querySelector(`article[id='${a.id}'] i[data-ident='icon']`);
        //unicode, hex code, html code, html entity
        icon.innerText = '+'
      }
    } )
    //const found = car.find( c => c.id === retrievePostID(evt) );
  }, [car])

  return (
    <main id="products" className="w3-row w3-light-gray">
      <div className="container">
        <h1 className="w3-center w3-xxlarge w3-padding-64">Nuestros Productos</h1>
        { posts ? posts.map( ( post, index ) => (
          <article key={index} className='w3-row py-1' id={retrievePostID(post.id.$t)} >
            <div className="w3-row w3-white">
              <div className='w3-col s4' >
                <img className='w-100' alt={retrieveTitle(post.title.$t)} src={ filterThumbnailImages(post.media$thumbnail ? post.media$thumbnail : post.content) } width='70px' height='100px' style={ {objectFit: 'cover'} } />
              </div>
              <div className='w3-col s8'>
                <div className="w3-row">
                  <div className="w3-col s8">
                    <h1 className='w3-small text-uppercase fw-bold'>{ retrieveTitle(post.title.$t) }</h1>
                    <span className="w3-medium w3-text-teal price fw-bold">{ retrievePrice(post.category ? post.category : [{'term': dummyPrice}]) }</span>
                  </div>
                  <div className="w3-col s4">
                    <button className="w3-button w-100" onClick={ () => {
                      updateCar(
                        {
                          actionType: 'CHECK_ITEM'
                        },{
                          id:         retrievePostID(post.id.$t),
                          name:       retrieveTitle(post.title.$t),
                          picture:    filterThumbnailImages(post.media$thumbnail ? post.media$thumbnail : post.content),
                          price:      retrievePrice(post.category ? post.category : [{'term': dummyPrice}]),
                          quantity:   1
                        }
                      )
                    }}>
                      <i data-ident='icon' className="w3-large">+</i>
                    </button>
                  </div>
                </div>
                <p className='w3-small w3-justify' style={ {height: '60px'} }>{ retrieveDescription(post.content.$t) }</p>
              </div>
            </div>
          </article>
        )) :
          <p className='py-2'>No se encontraron productos</p>
        }
    </div>
  </main>
  )
}